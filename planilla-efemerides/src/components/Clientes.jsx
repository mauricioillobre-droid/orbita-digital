import { useState } from 'react';
import { Boton, Campo, Modal, claseInput } from './ui.jsx';

const PALETA = ['#2563eb', '#db2777', '#16a34a', '#ea580c', '#a16207', '#7c3aed', '#0891b2', '#dc2626', '#4f46e5', '#0d9488', '#be185d', '#65a30d'];

export function ClienteForm({ cliente, clientes, onGuardar, onCerrar }) {
  const [c, setC] = useState(
    cliente || { id: null, nombre: '', rubro: '', localidad: '', color: PALETA[clientes.length % PALETA.length], activo: true }
  );
  const [error, setError] = useState('');
  const set = (patch) => setC({ ...c, ...patch });
  const enviar = (e) => {
    e.preventDefault();
    const nombre = c.nombre.trim();
    if (!nombre) return setError('El nombre es obligatorio.');
    if (clientes.some((x) => x.id !== c.id && x.nombre.trim().toLowerCase() === nombre.toLowerCase())) return setError('Ya existe un cliente con ese nombre.');
    onGuardar({ ...c, nombre });
  };
  return (
    <Modal
      titulo={cliente ? 'Editar cliente' : 'Nuevo cliente'}
      onCerrar={onCerrar}
      pie={
        <>
          <Boton onClick={onCerrar}>Cancelar</Boton>
          <Boton variante="primario" type="submit" form="form-cliente">Guardar</Boton>
        </>
      }
    >
      <form id="form-cliente" onSubmit={enviar} className="space-y-3">
        <Campo etiqueta="Nombre" error={error}>
          <input autoFocus className={claseInput} value={c.nombre} onChange={(e) => set({ nombre: e.target.value })} />
        </Campo>
        <div className="grid grid-cols-2 gap-3">
          <Campo etiqueta="Rubro">
            <input className={claseInput} value={c.rubro} onChange={(e) => set({ rubro: e.target.value })} />
          </Campo>
          <Campo etiqueta="Localidad">
            <input className={claseInput} value={c.localidad} onChange={(e) => set({ localidad: e.target.value })} />
          </Campo>
        </div>
        <Campo etiqueta="Color identificatorio">
          <div className="flex flex-wrap items-center gap-1.5">
            {PALETA.map((p) => (
              <button
                key={p}
                type="button"
                aria-label={`Color ${p}`}
                onClick={() => set({ color: p })}
                className={`h-6 w-6 rounded-full ring-offset-2 ${c.color === p ? 'ring-2 ring-slate-800' : ''}`}
                style={{ backgroundColor: p }}
              />
            ))}
            <input type="color" aria-label="Otro color" value={c.color} onChange={(e) => set({ color: e.target.value })} className="h-7 w-10 cursor-pointer rounded border border-slate-300" />
          </div>
        </Campo>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={c.activo} onChange={(e) => set({ activo: e.target.checked })} />
          Cliente activo
          <span className="text-xs text-slate-400">(los inactivos no cuentan para Común/Particular ni aparecen en la matriz)</span>
        </label>
      </form>
    </Modal>
  );
}

export default function Clientes({ datos, onNuevo, onEditar, onBorrar, onAlternarActivo, onCategoria }) {
  const [nuevaCat, setNuevaCat] = useState('');
  const [renombrando, setRenombrando] = useState(null);
  const cuenta = (id) => datos.asignaciones.filter((a) => a.clienteId === id).length;
  const usoCat = (cat) => datos.efemerides.filter((e) => e.categoria === cat).length;

  return (
    <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
      <section>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-700">Clientes ({datos.clientes.length})</h2>
          <Boton variante="primario" onClick={onNuevo}>+ Nuevo cliente</Boton>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2">Cliente</th>
                <th className="px-3 py-2">Rubro</th>
                <th className="px-3 py-2">Localidad</th>
                <th className="px-3 py-2 text-center">Efemérides</th>
                <th className="px-3 py-2 text-center">Activo</th>
                <th className="px-3 py-2" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {datos.clientes.map((c) => (
                <tr key={c.id} className={c.activo === false ? 'text-slate-400' : ''}>
                  <td className="px-3 py-2 font-medium">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full align-middle" style={{ backgroundColor: c.color }} />
                    {c.nombre}
                  </td>
                  <td className="px-3 py-2">{c.rubro || <span className="text-xs text-amber-600">a completar</span>}</td>
                  <td className="px-3 py-2">{c.localidad || '—'}</td>
                  <td className="px-3 py-2 text-center tabular-nums">{cuenta(c.id)}</td>
                  <td className="px-3 py-2 text-center">
                    <input type="checkbox" aria-label={`${c.nombre} activo`} checked={c.activo !== false} onChange={() => onAlternarActivo(c)} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-right">
                    <button type="button" className="rounded px-2 py-1 text-xs text-indigo-600 hover:bg-indigo-50" onClick={() => onEditar(c)}>Editar</button>
                    <button type="button" className="rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50" onClick={() => onBorrar(c)}>Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold text-slate-700">Categorías</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <ul className="divide-y divide-slate-100 text-sm">
            {datos.categorias.map((cat) => (
              <li key={cat} className="flex items-center gap-2 py-1.5">
                {renombrando?.vieja === cat ? (
                  <form
                    className="flex flex-1 gap-1"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const n = renombrando.nueva.trim();
                      if (n && n !== cat) onCategoria('renombrar', cat, n);
                      setRenombrando(null);
                    }}
                  >
                    <input autoFocus className={`${claseInput} py-1`} value={renombrando.nueva} onChange={(e) => setRenombrando({ ...renombrando, nueva: e.target.value })} />
                    <Boton type="submit" className="py-1">OK</Boton>
                  </form>
                ) : (
                  <>
                    <span className="flex-1">{cat}</span>
                    <span className="text-xs tabular-nums text-slate-400">{usoCat(cat)}</span>
                    <button type="button" className="rounded px-1.5 text-xs text-indigo-600 hover:bg-indigo-50" onClick={() => setRenombrando({ vieja: cat, nueva: cat })}>Renombrar</button>
                    {cat !== 'Otra' && (
                      <button type="button" className="rounded px-1.5 text-xs text-red-600 hover:bg-red-50" onClick={() => onCategoria('borrar', cat)}>Borrar</button>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
          <form
            className="mt-2 flex gap-1"
            onSubmit={(e) => {
              e.preventDefault();
              const n = nuevaCat.trim();
              if (n) onCategoria('agregar', n);
              setNuevaCat('');
            }}
          >
            <input placeholder="Nueva categoría" className={`${claseInput} py-1`} value={nuevaCat} onChange={(e) => setNuevaCat(e.target.value)} />
            <Boton type="submit" className="py-1">Agregar</Boton>
          </form>
        </div>
      </section>
    </div>
  );
}

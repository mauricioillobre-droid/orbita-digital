import { useState } from 'react';
import { DIAS_SEMANA, MESES, ORDINALES, claveMesDia, diaMesValido, fechaEnAnio, formatearLargo, parseDiaMes } from '../lib/fechas.js';
import { Boton, Campo, Modal, claseInput } from './ui.jsx';

const TIPOS = [
  ['fija', 'Fecha fija (se repite todos los años)'],
  ['regla', 'Regla (ej. 3er domingo de junio)'],
  ['pascua', 'Relativa a Pascua (Carnaval, Semana Santa)'],
  ['variable', 'Cambia cada año (cargar fecha por año)'],
];

function aBorrador(ef, asignaciones, anio) {
  const base = ef || { id: null, nombre: '', categoria: 'Otra', tipo: 'fija', notas: '' };
  return {
    ...base,
    dia: base.dia ?? '',
    mes: base.mes ?? 1,
    n: base.n ?? 3,
    diaSemana: base.diaSemana ?? 0,
    offset: base.offset ?? 0,
    anioOrigen: base.anioOrigen ?? '',
    fechasLista: Object.entries(base.fechas || {}).map(([a, md]) => {
      const [m, d] = md.split('-');
      return { anio: a, valor: `${d}/${m}` };
    }),
    nuevaFechaAnio: String(anio),
    asig: Object.fromEntries((asignaciones || []).map((a) => [a.clienteId, a.nota || ''])),
  };
}

export default function EfemerideForm({ ef, asignaciones, datos, anio, onGuardar, onCerrar }) {
  const [b, setB] = useState(() => aBorrador(ef, asignaciones, anio));
  const [errores, setErrores] = useState({});
  const set = (patch) => setB((prev) => ({ ...prev, ...patch }));

  const construir = () => {
    const e = {};
    const nombre = b.nombre.trim();
    if (!nombre) e.nombre = 'El nombre es obligatorio.';
    const out = { id: b.id, nombre, categoria: b.categoria, tipo: b.tipo, notas: b.notas.trim() };
    if (b.anioOrigen !== '' && b.anioOrigen !== null) {
      const ao = Number(b.anioOrigen);
      if (!Number.isInteger(ao) || ao < 1800 || ao > 2100) e.anioOrigen = 'Año inválido.';
      else out.anioOrigen = ao;
    }
    if (b.tipo === 'fija') {
      const dia = Number(b.dia);
      const mes = Number(b.mes);
      if (!diaMesValido(dia, mes)) e.fecha = `Fecha inválida: ${MESES[mes - 1]} tiene como máximo ${[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][mes - 1]} días.`;
      Object.assign(out, { dia, mes });
    } else if (b.tipo === 'regla') {
      Object.assign(out, { n: Number(b.n), diaSemana: Number(b.diaSemana), mes: Number(b.mes) });
    } else if (b.tipo === 'pascua') {
      const offset = Number(b.offset);
      if (!Number.isInteger(offset) || Math.abs(offset) > 120) e.offset = 'Ingresá un número de días entre −120 y 120.';
      out.offset = offset;
    } else if (b.tipo === 'variable') {
      const fechas = {};
      for (const f of b.fechasLista) {
        const p = parseDiaMes(f.valor);
        if (!p || !/^\d{4}$/.test(f.anio)) {
          e.fechas = `Revisá la fecha de ${f.anio || '(sin año)'}: usá DD/MM.`;
          break;
        }
        fechas[f.anio] = claveMesDia(p.mes, p.dia);
      }
      out.fechas = fechas;
    }
    setErrores(e);
    return Object.keys(e).length ? null : out;
  };

  const enviar = (ev) => {
    ev.preventDefault();
    const out = construir();
    if (!out) return;
    onGuardar(out, Object.entries(b.asig).map(([clienteId, nota]) => ({ clienteId, nota: nota.trim() })));
  };

  const vista = (() => {
    try {
      const tmp = { ...b, dia: Number(b.dia), mes: Number(b.mes), n: Number(b.n), diaSemana: Number(b.diaSemana), offset: Number(b.offset) };
      if (b.tipo === 'variable') {
        const f = b.fechasLista.find((x) => x.anio === String(anio));
        const p = f && parseDiaMes(f.valor);
        tmp.fechas = p ? { [anio]: claveMesDia(p.mes, p.dia) } : {};
      }
      return fechaEnAnio(tmp, anio);
    } catch {
      return null;
    }
  })();

  const alternarCliente = (id) => {
    const asig = { ...b.asig };
    if (id in asig) delete asig[id];
    else asig[id] = '';
    set({ asig });
  };

  return (
    <Modal
      titulo={ef ? 'Editar efeméride' : 'Nueva efeméride'}
      onCerrar={onCerrar}
      ancho="max-w-2xl"
      pie={
        <>
          <Boton onClick={onCerrar}>Cancelar</Boton>
          <Boton variante="primario" type="submit" form="form-ef">Guardar</Boton>
        </>
      }
    >
      <form id="form-ef" onSubmit={enviar} className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-[2fr_1fr]">
          <Campo etiqueta="Nombre" error={errores.nombre}>
            <input autoFocus className={claseInput} value={b.nombre} onChange={(e) => set({ nombre: e.target.value })} />
          </Campo>
          <Campo etiqueta="Categoría">
            <select className={claseInput} value={b.categoria} onChange={(e) => set({ categoria: e.target.value })}>
              {datos.categorias.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Campo>
        </div>

        <fieldset className="rounded-lg border border-slate-200 p-3">
          <legend className="px-1 text-xs font-medium text-slate-600">Fecha</legend>
          <select aria-label="Tipo de fecha" className={`${claseInput} mb-3`} value={b.tipo} onChange={(e) => set({ tipo: e.target.value })}>
            {TIPOS.map(([v, l]) => (
              <option key={v} value={v}>{l}</option>
            ))}
          </select>

          {b.tipo === 'fija' && (
            <div className="flex flex-wrap items-end gap-2">
              <Campo etiqueta="Día">
                <input type="number" min="1" max="31" className={`${claseInput} w-20`} value={b.dia} onChange={(e) => set({ dia: e.target.value })} />
              </Campo>
              <Campo etiqueta="Mes">
                <select className={claseInput} value={b.mes} onChange={(e) => set({ mes: Number(e.target.value) })}>
                  {MESES.map((m, i) => (
                    <option key={m} value={i + 1}>{m}</option>
                  ))}
                </select>
              </Campo>
            </div>
          )}

          {b.tipo === 'regla' && (
            <div className="flex flex-wrap items-end gap-2">
              <select aria-label="Ordinal" className={`${claseInput} w-auto`} value={b.n} onChange={(e) => set({ n: Number(e.target.value) })}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{ORDINALES[n]}</option>
                ))}
              </select>
              <select aria-label="Día de la semana" className={`${claseInput} w-auto`} value={b.diaSemana} onChange={(e) => set({ diaSemana: Number(e.target.value) })}>
                {DIAS_SEMANA.map((d, i) => (
                  <option key={d} value={i}>{d}</option>
                ))}
              </select>
              <span className="pb-2 text-sm text-slate-500">de</span>
              <select aria-label="Mes" className={`${claseInput} w-auto`} value={b.mes} onChange={(e) => set({ mes: Number(e.target.value) })}>
                {MESES.map((m, i) => (
                  <option key={m} value={i + 1}>{m.toLowerCase()}</option>
                ))}
              </select>
            </div>
          )}

          {b.tipo === 'pascua' && (
            <Campo etiqueta="Días respecto del domingo de Pascua" ayuda="Ej.: Viernes Santo = −2, Lunes de Carnaval = −48." error={errores.offset}>
              <input type="number" className={`${claseInput} w-28`} value={b.offset} onChange={(e) => set({ offset: e.target.value })} />
            </Campo>
          )}

          {b.tipo === 'variable' && (
            <div className="space-y-2">
              {b.fechasLista.length === 0 && <p className="text-xs text-slate-500">Todavía no hay fechas cargadas.</p>}
              {b.fechasLista.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input aria-label="Año" className={`${claseInput} w-24`} value={f.anio} onChange={(e) => set({ fechasLista: b.fechasLista.map((x, j) => (j === i ? { ...x, anio: e.target.value } : x)) })} />
                  <input aria-label="Fecha DD/MM" placeholder="DD/MM" className={`${claseInput} w-28`} value={f.valor} onChange={(e) => set({ fechasLista: b.fechasLista.map((x, j) => (j === i ? { ...x, valor: e.target.value } : x)) })} />
                  <button type="button" className="text-xs text-red-600 hover:underline" onClick={() => set({ fechasLista: b.fechasLista.filter((_, j) => j !== i) })}>quitar</button>
                </div>
              ))}
              <Boton
                className="py-1 text-xs"
                onClick={() => {
                  const usados = new Set(b.fechasLista.map((f) => f.anio));
                  let a = Number(b.nuevaFechaAnio);
                  while (usados.has(String(a))) a++;
                  set({ fechasLista: [...b.fechasLista, { anio: String(a), valor: '' }] });
                }}
              >
                + Agregar año
              </Boton>
              {errores.fechas && <p className="text-xs text-red-600">{errores.fechas}</p>}
            </div>
          )}
          {errores.fecha && <p className="mt-2 text-xs text-red-600">{errores.fecha}</p>}
          <p className="mt-3 text-xs text-slate-500">
            En {anio}: <strong className="text-slate-700">{vista ? formatearLargo(vista) : 'fecha pendiente'}</strong>
          </p>
        </fieldset>

        <div className="grid gap-3 sm:grid-cols-[1fr_10rem]">
          <Campo etiqueta="Notas">
            <textarea rows={2} className={claseInput} value={b.notas} onChange={(e) => set({ notas: e.target.value })} />
          </Campo>
          <Campo etiqueta="Año de origen" ayuda="Para mostrar los años cumplidos (aniversarios)." error={errores.anioOrigen}>
            <input type="number" className={claseInput} value={b.anioOrigen} onChange={(e) => set({ anioOrigen: e.target.value })} />
          </Campo>
        </div>

        <fieldset>
          <legend className="mb-1.5 flex w-full items-center justify-between text-xs font-medium text-slate-600">
            <span>Clientes asignados ({Object.keys(b.asig).length})</span>
            <span className="space-x-2">
              <button type="button" className="text-indigo-600 hover:underline" onClick={() => set({ asig: Object.fromEntries(datos.clientes.filter((c) => c.activo !== false).map((c) => [c.id, b.asig[c.id] ?? ''])) })}>
                todos
              </button>
              <button type="button" className="text-indigo-600 hover:underline" onClick={() => set({ asig: {} })}>ninguno</button>
            </span>
          </legend>
          <ul className="divide-y divide-slate-100 rounded-lg border border-slate-200">
            {datos.clientes.map((c) => {
              const on = c.id in b.asig;
              return (
                <li key={c.id} className="flex flex-wrap items-center gap-2 px-3 py-1.5">
                  <label className="flex min-w-[13rem] cursor-pointer items-center gap-2 text-sm">
                    <input type="checkbox" checked={on} style={{ accentColor: c.color }} onChange={() => alternarCliente(c.id)} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className={c.activo === false ? 'text-slate-400' : ''}>{c.nombre}{c.activo === false && ' (inactivo)'}</span>
                  </label>
                  {on && (
                    <input
                      aria-label={`Nota para ${c.nombre}`}
                      placeholder="Idea de contenido / enfoque (opcional)"
                      className={`${claseInput} flex-1 py-1 text-xs`}
                      value={b.asig[c.id]}
                      onChange={(e) => set({ asig: { ...b.asig, [c.id]: e.target.value } })}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </fieldset>
      </form>
    </Modal>
  );
}

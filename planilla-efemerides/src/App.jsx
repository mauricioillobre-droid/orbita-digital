import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { datosIniciales } from './data/semilla.js';
import { aCsv, descargar } from './lib/csv.js';
import {
  ETIQUETA_CLASE, FILTROS_VACIOS, aplicarFiltros, buscarDuplicado, calcularFilas, cargar, guardar, ops, reducer, uid, validarDatos,
} from './lib/estado.js';
import { describirRegla, formatear } from './lib/fechas.js';
import Calendario from './components/Calendario.jsx';
import Clientes, { ClienteForm } from './components/Clientes.jsx';
import EfemerideForm from './components/EfemerideForm.jsx';
import Filtros from './components/Filtros.jsx';
import ImportarCsv from './components/ImportarCsv.jsx';
import Matriz from './components/Matriz.jsx';
import Proximas from './components/Proximas.jsx';
import Tabla from './components/Tabla.jsx';
import { Boton, useConfirmar } from './components/ui.jsx';

function usePersistido(clave, inicial, sanear = (v) => v) {
  const [valor, setValor] = useState(() => {
    try {
      const raw = localStorage.getItem(clave);
      return raw ? sanear(JSON.parse(raw)) : inicial;
    } catch {
      return inicial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch {
      /* ignorar */
    }
  }, [clave, valor]);
  return [valor, setValor];
}

function anioPorDefecto() {
  const hoy = new Date();
  return hoy.getMonth() >= 9 ? hoy.getFullYear() + 1 : hoy.getFullYear(); // desde octubre se planifica el año siguiente
}

const VISTAS = [
  ['tabla', 'Tabla'],
  ['matriz', 'Matriz'],
  ['calendario', 'Calendario'],
  ['proximas', 'Próximas'],
  ['clientes', 'Clientes y categorías'],
];

export default function App() {
  const [hist, dispatch] = useReducer(reducer, null, () => ({ present: cargar(), past: [] }));
  const datos = hist.present;
  useEffect(() => guardar(datos), [datos]);
  const commit = useCallback((fn, label) => dispatch({ type: 'commit', fn, label }), []);
  const confirmar = useConfirmar();

  const [anio, setAnio] = usePersistido('planilla-efemerides-anio', anioPorDefecto(), (v) => (Number.isInteger(v) ? v : anioPorDefecto()));
  const [vista, setVista] = usePersistido('planilla-efemerides-vista', 'tabla');
  const [filtros, setFiltros] = usePersistido('planilla-efemerides-filtros', FILTROS_VACIOS, (v) => ({ ...FILTROS_VACIOS, ...v }));
  const [editandoEf, setEditandoEf] = useState(null); // { ef } | { ef: null }
  const [editandoCli, setEditandoCli] = useState(null);
  const [importandoCsv, setImportandoCsv] = useState(false);
  const [aviso, setAviso] = useState(null);
  const [menu, setMenu] = useState(false);
  const inputJson = useRef(null);

  const avisar = useCallback((texto, tipo = 'ok') => {
    setAviso({ texto, tipo, t: Date.now() });
  }, []);
  useEffect(() => {
    if (!aviso) return;
    const t = setTimeout(() => setAviso(null), 3500);
    return () => clearTimeout(t);
  }, [aviso]);

  // Atajo Ctrl/Cmd+Z para deshacer (fuera de campos de texto)
  useEffect(() => {
    const tecla = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        dispatch({ type: 'undo' });
      }
    };
    window.addEventListener('keydown', tecla);
    return () => window.removeEventListener('keydown', tecla);
  }, []);

  const activos = useMemo(() => datos.clientes.filter((c) => c.activo !== false), [datos.clientes]);
  const filas = useMemo(() => calcularFilas(datos, anio), [datos, anio]);
  const visibles = useMemo(() => aplicarFiltros(filas, filtros), [filas, filtros]);
  const clienteUnico = filtros.clientes.length === 1 ? datos.clientes.find((c) => c.id === filtros.clientes[0]) : null;
  const columnasMatriz = filtros.clientes.length ? activos.filter((c) => filtros.clientes.includes(c.id)) : activos;
  const resumen = useMemo(() => {
    const r = { comun: 0, particular: 0, sin: 0 };
    filas.forEach((f) => r[f.clase]++);
    return r;
  }, [filas]);
  const ultimo = hist.past[hist.past.length - 1];

  // ---------- acciones ----------

  const guardarEf = async (ef, asignaciones) => {
    const esNueva = !ef.id;
    const final = esNueva ? { ...ef, id: uid('ef') } : ef;
    const dup = buscarDuplicado(datos, final, anio);
    if (dup) {
      const ok = await confirmar({
        titulo: 'Posible duplicado',
        mensaje: `Ya existe "${dup.nombre}" con la misma fecha en ${anio}.\n¿Querés guardarla igual?`,
        aceptar: 'Guardar igual',
      });
      if (!ok) return;
    }
    commit(ops.guardarEfemeride(final, asignaciones), `${esNueva ? 'Crear' : 'Editar'} "${final.nombre}"`);
    setEditandoEf(null);
    avisar(esNueva ? `Se creó "${final.nombre}".` : `Se guardaron los cambios de "${final.nombre}".`);
  };

  const borrarEf = async (ef) => {
    const ok = await confirmar({ titulo: 'Borrar efeméride', mensaje: `¿Borrar "${ef.nombre}" y todas sus asignaciones?`, aceptar: 'Borrar', peligro: true });
    if (!ok) return;
    commit(ops.borrarEfemeride(ef.id), `Borrar "${ef.nombre}"`);
    avisar(`Se borró "${ef.nombre}". Podés deshacerlo.`);
  };

  const patchEf = (id, patch, label) => {
    const actual = datos.efemerides.find((e) => e.id === id);
    const nueva = { ...actual, ...patch };
    const dup = buscarDuplicado(datos, nueva, anio);
    if (dup) avisar(`Atención: ya existe "${dup.nombre}" con la misma fecha.`, 'alerta');
    commit(ops.patchEfemeride(id, patch), label);
  };

  const guardarCliente = (c) => {
    const esNuevo = !c.id;
    commit(ops.guardarCliente(esNuevo ? { ...c, id: uid('cli') } : c), `${esNuevo ? 'Crear' : 'Editar'} cliente "${c.nombre}"`);
    setEditandoCli(null);
    avisar(esNuevo ? `Se creó el cliente "${c.nombre}".` : 'Cliente actualizado.');
  };

  const borrarCliente = async (c) => {
    const n = datos.asignaciones.filter((a) => a.clienteId === c.id).length;
    const ok = await confirmar({
      titulo: 'Borrar cliente',
      mensaje: `¿Borrar a "${c.nombre}"?\nSe quitarán sus ${n} asignaciones. Las efemérides no se borran.\n\nSi solo querés ocultarlo, marcalo como inactivo.`,
      aceptar: 'Borrar cliente',
      peligro: true,
    });
    if (!ok) return;
    commit(ops.borrarCliente(c.id), `Borrar cliente "${c.nombre}"`);
    setFiltros((f) => ({ ...f, clientes: f.clientes.filter((id) => id !== c.id) }));
    avisar(`Se borró "${c.nombre}".`);
  };

  const categoria = async (accion, cat, nueva) => {
    if (accion === 'agregar') commit(ops.agregarCategoria(cat), `Agregar categoría "${cat}"`);
    if (accion === 'renombrar') commit(ops.renombrarCategoria(cat, nueva), `Renombrar categoría "${cat}"`);
    if (accion === 'borrar') {
      const n = datos.efemerides.filter((e) => e.categoria === cat).length;
      const ok = await confirmar({
        titulo: 'Borrar categoría',
        mensaje: n ? `"${cat}" se usa en ${n} efemérides; pasarán a "Otra". ¿Continuar?` : `¿Borrar la categoría "${cat}"?`,
        aceptar: 'Borrar',
        peligro: true,
      });
      if (ok) commit(ops.borrarCategoria(cat), `Borrar categoría "${cat}"`);
    }
  };

  const exportarJson = async () => {
    const ok = await descargar(`efemerides-backup-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(datos, null, 2), 'application/json');
    if (ok) avisar('Backup descargado.');
  };

  const importarJson = async (e) => {
    const archivo = e.target.files?.[0];
    e.target.value = '';
    if (!archivo) return;
    let d;
    try {
      d = JSON.parse(await archivo.text());
    } catch {
      return avisar('El archivo no es un JSON válido.', 'error');
    }
    const err = validarDatos(d);
    if (err) return avisar(err, 'error');
    const ok = await confirmar({
      titulo: 'Importar backup',
      mensaje: `El archivo tiene ${d.clientes.length} clientes y ${d.efemerides.length} efemérides.\nVa a reemplazar todos los datos actuales (podés deshacerlo).`,
      aceptar: 'Reemplazar datos',
    });
    if (!ok) return;
    commit(ops.reemplazar(d), 'Importar backup JSON');
    avisar('Datos importados.');
  };

  const exportarCsv = async () => {
    const cab = ['Fecha', 'Nombre', 'Categoría', 'Tipo de fecha', 'Clasificación', 'Clientes', 'Notas'];
    const filasCsv = visibles.map((r) => [
      r.fecha ? formatear(r.fecha) : '',
      r.ef.nombre,
      r.ef.categoria,
      describirRegla(r.ef),
      ETIQUETA_CLASE[r.clase],
      r.clientes.map((c) => c.nombre).join(', '),
      [r.ef.notas, ...r.asignaciones.filter((a) => a.nota).map((a) => `${r.clientes.find((c) => c.id === a.clienteId).nombre}: ${a.nota}`)].filter(Boolean).join(' | '),
    ]);
    const ok = await descargar(`efemerides-${anio}.csv`, aCsv([cab, ...filasCsv]), 'text/csv;charset=utf-8');
    if (ok) avisar(`Se exportaron ${filasCsv.length} filas.`);
  };

  const restaurar = async () => {
    const ok = await confirmar({ titulo: 'Restaurar datos iniciales', mensaje: 'Se reemplazarán todos los datos por la carga inicial. Podés deshacerlo.', aceptar: 'Restaurar', peligro: true });
    if (ok) {
      commit(ops.reemplazar(datosIniciales()), 'Restaurar datos iniciales');
      avisar('Datos iniciales restaurados.');
    }
  };

  const abrirEf = (ef) => setEditandoEf({ ef });

  // ---------- render ----------

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-16">
      <header className="sticky top-0 z-40 -mx-4 mb-4 border-b border-slate-200 bg-slate-50/95 px-4 py-3 backdrop-blur">
        <div className="flex flex-wrap items-center gap-3">
          <div className="mr-auto">
            <h1 className="text-lg font-bold leading-tight">Planilla de efemérides</h1>
            <p className="text-xs text-slate-500">
              {datos.efemerides.length} efemérides · {activos.length} clientes activos · {resumen.comun} comunes · {resumen.particular} particulares · {resumen.sin} sin asignar
            </p>
          </div>
          <div className="flex items-center rounded-md border border-slate-300 bg-white">
            <button type="button" aria-label="Año anterior" className="px-2 py-1.5 text-slate-500 hover:text-slate-900" onClick={() => setAnio(anio - 1)}>‹</button>
            <span className="min-w-[3.5rem] text-center text-sm font-semibold tabular-nums" aria-live="polite">{anio}</span>
            <button type="button" aria-label="Año siguiente" className="px-2 py-1.5 text-slate-500 hover:text-slate-900" onClick={() => setAnio(anio + 1)}>›</button>
          </div>
          <Boton onClick={() => dispatch({ type: 'undo' })} disabled={!ultimo} title={ultimo ? `Deshacer: ${ultimo.label}` : 'Nada para deshacer'}>
            ↶ Deshacer
          </Boton>
          <div className="relative">
            <Boton onClick={() => setMenu(!menu)} aria-expanded={menu}>Datos ▾</Boton>
            {menu && (
              <div className="absolute right-0 z-50 mt-1 w-60 rounded-lg border border-slate-200 bg-white py-1 shadow-lg" onMouseLeave={() => setMenu(false)}>
                {[
                  ['Exportar vista a CSV', exportarCsv],
                  ['Importar efemérides desde CSV', () => setImportandoCsv(true)],
                  ['Exportar backup (JSON)', exportarJson],
                  ['Importar backup (JSON)', () => inputJson.current?.click()],
                  ['Restaurar datos iniciales', restaurar],
                ].map(([t, fn]) => (
                  <button key={t} type="button" className="block w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50" onClick={() => { setMenu(false); fn(); }}>
                    {t}
                  </button>
                ))}
              </div>
            )}
            <input ref={inputJson} type="file" accept=".json,application/json" className="hidden" onChange={importarJson} aria-label="Archivo de backup" />
          </div>
          <Boton variante="primario" onClick={() => setEditandoEf({ ef: null })}>+ Nueva efeméride</Boton>
        </div>
        <nav className="mt-3 flex gap-1 overflow-x-auto" aria-label="Vistas">
          {VISTAS.map(([v, t]) => (
            <button
              key={v}
              type="button"
              aria-current={vista === v ? 'page' : undefined}
              onClick={() => setVista(v)}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ${vista === v ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200/60'}`}
            >
              {t}
            </button>
          ))}
        </nav>
      </header>

      {vista !== 'clientes' && (
        <div className="mb-4">
          <Filtros filtros={filtros} setFiltros={setFiltros} clientes={activos} categorias={datos.categorias} ocultarMeses={vista === 'proximas'} />
          {vista !== 'proximas' && (
            <p className="mt-2 text-xs text-slate-500">
              Mostrando {visibles.length} de {filas.length} efemérides de {anio}.
            </p>
          )}
        </div>
      )}

      <main>
        {vista === 'tabla' && (
          <Tabla filas={visibles} clienteUnico={clienteUnico} categorias={datos.categorias} onEditar={abrirEf} onBorrar={borrarEf} onPatch={patchEf} />
        )}
        {vista === 'matriz' && (
          <Matriz
            filas={visibles}
            clientes={columnasMatriz}
            onEditar={abrirEf}
            onAlternar={(ef, c) => commit(ops.alternarAsignacion(ef.id, c.id), `Asignación "${ef.nombre}" – ${c.nombre}`)}
            onTodos={(ef, ids, activar) => commit(ops.asignarVarios(ef.id, ids, activar), `${activar ? 'Asignar' : 'Quitar'} todos en "${ef.nombre}"`)}
          />
        )}
        {vista === 'calendario' && <Calendario filas={visibles} onEditar={abrirEf} />}
        {vista === 'proximas' && <Proximas datos={datos} filtros={filtros} onEditar={abrirEf} />}
        {vista === 'clientes' && (
          <Clientes
            datos={datos}
            onNuevo={() => setEditandoCli({ cliente: null })}
            onEditar={(c) => setEditandoCli({ cliente: c })}
            onBorrar={borrarCliente}
            onAlternarActivo={(c) => commit(ops.guardarCliente({ ...c, activo: c.activo === false }), `${c.activo === false ? 'Activar' : 'Desactivar'} "${c.nombre}"`)}
            onCategoria={categoria}
          />
        )}
      </main>

      {editandoEf && (
        <EfemerideForm
          ef={editandoEf.ef}
          asignaciones={editandoEf.ef ? datos.asignaciones.filter((a) => a.efId === editandoEf.ef.id) : []}
          datos={datos}
          anio={anio}
          onGuardar={guardarEf}
          onCerrar={() => setEditandoEf(null)}
        />
      )}
      {editandoCli && <ClienteForm cliente={editandoCli.cliente} clientes={datos.clientes} onGuardar={guardarCliente} onCerrar={() => setEditandoCli(null)} />}
      {importandoCsv && (
        <ImportarCsv
          datos={datos}
          anio={anio}
          onCerrar={() => setImportandoCsv(false)}
          onImportar={(items) => {
            commit(ops.agregarVarias(items), `Importar ${items.length} efemérides desde CSV`);
            setImportandoCsv(false);
            avisar(`Se importaron ${items.length} efemérides.`);
          }}
        />
      )}

      {aviso && (
        <div
          role="status"
          className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg px-4 py-2 text-sm text-white shadow-lg ${
            aviso.tipo === 'error' ? 'bg-red-600' : aviso.tipo === 'alerta' ? 'bg-amber-600' : 'bg-slate-900'
          }`}
        >
          {aviso.texto}
        </div>
      )}
    </div>
  );
}

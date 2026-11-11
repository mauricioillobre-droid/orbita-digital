import { useMemo, useState } from 'react';
import { describirRegla, formatear, formatearLargo, parseDiaMes } from '../lib/fechas.js';
import { compararPorFecha, edadEnAnio } from '../lib/estado.js';
import { Chip, ClaseBadge, Vacio, claseInput } from './ui.jsx';

const ORDEN_CLASE = { comun: 0, particular: 1, sin: 2 };

function ordenar(filas, col, dir) {
  const f = [...filas];
  const cmp = {
    fecha: compararPorFecha,
    nombre: (a, b) => a.ef.nombre.localeCompare(b.ef.nombre, 'es'),
    categoria: (a, b) => a.ef.categoria.localeCompare(b.ef.categoria, 'es') || compararPorFecha(a, b),
    clientes: (a, b) => a.clientes.length - b.clientes.length || compararPorFecha(a, b),
    clase: (a, b) => ORDEN_CLASE[a.clase] - ORDEN_CLASE[b.clase] || compararPorFecha(a, b),
  }[col];
  f.sort(cmp);
  return dir === 'desc' ? f.reverse() : f;
}

/** Celda que se edita con un clic: Enter guarda, Escape cancela. */
function Editable({ valor, mostrar, onGuardar, tipo = 'texto', opciones, validar, etiqueta }) {
  const [editando, setEditando] = useState(false);
  const [borrador, setBorrador] = useState(valor);
  const error = editando && validar ? validar(borrador) : null;

  const empezar = () => {
    setBorrador(valor);
    setEditando(true);
  };
  const terminar = (guardarCambio) => {
    if (guardarCambio && !error && borrador !== valor && String(borrador).trim()) onGuardar(borrador);
    setEditando(false);
  };

  if (!editando) {
    return (
      <button type="button" title="Clic para editar" aria-label={`Editar ${etiqueta}`} onClick={empezar} className="-mx-1 rounded px-1 text-left hover:bg-indigo-50 hover:ring-1 hover:ring-indigo-200">
        {mostrar ?? valor}
      </button>
    );
  }
  const comunes = {
    autoFocus: true,
    'aria-label': etiqueta,
    value: borrador,
    onChange: (e) => setBorrador(e.target.value),
    onBlur: () => terminar(true),
    onKeyDown: (e) => {
      if (e.key === 'Enter') terminar(true);
      if (e.key === 'Escape') terminar(false);
    },
    className: `${claseInput} py-1 ${error ? 'border-red-400 ring-2 ring-red-100' : ''}`,
  };
  return (
    <div>
      {tipo === 'select' ? (
        <select {...comunes}>
          {opciones.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input {...comunes} />
      )}
      {error && <div className="mt-0.5 text-xs text-red-600">{error}</div>}
    </div>
  );
}

function validarFecha(v) {
  return parseDiaMes(v) ? null : 'Fecha inválida (usá DD/MM)';
}

function Cuerpo({ filas, categorias, onEditar, onBorrar, onPatch, otrosDe }) {
  return (
    <tbody className="divide-y divide-slate-100">
      {filas.map((r) => {
        const edad = edadEnAnio(r.ef, r.anio);
        const clientes = otrosDe ? r.clientes.filter((c) => c.id !== otrosDe) : r.clientes;
        return (
          <tr key={r.ef.id} className="align-top hover:bg-slate-50/70">
            <td className="whitespace-nowrap px-3 py-2 tabular-nums">
              {r.ef.tipo === 'fija' ? (
                <Editable
                  etiqueta="fecha"
                  valor={formatear(new Date(2000, r.ef.mes - 1, r.ef.dia))}
                  mostrar={r.fecha ? formatear(r.fecha) : <span className="text-amber-700">29/02 (no existe este año)</span>}
                  validar={validarFecha}
                  onGuardar={(v) => onPatch(r.ef.id, parseDiaMes(v), `Cambiar fecha de "${r.ef.nombre}"`)}
                />
              ) : r.fecha ? (
                <span title={formatearLargo(r.fecha)}>{formatear(r.fecha)}</span>
              ) : (
                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-800">Fecha pendiente</span>
              )}
              <div className="text-[11px] text-slate-400">{r.fecha ? formatearLargo(r.fecha).split(' ')[0] : ''}{r.ef.tipo !== 'fija' && ` · ${describirRegla(r.ef)}`}</div>
            </td>
            <td className="px-3 py-2">
              <Editable etiqueta="nombre" valor={r.ef.nombre} onGuardar={(v) => onPatch(r.ef.id, { nombre: v.trim() }, `Renombrar "${r.ef.nombre}"`)} />
              {edad !== null && edad >= 0 && <span className="ml-1.5 rounded bg-emerald-50 px-1.5 text-xs text-emerald-700">{edad} años</span>}
              {r.ef.notas && <div className="mt-0.5 line-clamp-2 text-xs text-slate-400">{r.ef.notas}</div>}
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-slate-600">
              <Editable etiqueta="categoría" tipo="select" opciones={categorias} valor={r.ef.categoria} onGuardar={(v) => onPatch(r.ef.id, { categoria: v }, `Cambiar categoría de "${r.ef.nombre}"`)} />
            </td>
            <td className="px-3 py-2">
              <div className="flex flex-wrap gap-1">
                {otrosDe && <span className="mr-0.5 text-xs text-slate-400">con</span>}
                {clientes.length ? clientes.map((c) => <Chip key={c.id} cliente={c} pequeño />) : <span className="text-xs text-slate-400">—</span>}
              </div>
              {r.asignaciones.some((a) => a.nota) && (
                <ul className="mt-1 space-y-0.5 text-xs text-slate-500">
                  {r.asignaciones.filter((a) => a.nota).map((a) => {
                    const c = r.clientes.find((x) => x.id === a.clienteId);
                    return (
                      <li key={a.clienteId}>
                        <span className="font-medium" style={{ color: c.color }}>{c.nombre}:</span> {a.nota}
                      </li>
                    );
                  })}
                </ul>
              )}
            </td>
            <td className="px-3 py-2">
              <ClaseBadge clase={r.clase} n={r.clientes.length} />
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-right">
              <button type="button" className="rounded px-2 py-1 text-xs text-indigo-600 hover:bg-indigo-50" onClick={() => onEditar(r.ef)}>
                Editar
              </button>
              <button type="button" className="rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50" onClick={() => onBorrar(r.ef)}>
                Borrar
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

function TablaSimple({ filas, orden, setOrden, ...resto }) {
  const cab = [
    ['fecha', 'Fecha'],
    ['nombre', 'Efeméride'],
    ['categoria', 'Categoría'],
    ['clientes', 'Clientes'],
    ['clase', 'Tipo'],
  ];
  const ordenadas = useMemo(() => ordenar(filas, orden.col, orden.dir), [filas, orden]);
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
          <tr>
            {cab.map(([col, txt]) => (
              <th key={col} className="px-3 py-2 font-semibold" aria-sort={orden.col === col ? (orden.dir === 'asc' ? 'ascending' : 'descending') : 'none'}>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 uppercase hover:text-slate-800"
                  onClick={() => setOrden({ col, dir: orden.col === col && orden.dir === 'asc' ? 'desc' : 'asc' })}
                >
                  {txt}
                  <span className="text-[10px]">{orden.col === col ? (orden.dir === 'asc' ? '▲' : '▼') : '↕'}</span>
                </button>
              </th>
            ))}
            <th className="px-3 py-2" />
          </tr>
        </thead>
        <Cuerpo filas={ordenadas} {...resto} />
      </table>
    </div>
  );
}

export default function Tabla({ filas, clienteUnico, ...resto }) {
  const [orden, setOrden] = useState({ col: 'fecha', dir: 'asc' });
  if (!filas.length) return <Vacio>No hay efemérides que coincidan con los filtros.</Vacio>;

  if (clienteUnico) {
    const compartidas = filas.filter((r) => r.clientes.length > 1);
    const propias = filas.filter((r) => r.clientes.length === 1);
    return (
      <div className="space-y-5">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-slate-700">
            Comparte con otros clientes <span className="font-normal text-slate-400">({compartidas.length})</span>
          </h3>
          {compartidas.length ? (
            <TablaSimple filas={compartidas} orden={orden} setOrden={setOrden} otrosDe={clienteUnico.id} {...resto} />
          ) : (
            <Vacio>Ninguna en común con los filtros actuales.</Vacio>
          )}
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-slate-700">
            Solo de <span style={{ color: clienteUnico.color }}>{clienteUnico.nombre}</span>{' '}
            <span className="font-normal text-slate-400">({propias.length})</span>
          </h3>
          {propias.length ? <TablaSimple filas={propias} orden={orden} setOrden={setOrden} {...resto} /> : <Vacio>No tiene efemérides propias con los filtros actuales.</Vacio>}
        </div>
      </div>
    );
  }
  return <TablaSimple filas={filas} orden={orden} setOrden={setOrden} {...resto} />;
}

import { formatear } from '../lib/fechas.js';
import { ClaseBadge, Vacio } from './ui.jsx';

export default function Matriz({ filas, clientes, onAlternar, onTodos, onEditar }) {
  if (!clientes.length) return <Vacio>No hay clientes activos para mostrar.</Vacio>;
  if (!filas.length) return <Vacio>No hay efemérides que coincidan con los filtros.</Vacio>;

  const ids = clientes.map((c) => c.id);
  const totalCol = (id) => filas.filter((r) => r.clientes.some((c) => c.id === id)).length;

  return (
    <div className="max-h-[calc(100vh-17rem)] min-h-[20rem] overflow-auto rounded-xl border border-slate-200 bg-white">
      <table className="border-separate border-spacing-0 text-sm">
        <thead>
          <tr>
            <th className="sticky left-0 top-0 z-30 min-w-[18rem] border-b border-r border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Efeméride
            </th>
            {clientes.map((c) => (
              <th key={c.id} className="sticky top-0 z-20 w-28 min-w-[7rem] border-b border-slate-200 bg-slate-50 px-2 py-2 text-center align-bottom text-xs font-semibold text-slate-700">
                <span className="mx-auto mb-1 block h-1.5 w-8 rounded-full" style={{ backgroundColor: c.color }} />
                {c.nombre}
              </th>
            ))}
            <th className="sticky top-0 z-20 border-b border-l border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500">Total</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((r) => {
            const asignados = new Set(r.clientes.map((c) => c.id));
            const todos = ids.every((id) => asignados.has(id));
            return (
              <tr key={r.ef.id} className="group">
                <td className="sticky left-0 z-10 border-b border-r border-slate-100 bg-white px-3 py-1.5 group-hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <span className="w-11 shrink-0 tabular-nums text-slate-500">{r.fecha ? formatear(r.fecha) : '—'}</span>
                    <button type="button" className="truncate text-left hover:text-indigo-600 hover:underline" title={r.ef.nombre} onClick={() => onEditar(r.ef)}>
                      {r.ef.nombre}
                    </button>
                    <span className="ml-auto shrink-0">
                      <ClaseBadge clase={r.clase} n={r.clientes.length} />
                    </span>
                  </div>
                </td>
                {clientes.map((c) => (
                  <td key={c.id} className="border-b border-slate-100 text-center group-hover:bg-slate-50" style={asignados.has(c.id) ? { backgroundColor: `${c.color}12` } : undefined}>
                    <label className="flex h-full cursor-pointer items-center justify-center py-1.5">
                      <input
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer"
                        style={{ accentColor: c.color }}
                        checked={asignados.has(c.id)}
                        onChange={() => onAlternar(r.ef, c)}
                        aria-label={`${r.ef.nombre} – ${c.nombre}`}
                      />
                    </label>
                  </td>
                ))}
                <td className="whitespace-nowrap border-b border-l border-slate-100 px-2 text-center group-hover:bg-slate-50">
                  <span className="mr-1 tabular-nums font-medium">{r.clientes.filter((c) => ids.includes(c.id)).length}</span>
                  <button type="button" className="rounded px-1.5 text-[11px] text-indigo-600 hover:bg-indigo-50" onClick={() => onTodos(r.ef, ids, !todos)}>
                    {todos ? 'quitar todos' : 'todos'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="sticky bottom-0 left-0 z-30 border-r border-t border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500">
              Total por cliente ({filas.length} efemérides)
            </td>
            {clientes.map((c) => (
              <td key={c.id} className="sticky bottom-0 z-20 border-t border-slate-200 bg-slate-50 py-2 text-center text-xs font-semibold tabular-nums">
                {totalCol(c.id)}
              </td>
            ))}
            <td className="sticky bottom-0 z-20 border-l border-t border-slate-200 bg-slate-50" />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

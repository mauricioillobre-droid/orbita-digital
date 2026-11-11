import { MESES } from '../lib/fechas.js';
import { ESTILO_CLASE } from './ui.jsx';

function Item({ r, onEditar }) {
  const estilo =
    r.clase === 'particular'
      ? { borderLeftColor: r.clientes[0].color, backgroundColor: `${r.clientes[0].color}10` }
      : undefined;
  return (
    <li>
      <button
        type="button"
        onClick={() => onEditar(r.ef)}
        className={`flex w-full items-start gap-2 rounded border-l-4 px-2 py-1 text-left text-xs hover:brightness-95 ${
          r.clase === 'comun' ? 'border-slate-600 bg-slate-100' : r.clase === 'sin' ? 'border-dashed border-slate-300 bg-slate-50 text-slate-500' : ''
        }`}
        style={estilo}
      >
        <span className="w-5 shrink-0 font-semibold tabular-nums">{r.fecha ? r.fecha.getDate() : '?'}</span>
        <span className="min-w-0 flex-1">
          <span className="block">{r.ef.nombre}</span>
          <span className="mt-0.5 flex flex-wrap gap-0.5">
            {r.clientes.map((c) => (
              <span key={c.id} className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} title={c.nombre} />
            ))}
          </span>
        </span>
      </button>
    </li>
  );
}

export default function Calendario({ filas, onEditar }) {
  const pendientes = filas.filter((r) => !r.fecha);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 text-xs text-slate-600">
        <span className="rounded border border-l-4 border-slate-300 border-l-slate-600 bg-slate-100 px-2 py-0.5">Común: 2 o más clientes (puntos = clientes)</span>
        <span className="rounded border border-l-4 border-amber-200 border-l-amber-500 bg-amber-50 px-2 py-0.5 text-amber-800">Particular: un solo cliente (borde con el color del cliente)</span>
        <span className={`rounded border border-dashed px-2 py-0.5 ${ESTILO_CLASE.sin}`}>Sin asignar</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MESES.map((mes, i) => {
          const del_mes = filas.filter((r) => r.fecha && r.fecha.getMonth() === i);
          return (
            <section key={mes} className="rounded-xl border border-slate-200 bg-white p-3">
              <h3 className="mb-2 flex items-baseline justify-between text-sm font-semibold">
                {mes}
                <span className="text-xs font-normal text-slate-400">{del_mes.length}</span>
              </h3>
              {del_mes.length ? (
                <ul className="space-y-1">
                  {del_mes.map((r) => (
                    <Item key={r.ef.id} r={r} onEditar={onEditar} />
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-400">Sin efemérides</p>
              )}
            </section>
          );
        })}
      </div>
      {pendientes.length > 0 && (
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-3">
          <h3 className="mb-2 text-sm font-semibold text-amber-900">Con fecha pendiente para este año</h3>
          <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {pendientes.map((r) => (
              <Item key={r.ef.id} r={r} onEditar={onEditar} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

import { diasEntre, formatearLargo, sinHora } from '../lib/fechas.js';
import { aplicarFiltros, calcularFilas } from '../lib/estado.js';
import { Chip, ClaseBadge, Vacio } from './ui.jsx';

export default function Proximas({ datos, filtros, dias = 30, onEditar }) {
  const hoy = sinHora(new Date());
  const anio = hoy.getFullYear();
  const filas = [...calcularFilas(datos, anio), ...calcularFilas(datos, anio + 1)]
    .filter((r) => r.fecha && r.fecha >= hoy && diasEntre(hoy, r.fecha) <= dias);
  const visibles = aplicarFiltros(filas, filtros, { ignorarMeses: true }).sort((a, b) => a.fecha - b.fecha);

  if (!visibles.length) return <Vacio>No hay efemérides en los próximos {dias} días con los filtros actuales.</Vacio>;

  return (
    <div className="space-y-2">
      <p className="text-sm text-slate-500">Desde hoy ({formatearLargo(hoy)}) y los próximos {dias} días.</p>
      <ul className="space-y-2">
        {visibles.map((r) => {
          const faltan = diasEntre(hoy, r.fecha);
          return (
            <li key={`${r.ef.id}-${r.anio}`} className="flex flex-wrap items-start gap-3 rounded-xl border border-slate-200 bg-white p-3">
              <div className="w-20 shrink-0 text-center">
                <div className="text-2xl font-bold tabular-nums leading-none">{r.fecha.getDate()}</div>
                <div className="text-xs uppercase text-slate-500">{formatearLargo(r.fecha).split(' ').slice(-1)[0].slice(0, 3)}</div>
                <div className={`mt-1 text-[11px] font-medium ${faltan <= 7 ? 'text-red-600' : 'text-slate-400'}`}>
                  {faltan === 0 ? 'hoy' : faltan === 1 ? 'mañana' : `en ${faltan} días`}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <button type="button" className="font-medium hover:text-indigo-600 hover:underline" onClick={() => onEditar(r.ef)}>
                    {r.ef.nombre}
                  </button>
                  <ClaseBadge clase={r.clase} n={r.clientes.length} />
                  <span className="text-xs text-slate-400">{r.ef.categoria} · {formatearLargo(r.fecha)}</span>
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {r.clientes.length ? r.clientes.map((c) => <Chip key={c.id} cliente={c} pequeño />) : <span className="text-xs text-slate-400">Sin clientes asignados</span>}
                </div>
                {r.asignaciones.some((a) => a.nota) && (
                  <ul className="mt-1.5 space-y-0.5 text-xs text-slate-600">
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
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

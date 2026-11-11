import { MESES } from '../lib/fechas.js';
import { FILTROS_VACIOS, hayFiltros } from '../lib/estado.js';
import { Boton, claseInput } from './ui.jsx';

const TIPOS = [
  ['comun', 'Comunes'],
  ['particular', 'Particulares'],
  ['sin', 'Sin asignar'],
];

function alternar(lista, valor) {
  return lista.includes(valor) ? lista.filter((v) => v !== valor) : [...lista, valor];
}

function Pastilla({ activa, onClick, children, color }) {
  return (
    <button
      type="button"
      aria-pressed={activa}
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition ${
        activa ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-300 bg-white text-slate-600 hover:border-slate-400'
      }`}
    >
      {color && <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />}
      {children}
    </button>
  );
}

export default function Filtros({ filtros, setFiltros, clientes, categorias, ocultarMeses }) {
  const set = (patch) => setFiltros({ ...filtros, ...patch });
  return (
    <section className="space-y-2.5 rounded-xl border border-slate-200 bg-white p-3">
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="search"
          placeholder="Buscar efeméride…"
          value={filtros.q}
          onChange={(e) => set({ q: e.target.value })}
          className={`${claseInput} max-w-xs`}
          aria-label="Buscar"
        />
        {!ocultarMeses && (
          <div className="flex items-center gap-1.5 text-sm text-slate-600">
            <span>De</span>
            <select aria-label="Mes desde" className={`${claseInput} w-auto`} value={filtros.desde} onChange={(e) => set({ desde: Number(e.target.value) })}>
              {MESES.map((m, i) => (
                <option key={m} value={i + 1}>{m}</option>
              ))}
            </select>
            <span>a</span>
            <select aria-label="Mes hasta" className={`${claseInput} w-auto`} value={filtros.hasta} onChange={(e) => set({ hasta: Number(e.target.value) })}>
              {MESES.map((m, i) => (
                <option key={m} value={i + 1}>{m}</option>
              ))}
            </select>
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {TIPOS.map(([v, l]) => (
            <Pastilla key={v} activa={filtros.tipos.includes(v)} onClick={() => set({ tipos: alternar(filtros.tipos, v) })}>
              {l}
            </Pastilla>
          ))}
        </div>
        {hayFiltros(filtros) && (
          <Boton variante="fantasma" className="ml-auto" onClick={() => setFiltros(FILTROS_VACIOS)}>
            Limpiar filtros
          </Boton>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-xs font-medium text-slate-500">Clientes:</span>
        {clientes.map((c) => (
          <Pastilla key={c.id} color={c.color} activa={filtros.clientes.includes(c.id)} onClick={() => set({ clientes: alternar(filtros.clientes, c.id) })}>
            {c.nombre}
          </Pastilla>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-xs font-medium text-slate-500">Categorías:</span>
        {categorias.map((c) => (
          <Pastilla key={c} activa={filtros.categorias.includes(c)} onClick={() => set({ categorias: alternar(filtros.categorias, c) })}>
            {c}
          </Pastilla>
        ))}
      </div>
    </section>
  );
}

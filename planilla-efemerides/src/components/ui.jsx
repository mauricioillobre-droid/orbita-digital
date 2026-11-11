import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ETIQUETA_CLASE } from '../lib/estado.js';

export function Boton({ variante = 'secundario', className = '', ...props }) {
  const estilos = {
    primario: 'bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600',
    secundario: 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300',
    peligro: 'bg-red-600 text-white hover:bg-red-700 border-red-600',
    fantasma: 'bg-transparent text-slate-600 hover:bg-slate-100 border-transparent',
  };
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${estilos[variante]} ${className}`}
      {...props}
    />
  );
}

export function Modal({ titulo, onCerrar, children, pie, ancho = 'max-w-lg' }) {
  useEffect(() => {
    const tecla = (e) => e.key === 'Escape' && onCerrar();
    window.addEventListener('keydown', tecla);
    return () => window.removeEventListener('keydown', tecla);
  }, [onCerrar]);
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/40 p-4 sm:p-8" onMouseDown={(e) => e.target === e.currentTarget && onCerrar()}>
      <div role="dialog" aria-modal="true" aria-label={titulo} className={`w-full ${ancho} rounded-xl bg-white shadow-xl`}>
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <h2 className="text-base font-semibold">{titulo}</h2>
          <button type="button" aria-label="Cerrar" className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700" onClick={onCerrar}>
            ✕
          </button>
        </div>
        <div className="px-5 py-4">{children}</div>
        {pie && <div className="flex justify-end gap-2 border-t border-slate-200 px-5 py-3">{pie}</div>}
      </div>
    </div>
  );
}

const ConfirmCtx = createContext(null);

export function ConfirmProvider({ children }) {
  const [pedido, setPedido] = useState(null);
  const resolver = useRef(null);
  const confirmar = useCallback(
    (opciones) =>
      new Promise((res) => {
        resolver.current = res;
        setPedido(opciones);
      }),
    []
  );
  const cerrar = (valor) => {
    resolver.current?.(valor);
    resolver.current = null;
    setPedido(null);
  };
  return (
    <ConfirmCtx.Provider value={confirmar}>
      {children}
      {pedido && (
        <Modal
          titulo={pedido.titulo || 'Confirmar'}
          onCerrar={() => cerrar(false)}
          ancho="max-w-md"
          pie={
            <>
              <Boton onClick={() => cerrar(false)}>Cancelar</Boton>
              <Boton variante={pedido.peligro ? 'peligro' : 'primario'} onClick={() => cerrar(true)} autoFocus>
                {pedido.aceptar || 'Aceptar'}
              </Boton>
            </>
          }
        >
          <p className="whitespace-pre-line text-sm text-slate-600">{pedido.mensaje}</p>
        </Modal>
      )}
    </ConfirmCtx.Provider>
  );
}

export const useConfirmar = () => useContext(ConfirmCtx);

export function Chip({ cliente, pequeño = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full border font-medium ${pequeño ? 'px-1.5 py-0 text-[11px]' : 'px-2 py-0.5 text-xs'}`}
      style={{ backgroundColor: `${cliente.color}1a`, borderColor: `${cliente.color}66`, color: cliente.color }}
      title={cliente.nombre}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: cliente.color }} />
      {cliente.nombre}
    </span>
  );
}

export const ESTILO_CLASE = {
  comun: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  particular: 'bg-amber-50 text-amber-800 border-amber-200',
  sin: 'bg-slate-100 text-slate-500 border-slate-200',
};

export function ClaseBadge({ clase, n }) {
  return (
    <span className={`inline-flex whitespace-nowrap rounded border px-1.5 py-0.5 text-xs font-medium ${ESTILO_CLASE[clase]}`}>
      {ETIQUETA_CLASE[clase]}
      {clase === 'comun' && n ? ` · ${n}` : ''}
    </span>
  );
}

export function Campo({ etiqueta, children, ayuda, error }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-600">{etiqueta}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : ayuda && <span className="mt-1 block text-xs text-slate-400">{ayuda}</span>}
    </label>
  );
}

export const claseInput =
  'w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200';

export function Vacio({ children }) {
  return <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">{children}</div>;
}

import { useState } from 'react';
import { leerCsv } from '../lib/csv.js';
import { buscarDuplicado, normalizar, uid } from '../lib/estado.js';
import { parseDiaMes } from '../lib/fechas.js';
import { Boton, Modal } from './ui.jsx';

function buscarColumna(cabecera, ...nombres) {
  return cabecera.findIndex((c) => nombres.includes(normalizar(c)));
}

export function analizarCsv(texto, datos, anio) {
  const { sep, filas } = leerCsv(texto);
  if (filas.length < 2) return { error: 'El archivo no tiene filas para importar.' };
  const cab = filas[0];
  const iNombre = buscarColumna(cab, 'nombre', 'efemeride');
  const iFecha = buscarColumna(cab, 'fecha');
  const iCat = buscarColumna(cab, 'categoria');
  const iCli = buscarColumna(cab, 'clientes', 'cliente');
  const iNotas = buscarColumna(cab, 'notas', 'nota');
  if (iNombre < 0 || iFecha < 0) return { error: 'El CSV necesita al menos las columnas "Nombre" y "Fecha".' };

  const sepClientes = sep === ';' ? ',' : ';';
  const porNombre = new Map(datos.clientes.map((c) => [normalizar(c.nombre), c]));
  const cats = new Map(datos.categorias.map((c) => [normalizar(c), c]));
  const vistos = [];

  const items = filas.slice(1).map((f, i) => {
    const nombre = (f[iNombre] || '').trim();
    const p = parseDiaMes(f[iFecha]);
    const avisos = [];
    let error = null;
    if (!nombre) error = 'Falta el nombre';
    else if (!p) error = `Fecha inválida: "${f[iFecha] || ''}"`;

    const catTxt = iCat >= 0 ? (f[iCat] || '').trim() : '';
    let categoria = catTxt ? cats.get(normalizar(catTxt)) : 'Otra';
    if (!categoria) {
      categoria = catTxt;
      avisos.push(`Categoría nueva: ${catTxt}`);
    }
    const clientes = [];
    if (iCli >= 0) {
      for (const n of (f[iCli] || '').split(sepClientes).map((s) => s.trim()).filter(Boolean)) {
        const c = porNombre.get(normalizar(n));
        if (c) clientes.push(c.id);
        else avisos.push(`Cliente no encontrado: ${n}`);
      }
    }
    const ef = { id: uid('ef'), nombre, categoria, tipo: 'fija', dia: p?.dia, mes: p?.mes, notas: iNotas >= 0 ? (f[iNotas] || '').trim() : '' };
    if (!error) {
      const dup = buscarDuplicado(datos, ef, anio) || vistos.find((v) => normalizar(v.nombre) === normalizar(nombre) && v.dia === ef.dia && v.mes === ef.mes);
      if (dup) error = 'Ya existe (mismo nombre y fecha)';
      else vistos.push(ef);
    }
    return { fila: i + 2, ef, clientes, error, avisos };
  });
  return { items, sepClientes };
}

export default function ImportarCsv({ datos, anio, onImportar, onCerrar }) {
  const [res, setRes] = useState(null);
  const leer = async (e) => {
    const archivo = e.target.files?.[0];
    if (!archivo) return;
    setRes(analizarCsv(await archivo.text(), datos, anio));
  };
  const validos = res?.items?.filter((x) => !x.error) || [];
  return (
    <Modal
      titulo="Importar efemérides desde CSV"
      onCerrar={onCerrar}
      ancho="max-w-3xl"
      pie={
        <>
          <Boton onClick={onCerrar}>Cancelar</Boton>
          <Boton variante="primario" disabled={!validos.length} onClick={() => onImportar(validos)}>
            Importar {validos.length || ''} efeméride{validos.length === 1 ? '' : 's'}
          </Boton>
        </>
      }
    >
      <div className="space-y-3 text-sm">
        <p className="text-slate-600">
          Columnas: <code className="rounded bg-slate-100 px-1">Nombre</code>, <code className="rounded bg-slate-100 px-1">Fecha</code> (DD/MM) y opcionales{' '}
          <code className="rounded bg-slate-100 px-1">Categoría</code>, <code className="rounded bg-slate-100 px-1">Clientes</code>, <code className="rounded bg-slate-100 px-1">Notas</code>.
          Si el archivo usa <strong>;</strong> como separador, los clientes van separados por coma; si usa <strong>,</strong>, por punto y coma. Se importan como fecha fija.
        </p>
        <pre className="overflow-x-auto rounded bg-slate-50 p-2 text-xs text-slate-600">{'Nombre;Fecha;Categoría;Clientes\nDía del Estudiante;21/09;Efeméride social;GLAM, SP Piscinas'}</pre>
        <input type="file" accept=".csv,text/csv" onChange={leer} aria-label="Archivo CSV" className="block text-sm" />
        {res?.error && <p className="text-red-600">{res.error}</p>}
        {res?.items && (
          <div className="max-h-80 overflow-auto rounded border border-slate-200">
            <table className="min-w-full text-xs">
              <thead className="sticky top-0 bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-2 py-1">Fila</th>
                  <th className="px-2 py-1">Nombre</th>
                  <th className="px-2 py-1">Fecha</th>
                  <th className="px-2 py-1">Clientes</th>
                  <th className="px-2 py-1">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {res.items.map((x) => (
                  <tr key={x.fila} className={x.error ? 'bg-red-50' : ''}>
                    <td className="px-2 py-1 text-slate-400">{x.fila}</td>
                    <td className="px-2 py-1">{x.ef.nombre}</td>
                    <td className="px-2 py-1 tabular-nums">{x.ef.dia ? `${String(x.ef.dia).padStart(2, '0')}/${String(x.ef.mes).padStart(2, '0')}` : '—'}</td>
                    <td className="px-2 py-1">{x.clientes.length}</td>
                    <td className="px-2 py-1">
                      {x.error ? <span className="text-red-700">{x.error} — se omite</span> : <span className="text-emerald-700">OK</span>}
                      {x.avisos.map((a) => (
                        <div key={a} className="text-amber-700">{a}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Modal>
  );
}

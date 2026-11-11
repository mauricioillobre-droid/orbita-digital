export function aCsv(filas, sep = ';') {
  const esc = (v) => {
    const s = String(v ?? '');
    return /[";,\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  // BOM para que Excel respete los acentos
  return '﻿' + filas.map((f) => f.map(esc).join(sep)).join('\r\n');
}

/** Detecta el separador (; o ,) por la primera línea y respeta comillas. */
export function leerCsv(texto) {
  const t = String(texto || '').replace(/^﻿/, '');
  const primera = t.split(/\r?\n/)[0] || '';
  const sep = primera.split(';').length >= primera.split(',').length ? ';' : ',';
  const filas = [];
  let fila = [];
  let campo = '';
  let comillas = false;
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (comillas) {
      if (ch === '"') {
        if (t[i + 1] === '"') {
          campo += '"';
          i++;
        } else comillas = false;
      } else campo += ch;
    } else if (ch === '"') comillas = true;
    else if (ch === sep) {
      fila.push(campo);
      campo = '';
    } else if (ch === '\n') {
      fila.push(campo);
      filas.push(fila);
      fila = [];
      campo = '';
    } else if (ch !== '\r') campo += ch;
  }
  if (campo || fila.length) {
    fila.push(campo);
    filas.push(fila);
  }
  return { sep, filas: filas.filter((f) => f.some((c) => c.trim())) };
}

export function descargar(nombreArchivo, contenido, tipo) {
  const blob = new Blob([contenido], { type: tipo });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nombreArchivo;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

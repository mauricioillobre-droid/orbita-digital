import { datosIniciales } from '../data/semilla.js';
import { fechaEnAnio } from './fechas.js';

const CLAVE = 'planilla-efemerides-datos-v1';

export function uid(prefijo) {
  const r = typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID().slice(0, 8)
    : Math.random().toString(36).slice(2, 10);
  return `${prefijo}-${r}`;
}

export function normalizar(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

/** Devuelve un mensaje de error o null si los datos tienen la forma esperada. */
export function validarDatos(d) {
  if (!d || typeof d !== 'object') return 'El archivo no contiene datos válidos.';
  for (const k of ['categorias', 'clientes', 'efemerides', 'asignaciones']) {
    if (!Array.isArray(d[k])) return `Falta la lista "${k}".`;
  }
  if (d.clientes.some((c) => !c.id || !c.nombre)) return 'Hay clientes sin id o nombre.';
  if (d.efemerides.some((e) => !e.id || !e.nombre || !e.tipo)) return 'Hay efemérides sin id, nombre o tipo.';
  return null;
}

export function cargar() {
  try {
    const raw = localStorage.getItem(CLAVE);
    if (raw) {
      const d = JSON.parse(raw);
      if (!validarDatos(d)) return d;
    }
  } catch {
    /* sin almacenamiento: se usan los datos iniciales */
  }
  return datosIniciales();
}

export function guardar(datos) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(datos));
  } catch {
    /* ignorar */
  }
}

// ---------- historial (deshacer) ----------

export function reducer(s, a) {
  switch (a.type) {
    case 'commit': {
      const next = a.fn(s.present);
      if (next === s.present) return s;
      return { present: next, past: [...s.past.slice(-49), { estado: s.present, label: a.label }] };
    }
    case 'undo': {
      if (!s.past.length) return s;
      const prev = s.past[s.past.length - 1];
      return { present: prev.estado, past: s.past.slice(0, -1) };
    }
    default:
      return s;
  }
}

// ---------- operaciones puras sobre los datos ----------

export const ops = {
  guardarEfemeride: (ef, asignaciones) => (s) => {
    const existe = s.efemerides.some((e) => e.id === ef.id);
    return {
      ...s,
      categorias: s.categorias.includes(ef.categoria) ? s.categorias : [...s.categorias, ef.categoria],
      efemerides: existe ? s.efemerides.map((e) => (e.id === ef.id ? ef : e)) : [...s.efemerides, ef],
      asignaciones: [
        ...s.asignaciones.filter((a) => a.efId !== ef.id),
        ...asignaciones.map((a) => ({ efId: ef.id, clienteId: a.clienteId, nota: a.nota || '' })),
      ],
    };
  },
  agregarVarias: (items) => (s) => {
    const nuevasCat = [...new Set(items.map((i) => i.ef.categoria))].filter((c) => !s.categorias.includes(c));
    return {
      ...s,
      categorias: [...s.categorias, ...nuevasCat],
      efemerides: [...s.efemerides, ...items.map((i) => i.ef)],
      asignaciones: [
        ...s.asignaciones,
        ...items.flatMap((i) => i.clientes.map((clienteId) => ({ efId: i.ef.id, clienteId, nota: '' }))),
      ],
    };
  },
  patchEfemeride: (id, patch) => (s) => ({
    ...s,
    efemerides: s.efemerides.map((e) => (e.id === id ? { ...e, ...patch } : e)),
  }),
  borrarEfemeride: (id) => (s) => ({
    ...s,
    efemerides: s.efemerides.filter((e) => e.id !== id),
    asignaciones: s.asignaciones.filter((a) => a.efId !== id),
  }),
  alternarAsignacion: (efId, clienteId) => (s) => {
    const tiene = s.asignaciones.some((a) => a.efId === efId && a.clienteId === clienteId);
    return {
      ...s,
      asignaciones: tiene
        ? s.asignaciones.filter((a) => !(a.efId === efId && a.clienteId === clienteId))
        : [...s.asignaciones, { efId, clienteId, nota: '' }],
    };
  },
  asignarVarios: (efId, clienteIds, activar) => (s) => {
    const afecta = (a) => a.efId === efId && clienteIds.includes(a.clienteId);
    const resto = s.asignaciones.filter((a) => !afecta(a));
    if (!activar) return { ...s, asignaciones: resto };
    const previas = new Map(s.asignaciones.filter(afecta).map((a) => [a.clienteId, a]));
    return {
      ...s,
      asignaciones: [...resto, ...clienteIds.map((c) => previas.get(c) || { efId, clienteId: c, nota: '' })],
    };
  },
  guardarCliente: (c) => (s) => {
    const existe = s.clientes.some((x) => x.id === c.id);
    return { ...s, clientes: existe ? s.clientes.map((x) => (x.id === c.id ? c : x)) : [...s.clientes, c] };
  },
  borrarCliente: (id) => (s) => ({
    ...s,
    clientes: s.clientes.filter((c) => c.id !== id),
    asignaciones: s.asignaciones.filter((a) => a.clienteId !== id),
  }),
  agregarCategoria: (nombre) => (s) =>
    s.categorias.includes(nombre) ? s : { ...s, categorias: [...s.categorias, nombre] },
  renombrarCategoria: (vieja, nueva) => (s) => ({
    ...s,
    categorias: s.categorias.includes(nueva)
      ? s.categorias.filter((c) => c !== vieja)
      : s.categorias.map((c) => (c === vieja ? nueva : c)),
    efemerides: s.efemerides.map((e) => (e.categoria === vieja ? { ...e, categoria: nueva } : e)),
  }),
  borrarCategoria: (nombre) => (s) => {
    const cats = s.categorias.filter((c) => c !== nombre);
    if (!cats.includes('Otra')) cats.push('Otra');
    return {
      ...s,
      categorias: cats,
      efemerides: s.efemerides.map((e) => (e.categoria === nombre ? { ...e, categoria: 'Otra' } : e)),
    };
  },
  reemplazar: (datos) => () => datos,
};

// ---------- datos derivados ----------

export function clasificar(n) {
  if (n >= 2) return 'comun';
  if (n === 1) return 'particular';
  return 'sin';
}

export const ETIQUETA_CLASE = { comun: 'Común', particular: 'Particular', sin: 'Sin asignar' };

/** Filas listas para mostrar: efeméride + fecha del año + clientes activos asignados + clase. */
export function calcularFilas(datos, anio) {
  const activos = new Map(datos.clientes.filter((c) => c.activo !== false).map((c) => [c.id, c]));
  const porEf = new Map();
  for (const a of datos.asignaciones) {
    if (!activos.has(a.clienteId)) continue;
    if (!porEf.has(a.efId)) porEf.set(a.efId, []);
    porEf.get(a.efId).push(a);
  }
  const orden = new Map(datos.clientes.map((c, i) => [c.id, i]));
  return datos.efemerides
    .map((ef) => {
      const asignaciones = (porEf.get(ef.id) || []).sort((x, y) => orden.get(x.clienteId) - orden.get(y.clienteId));
      return {
        ef,
        fecha: fechaEnAnio(ef, anio),
        anio,
        asignaciones,
        clientes: asignaciones.map((a) => activos.get(a.clienteId)),
        clase: clasificar(asignaciones.length),
      };
    })
    .sort(compararPorFecha);
}

export function compararPorFecha(a, b) {
  if (a.fecha && b.fecha) return a.fecha - b.fecha || a.ef.nombre.localeCompare(b.ef.nombre, 'es');
  if (a.fecha) return -1;
  if (b.fecha) return 1;
  return a.ef.nombre.localeCompare(b.ef.nombre, 'es');
}

export const FILTROS_VACIOS = { q: '', clientes: [], desde: 1, hasta: 12, tipos: [], categorias: [] };

export function hayFiltros(f) {
  return Boolean(f.q || f.clientes.length || f.desde !== 1 || f.hasta !== 12 || f.tipos.length || f.categorias.length);
}

export function aplicarFiltros(filas, f, { ignorarMeses = false } = {}) {
  const q = normalizar(f.q);
  const filtraMeses = !ignorarMeses && (f.desde !== 1 || f.hasta !== 12);
  return filas.filter((r) => {
    if (f.clientes.length && !r.clientes.some((c) => f.clientes.includes(c.id))) return false;
    if (filtraMeses) {
      if (!r.fecha) return false;
      const m = r.fecha.getMonth() + 1;
      const dentro = f.desde <= f.hasta ? m >= f.desde && m <= f.hasta : m >= f.desde || m <= f.hasta;
      if (!dentro) return false;
    }
    if (f.tipos.length && !f.tipos.includes(r.clase)) return false;
    if (f.categorias.length && !f.categorias.includes(r.ef.categoria)) return false;
    if (q && !normalizar(`${r.ef.nombre} ${r.ef.notas || ''} ${r.ef.categoria}`).includes(q)) return false;
    return true;
  });
}

/** Otra efeméride con el mismo nombre y la misma fecha en el año dado. */
export function buscarDuplicado(datos, ef, anio) {
  const nombre = normalizar(ef.nombre);
  const f = fechaEnAnio(ef, anio);
  return datos.efemerides.find((otra) => {
    if (otra.id === ef.id || normalizar(otra.nombre) !== nombre) return false;
    const g = fechaEnAnio(otra, anio);
    if (!f || !g) return !f && !g && otra.tipo === ef.tipo;
    return f.getTime() === g.getTime();
  });
}

export function edadEnAnio(ef, anio) {
  return ef.anioOrigen ? anio - ef.anioOrigen : null;
}

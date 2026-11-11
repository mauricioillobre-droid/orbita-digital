export const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];
export const DIAS_SEMANA = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
export const ORDINALES = ['', '1er', '2do', '3er', '4to', '5to'];

const DIAS_EN_MES = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function diasEnMes(mes) {
  return DIAS_EN_MES[mes - 1] ?? 0;
}

/** Día/mes válido en algún año (permite 29/02). */
export function diaMesValido(dia, mes) {
  return Number.isInteger(dia) && Number.isInteger(mes) && mes >= 1 && mes <= 12 && dia >= 1 && dia <= diasEnMes(mes);
}

/** Fecha válida en un año concreto. */
export function crearFecha(anio, mes, dia) {
  if (!diaMesValido(dia, mes)) return null;
  const f = new Date(anio, mes - 1, dia);
  return f.getMonth() === mes - 1 ? f : null; // 29/02 en año no bisiesto -> null
}

/** Domingo de Pascua (algoritmo gregoriano anónimo). */
export function pascua(anio) {
  const a = anio % 19;
  const b = Math.floor(anio / 100);
  const c = anio % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31);
  const dia = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(anio, mes - 1, dia);
}

/** n-ésimo día de la semana de un mes (ej. 3er domingo de junio). */
export function enesimoDiaSemana(anio, mes, n, diaSemana) {
  const primero = new Date(anio, mes - 1, 1);
  const desfase = (diaSemana - primero.getDay() + 7) % 7;
  const f = new Date(anio, mes - 1, 1 + desfase + (n - 1) * 7);
  return f.getMonth() === mes - 1 ? f : null;
}

/** Fecha concreta de una efeméride en un año, o null si está pendiente. */
export function fechaEnAnio(ef, anio) {
  switch (ef.tipo) {
    case 'fija':
      return crearFecha(anio, ef.mes, ef.dia);
    case 'regla':
      return enesimoDiaSemana(anio, ef.mes, ef.n, ef.diaSemana);
    case 'pascua': {
      const p = pascua(anio);
      return new Date(anio, p.getMonth(), p.getDate() + (ef.offset || 0));
    }
    case 'variable': {
      const v = ef.fechas?.[anio];
      if (!v) return null;
      const [mes, dia] = v.split('-').map(Number);
      return crearFecha(anio, mes, dia);
    }
    default:
      return null;
  }
}

const dos = (n) => String(n).padStart(2, '0');

export function formatear(fecha) {
  return fecha ? `${dos(fecha.getDate())}/${dos(fecha.getMonth() + 1)}` : '';
}

export function formatearLargo(fecha) {
  return fecha ? `${DIAS_SEMANA[fecha.getDay()]} ${fecha.getDate()} de ${MESES[fecha.getMonth()].toLowerCase()}` : '';
}

/** "DD/MM" o "DD/MM/AAAA" -> { dia, mes } */
export function parseDiaMes(texto) {
  const m = String(texto || '').trim().match(/^(\d{1,2})\s*[/\-.]\s*(\d{1,2})(?:\s*[/\-.]\s*\d{2,4})?$/);
  if (!m) return null;
  const dia = Number(m[1]);
  const mes = Number(m[2]);
  return diaMesValido(dia, mes) ? { dia, mes } : null;
}

export function claveMesDia(mes, dia) {
  return `${dos(mes)}-${dos(dia)}`;
}

/** Descripción de cómo se calcula la fecha. */
export function describirRegla(ef) {
  switch (ef.tipo) {
    case 'fija':
      return 'Fecha fija';
    case 'regla':
      return `${ORDINALES[ef.n]} ${DIAS_SEMANA[ef.diaSemana]} de ${MESES[ef.mes - 1].toLowerCase()}`;
    case 'pascua': {
      const o = ef.offset || 0;
      if (o === 0) return 'Domingo de Pascua';
      return `Pascua ${o > 0 ? '+' : '−'}${Math.abs(o)} días`;
    }
    case 'variable':
      return 'Cambia cada año';
    default:
      return '';
  }
}

export function sinHora(fecha) {
  return new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
}

export function diasEntre(desde, hasta) {
  return Math.round((sinHora(hasta) - sinHora(desde)) / 86400000);
}

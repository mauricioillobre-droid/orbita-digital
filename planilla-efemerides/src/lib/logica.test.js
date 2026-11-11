import { describe, expect, it } from 'vitest';
import { datosIniciales } from '../data/semilla.js';
import { analizarCsv } from '../components/ImportarCsv.jsx';
import { aCsv, leerCsv } from './csv.js';
import { aplicarFiltros, buscarDuplicado, calcularFilas, FILTROS_VACIOS, ops } from './estado.js';
import { fechaEnAnio, formatear, parseDiaMes, pascua } from './fechas.js';

const fecha = (nombre, anio, datos = datosIniciales()) =>
  formatear(fechaEnAnio(datos.efemerides.find((e) => e.nombre === nombre), anio));

describe('fechas móviles', () => {
  it('calcula Pascua', () => {
    expect(formatear(pascua(2026))).toBe('05/04');
    expect(formatear(pascua(2027))).toBe('28/03');
  });
  it('coincide con el listado 2026', () => {
    expect(fecha('Carnaval', 2026)).toBe('16/02');
    expect(fecha('Viernes Santo (Semana Santa)', 2026)).toBe('03/04');
  });
  it('calcula 2027', () => {
    expect(fecha('Carnaval', 2027)).toBe('08/02');
    expect(fecha('Viernes Santo (Semana Santa)', 2027)).toBe('26/03');
    expect(fecha('Día del Padre', 2027)).toBe('20/06');
    expect(fecha('Día del Niño', 2027)).toBe('15/08');
    expect(fecha('Día de la Madre', 2027)).toBe('17/10');
  });
  it('valida fechas', () => {
    expect(parseDiaMes('31/04')).toBeNull();
    expect(parseDiaMes('29/02')).toEqual({ dia: 29, mes: 2 });
    expect(parseDiaMes('5/9')).toEqual({ dia: 5, mes: 9 });
  });
});

describe('clasificación', () => {
  it('generales comunes, propias particulares', () => {
    const filas = calcularFilas(datosIniciales(), 2027);
    const de = (n) => filas.find((r) => r.ef.nombre === n);
    expect(de('Navidad').clase).toBe('comun');
    expect(de('Día del Kinesiólogo').clase).toBe('particular');
    expect(de('Aniversario del Complejo').clientes[0].nombre).toBe('Complejo Los Cedros');
  });
  it('los inactivos no cuentan', () => {
    let d = datosIniciales();
    const km = d.clientes.find((c) => c.nombre.startsWith('KM'));
    d = ops.guardarCliente({ ...km, activo: false })(d);
    expect(calcularFilas(d, 2027).find((r) => r.ef.nombre === 'Día del Kinesiólogo').clase).toBe('sin');
  });
  it('borrar un cliente no borra efemérides', () => {
    const d = datosIniciales();
    const d2 = ops.borrarCliente('cli-paracol')(d);
    expect(d2.efemerides.length).toBe(d.efemerides.length);
    expect(d2.asignaciones.some((a) => a.clienteId === 'cli-paracol')).toBe(false);
  });
  it('filtra por cliente y tipo', () => {
    const filas = calcularFilas(datosIniciales(), 2027);
    const propias = aplicarFiltros(filas, { ...FILTROS_VACIOS, clientes: ['cli-cedros'], tipos: ['particular'] });
    expect(propias.map((r) => r.ef.nombre).sort()).toEqual(
      ['Aniversario del Complejo', 'Cumpleaños de Elvira', 'Cumpleaños de Mariana', 'Cumpleaños de Meli'].sort()
    );
  });
});

describe('duplicados y CSV', () => {
  it('detecta duplicado por nombre y fecha', () => {
    const d = datosIniciales();
    expect(buscarDuplicado(d, { id: 'x', nombre: 'navidad', tipo: 'fija', dia: 25, mes: 12 }, 2027)).toBeTruthy();
    expect(buscarDuplicado(d, { id: 'x', nombre: 'Navidad', tipo: 'fija', dia: 24, mes: 12 }, 2027)).toBeFalsy();
  });
  it('CSV ida y vuelta', () => {
    const txt = aCsv([['Nombre', 'Fecha', 'Clientes'], ['Día del Estudiante', '21/09', 'GLAM, SP Piscinas'], ['Navidad', '25/12', 'GLAM'], ['Mal', '31/04', '']]);
    expect(leerCsv(txt).filas[1]).toEqual(['Día del Estudiante', '21/09', 'GLAM, SP Piscinas']);
    const r = analizarCsv(txt, datosIniciales(), 2027);
    expect(r.items[0].error).toBeNull();
    expect(r.items[0].clientes).toEqual(['cli-glam', 'cli-sp']);
    expect(r.items[1].error).toMatch(/Ya existe/);
    expect(r.items[2].error).toMatch(/inválida/);
  });
});

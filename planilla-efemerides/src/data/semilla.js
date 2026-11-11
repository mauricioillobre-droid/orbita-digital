// Datos iniciales de la planilla. Se cargan la primera vez (o con "Restaurar datos iniciales").

export const CATEGORIAS_INICIALES = [
  'Feriado inamovible',
  'Feriado trasladable',
  'Efeméride social',
  'Del rubro',
  'Institucional',
  'Cumpleaños',
  'Otra',
];

const KM = 'cli-km';
const GLAM = 'cli-glam';
const CEDROS = 'cli-cedros';
const TERRAZAS = 'cli-terrazas';
const REFUGIO = 'cli-refugio';
const PARACOL = 'cli-paracol';
const SP = 'cli-sp';

export const CLIENTES_INICIALES = [
  { id: KM, nombre: 'KM Centro de Entrenamiento', rubro: 'Gimnasio / entrenamiento', localidad: '', color: '#2563eb', activo: true },
  { id: GLAM, nombre: 'GLAM', rubro: 'Estética', localidad: '', color: '#db2777', activo: true },
  { id: CEDROS, nombre: 'Complejo Los Cedros', rubro: '', localidad: '', color: '#16a34a', activo: true },
  { id: TERRAZAS, nombre: 'Terrazas de Merlo', rubro: '', localidad: 'Merlo', color: '#ea580c', activo: true },
  { id: REFUGIO, nombre: 'El Refugio de los Pájaros', rubro: '', localidad: '', color: '#a16207', activo: true },
  { id: PARACOL, nombre: 'Paracol', rubro: 'Industria', localidad: 'Camilo Aldao, Córdoba', color: '#7c3aed', activo: true },
  { id: SP, nombre: 'SP Piscinas', rubro: 'Piscinas', localidad: '', color: '#0891b2', activo: true },
];

const TODOS = CLIENTES_INICIALES.map((c) => c.id);

const NOTA_TRASLADABLE =
  'Feriado trasladable: el día no laborable puede moverse por decreto. Revisar el calendario oficial del año.';

let n = 0;
const id = () => `ef-${String(++n).padStart(3, '0')}`;

const fija = (dia, mes, nombre, categoria, clientes, extra = {}) => ({
  ef: { id: id(), nombre, categoria, tipo: 'fija', dia, mes, notas: '', ...extra },
  clientes,
});
const regla = (n, diaSemana, mes, nombre, categoria, clientes) => ({
  ef: { id: id(), nombre, categoria, tipo: 'regla', n, diaSemana, mes, notas: '' },
  clientes,
});
const relPascua = (offset, nombre, categoria, clientes, notas = '') => ({
  ef: { id: id(), nombre, categoria, tipo: 'pascua', offset, notas },
  clientes,
});

const LISTA = [
  // Generales: todos los clientes
  fija(1, 1, 'Año Nuevo', 'Feriado inamovible', TODOS),
  relPascua(-48, 'Carnaval', 'Feriado inamovible', TODOS, 'Lunes y martes de Carnaval.'),
  fija(2, 4, 'Día del Veterano y de los Caídos en Malvinas', 'Feriado inamovible', TODOS),
  relPascua(-2, 'Viernes Santo (Semana Santa)', 'Feriado inamovible', TODOS),
  fija(1, 5, 'Día del Trabajador', 'Feriado inamovible', TODOS),
  fija(25, 5, 'Día de la Revolución de Mayo', 'Feriado inamovible', TODOS),
  fija(17, 6, 'Paso a la Inmortalidad del Gral. Güemes', 'Feriado trasladable', TODOS, { notas: NOTA_TRASLADABLE }),
  fija(20, 6, 'Día de la Bandera', 'Feriado inamovible', TODOS),
  regla(3, 0, 6, 'Día del Padre', 'Efeméride social', TODOS),
  fija(9, 7, 'Día de la Independencia', 'Feriado inamovible', TODOS),
  fija(20, 7, 'Día del Amigo', 'Efeméride social', TODOS),
  fija(17, 8, 'Paso a la Inmortalidad del Gral. San Martín', 'Feriado trasladable', TODOS, { notas: NOTA_TRASLADABLE }),
  regla(3, 0, 8, 'Día del Niño', 'Efeméride social', TODOS),
  fija(21, 9, 'Día de la Primavera', 'Efeméride social', TODOS),
  fija(27, 9, 'Día Mundial del Turismo', 'Efeméride social', TODOS),
  regla(3, 0, 10, 'Día de la Madre', 'Efeméride social', TODOS),
  fija(20, 11, 'Día de la Soberanía Nacional', 'Feriado trasladable', TODOS, { notas: NOTA_TRASLADABLE }),
  fija(25, 12, 'Navidad', 'Feriado inamovible', TODOS),
  fija(31, 12, 'Fin de Año', 'Efeméride social', TODOS),

  // Solo Complejo Los Cedros
  fija(12, 8, 'Cumpleaños de Meli', 'Cumpleaños', [CEDROS]),
  fija(25, 9, 'Aniversario del Complejo', 'Institucional', [CEDROS], { anioOrigen: 2000 }),
  fija(9, 11, 'Cumpleaños de Elvira', 'Cumpleaños', [CEDROS]),
  fija(10, 12, 'Cumpleaños de Mariana', 'Cumpleaños', [CEDROS]),

  // Solo KM Centro de Entrenamiento
  fija(6, 4, 'Día de la Actividad Física', 'Del rubro', [KM]),
  fija(13, 4, 'Día del Kinesiólogo', 'Del rubro', [KM]),
  fija(11, 8, 'Día del Nutricionista', 'Del rubro', [KM]),
  fija(4, 9, 'Día del Secretario', 'Otra', [KM]),
  fija(8, 10, 'Día del Profesor de Educación Física', 'Del rubro', [KM]),
  fija(24, 10, 'Día del Diseñador Gráfico', 'Otra', [KM]),

  // Solo Paracol
  fija(7, 3, 'Día Internacional del Campo', 'Del rubro', [PARACOL]),
  fija(2, 9, 'Día de la Industria Argentina', 'Del rubro', [PARACOL]),
  fija(5, 9, 'Aniversario de la fundación de Camilo Aldao', 'Institucional', [PARACOL]),
  fija(7, 9, 'Día del Trabajador Metalúrgico', 'Del rubro', [PARACOL]),
];

export function datosIniciales() {
  return {
    version: 1,
    categorias: [...CATEGORIAS_INICIALES],
    clientes: CLIENTES_INICIALES.map((c) => ({ ...c })),
    efemerides: LISTA.map((x) => ({ ...x.ef })),
    asignaciones: LISTA.flatMap((x) => x.clientes.map((clienteId) => ({ efId: x.ef.id, clienteId, nota: '' }))),
  };
}

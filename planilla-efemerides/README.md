# Planilla de efemérides

Planilla interactiva para planificar el contenido de redes de cada cliente: muestra qué
efemérides comparte cada cliente con otros (**Comunes**) y cuáles son solo suyas (**Particulares**).

## Cómo correrla

```bash
cd planilla-efemerides
npm install
npm run dev
```

Abrí la dirección que aparece en la consola (por defecto http://localhost:5173).

- `npm test`: pruebas de fechas, clasificación, duplicados y CSV.
- `npm run build`: genera la versión estática en `dist/` (se puede subir a Vercel, Netlify, etc.).

## Vistas

- **Tabla**: orden por cualquier columna, búsqueda y edición en línea (clic sobre fecha, nombre o
  categoría). Si filtrás por un solo cliente, se separa en "Comparte con otros clientes" y "Solo de…".
- **Matriz**: efemérides × clientes, con checkbox para asignar con un clic, "todos" por fila y totales.
- **Calendario**: los 12 meses del año elegido.
- **Próximas**: lo que viene en los próximos 30 días, con las notas por cliente.
- **Clientes y categorías**: altas, bajas, edición, color y activo/inactivo.

Los filtros (cliente, meses, tipo, categoría y texto) aplican a todas las vistas y se recuerdan.
El selector de año arriba recalcula las fechas móviles.

## Tipos de fecha

| Tipo | Ejemplo | Cómo se calcula |
|---|---|---|
| Fija | Navidad, 25/12 | Igual todos los años |
| Regla | Día del Padre | 3er domingo de junio, calculado cada año |
| Relativa a Pascua | Carnaval (−48), Viernes Santo (−2) | Se calcula a partir de la Pascua de cada año |
| Cambia cada año | — | Se carga la fecha de cada año; si falta, queda "Fecha pendiente" |

Los feriados trasladables se muestran en su fecha conmemorativa y llevan una nota: el día no
laborable puede moverse por decreto, así que conviene revisar el calendario oficial.

## Datos

Se guardan en el navegador (localStorage), así que cada computadora y cada navegador tienen su copia.
Desde el menú **Datos**:

- **Exportar / Importar backup (JSON)**: copia completa, para resguardo o para pasarla a otra persona.
- **Exportar vista a CSV**: lo que estás viendo con los filtros actuales; se abre en Excel o Sheets.
- **Importar efemérides desde CSV**: columnas `Nombre`, `Fecha` (DD/MM) y opcionales `Categoría`,
  `Clientes` y `Notas`. Muestra una vista previa y omite las filas con errores o duplicadas.
- **Restaurar datos iniciales**.

Todo cambio se puede deshacer con el botón **Deshacer** o con Ctrl/Cmd+Z.

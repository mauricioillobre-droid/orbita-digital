# Órbita Digital — Contexto de Proyectos

## QUIÉN SOY
Mauricio Illobre — fundador de Órbita Digital, agencia web.
GitHub: mauricioillobre-droid
Ubicación proyectos: C:\Users\mauri\

## ESTRUCTURA DE CARPETAS
C:\Users\mauri\
├── mi-website\              ← proyectos web (skill UI/UX Pro Max activa)
│   ├── .claude\             ← skill UI/UX Pro Max
│   ├── CONTEXTO.md          ← este archivo
│   ├── orbita-digital\      ← sitio de Órbita
│   └── 25demayo-web\        ← 25 de Mayo Consultorios Médicos
└── n8n-agent-builder\       ← automatizaciones n8n
    ├── .claude\             ← skills de automatización
    ├── n8n-skills\          ← skill experta en n8n
    ├── .mcp.json
    └── CLAUDE.md

## STACK GENERAL
- Next.js 14 App Router + TypeScript + Tailwind CSS v4 + Framer Motion
- Supabase (PostgreSQL + Auth)
- Vercel (deploy)
- n8n (automatizaciones) — hosteado en EasyPanel
- GitHub: mauricioillobre-droid

---

## PROYECTO ACTIVO: 25 DE MAYO CONSULTORIOS MÉDICOS

### Datos del cliente
- Centro médico en Los Polvorines, Malvinas Argentinas
- Dueño: amigo de Mauri (luz verde total para desarrollar)
- Contacto operativo: secretaria del centro
- Sistema actual: Control Salud (no reemplazar todavía)
- WhatsApp del centro: +5491122355689

### URLs
- Sitio público: https://25-de-mayo.vercel.app
- Panel admin: https://25-de-mayo.vercel.app/admin
- Login admin: recepcion@25demayo.com
- Repo GitHub: mauricioillobre-droid/25-de-mayo
- Carpeta local: C:\Users\mauri\mi-website\25demayo-web
- Supabase proyecto: https://xeqgyrwtximxjwnssmdx.supabase.co

### Base de datos Supabase
Tablas:
- especialidades (id, nombre, duracion_turno, activo)
- profesionales (id, nombre, duracion_turno, edad_minima,
  edad_maxima, notas, activo)
- profesional_especialidades (profesional_id, especialidad_id)
- disponibilidad_base (profesional_id, dia_semana, hora_inicio,
  hora_fin, frecuencia, semana_del_mes, activo)
- bloqueos (profesional_id, fecha_inicio, fecha_fin,
  hora_inicio, hora_fin, motivo)
- turnos (id, profesional_id, especialidad_id, paciente_nombre,
  paciente_telefono, fecha, hora_inicio, hora_fin, estado,
  origen, cobertura_medica, notas, whatsapp_enviado, created_at)
- logs_notificaciones (turno_id, telefono, canal, estado,
  error_detalle)

Frecuencias disponibles: semanal, quincenal_1, quincenal_2,
mensual_1, mensual_2, mensual_3, mensual_4

Estados de turno: confirmado, cancelado, ausente, completado

Origen de turno:
- 'web'       → paciente sacó turno desde el sitio público
- 'manual'    → secretaria lo cargó desde el panel admin
                (incluye turnos por llamada, presencial o WhatsApp
                 gestionados por la secretaria)
- 'whatsapp'  → RESERVADO para agente automático n8n (Fase 3)
- NULL        → registros viejos, tratar como 'manual'

Campo whatsapp_enviado (boolean en tabla turnos):
- false → aún no se envió confirmación
- true  → confirmación enviada correctamente por n8n

---

### Lo que está terminado ✅

FASE 1 — Sitio web institucional
- Home completa con todas las secciones
- /especialidades con dropdown interactivo y link directo
  a sacar turno
- /practicas con layout dos columnas
- /contacto
- Navbar transparente con efecto scroll
- Animaciones globales con Framer Motion
- Auditoría UI/UX completa aplicada
- 49 profesionales cargados con horarios reales

FASE 2 — Sistema de turnos
- /sacar-turno: wizard 5 pasos con calendario inteligente
  → guarda origen: 'web' al insertar
- Calendario muestra solo días con disponibilidad real
- Slots variables según duración del profesional
- Panel admin premium con sidebar azul brand (#1E3A5F)
- Dashboard con 6 stats cards
- Agenda del día con carga de turno manual
  → guarda origen: 'manual' al insertar
- /admin/turnos: pestaña con historial completo de turnos
  → tabla con todos los turnos (web + manual)
  → métricas superiores: total, confirmados, pendientes,
    cancelados, vía web, WhatsApp, manual
  → filtros en tiempo real: búsqueda, origen, estado,
    especialidad, rango de fechas
  → badges de origen con color e ícono por canal
  → badges de estado con color semántico
  → datos recalculados dinámicamente con filtros activos
- Configuración: profesionales, disponibilidad, bloqueos
- Campo cobertura médica en turnos
- Login con gradiente azul premium

AUTOMATIZACIÓN 1 — Confirmación de turno por WhatsApp ✅
- Workflow: "25 de Mayo — WhatsApp Turno Confirmado"
- ID workflow n8n: MvY9Vz4d5um9vJ3a
- Estado: activo y funcionando en producción
- Plataforma n8n: EasyPanel
  URL base: bot-siniestros-n8n.tpujxy.easypanel.host

Flujo completo:
  [TRIGGER] Webhook Supabase (POST /supabase-turno-confirmado)
    → [Edit Fields] Extrae campos del body.record
    → [IF] Teléfono y estado válidos
        Condiciones AND:
        - turno_estado == 'confirmado'
        - whatsapp_enviado == false
        - paciente_telefono != vacío
      ✅ SÍ →
        [SET] Normalizar teléfono
          Lógica: limpia espacios/guiones/paréntesis,
          normaliza a formato internacional 549XXXXXXXXXX
          (maneja prefijos 0, 54, 10 dígitos, 8 dígitos)
        → [HTTP Request] Evolution API — envía WhatsApp
        → [IF] Respuesta Evolution OK (verifica key.id != vacío)
            ✅ OK →
              [SUPABASE] Marcar turno enviado
                UPDATE turnos SET whatsapp_enviado = true
                WHERE id = turno_id
              → [DB] Log notificación — estado: 'enviado'
            ❌ ERROR →
              [GMAIL] Admin — Error Evolution
                Envía email a millobre.travel@gmail.com
              → [DB] Log notificación — estado: 'error'
      ❌ NO (sin teléfono) →
        [GMAIL] Admin — Sin teléfono
          Envía email a millobre.travel@gmail.com
        → [DB] Log notificación — estado: 'error',
          error_detalle: 'paciente_sin_telefono'

Campos usados del webhook (body.record):
  id, fecha, hora_inicio, hora_fin, estado, paciente_nombre,
  paciente_telefono, cobertura_medica, profesional_id,
  especialidad_id, whatsapp_enviado

Seguridad webhook:
  Authorization header: Bearer Xk9mQ3p7nR4wZ2jL8vT5yH
  Configurado en Supabase Database Webhooks → tabla turnos

Timezone workflow: America/Argentina/Buenos_Aires

---

### Lo que falta ⏳

INMEDIATO:
- Configurar Supabase Database Webhook apuntando al n8n
  en EasyPanel (si no está configurado aún)

FASE 3 (después):
- CRM de pacientes (tabla pacientes vinculada a turnos)
- Gráficos en dashboard admin (turnos por día, semana, mes)
- Recordatorios automáticos 24hs antes del turno (n8n)
- Agente conversacional WhatsApp para sacar turnos
  automáticamente → al insertar usar origen: 'whatsapp'
- Panel del profesional (ver sus propios turnos)

FASE 4 (largo plazo — hablar con el dueño):
- Reemplazar Control Salud
- Sistema de caja e ingresos/egresos
- Fichas digitales de pacientes
- App mobile

### Decisión estratégica importante
NO reemplazar Control Salud todavía. El sistema convive.
La secretaria carga en el panel admin los turnos que llegan
por llamada, presencial o WhatsApp gestionado manualmente.
Todos esos casos se registran con origen: 'manual'.
El campo origen: 'whatsapp' queda reservado para cuando
el agente automático de n8n inserte turnos sin intervención
humana (Fase 3).

---

## N8N EN EASYPANEL

### Estado
- Instancia activa: bot-siniestros-n8n.tpujxy.easypanel.host
- Workflow confirmación turno: activo ✅

### Workflows en producción
| Nombre | ID | Estado | Trigger |
|--------|----|--------|---------|
| 25 de Mayo — WhatsApp Turno Confirmado | MvY9Vz4d5um9vJ3a | ✅ Activo | Supabase webhook INSERT turnos |

### Archivo JSON del workflow
Guardado en: C:\Users\mauri\n8n-agent-builder\
Nombre: 25_de_Mayo___WhatsApp_Turno_Confirmado.json

---

## NOTAS PARA CLAUDE CODE
- Siempre abrir desde mi-website para que la skill
  UI/UX Pro Max esté activa en proyectos web
- Para automatizaciones abrir desde n8n-agent-builder
- El .env.local de 25demayo-web NUNCA commitear
- Variables de entorno están en Vercel también
- RLS deshabilitado en tabla turnos (usa admin client)
- Todas las escrituras del admin usan createSupabaseAdminClient
- El sitio público usa createSupabaseAnonClient para insertar
- origen NULL en registros viejos → siempre tratar como 'manual'
- Al final de cada tarea siempre ejecutar:
  git add . && git commit -m "descripción" && git push

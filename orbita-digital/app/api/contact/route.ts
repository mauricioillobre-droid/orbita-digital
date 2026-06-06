import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/contact
 * Recibe el formulario de contacto y lo reenvía al CRM de Órbita OS.
 * El secreto queda en el servidor — nunca expuesto al browser.
 */
export async function POST(req: NextRequest) {
  const WEBHOOK_URL    = process.env.ORBITA_OS_WEBHOOK_URL
  const WEBHOOK_SECRET = process.env.ORBITA_OS_WEBHOOK_SECRET

  if (!WEBHOOK_URL || !WEBHOOK_SECRET) {
    console.error('[contact] Env vars de webhook no configuradas')
    // Igual devolvemos ok al usuario — no es su problema
    return NextResponse.json({ ok: true })
  }

  let body: { name?: string; email?: string; message?: string; phone?: string; empresa?: string; servicio?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, message, phone, empresa, servicio } = body

  if (!name?.trim()) {
    return NextResponse.json({ error: 'El nombre es requerido' }, { status: 400 })
  }

  // Enviar al CRM en background (no bloqueamos la respuesta al usuario)
  const crmUrl = `${WEBHOOK_URL}?secret=${WEBHOOK_SECRET}`
  fetch(crmUrl, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ name, email, message, phone, empresa, servicio }),
  }).catch(err => console.error('[contact] Error enviando al CRM:', err))

  return NextResponse.json({ ok: true })
}

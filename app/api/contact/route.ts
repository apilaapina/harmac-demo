import { Resend } from 'resend'
import { getMachineBySlug } from '@/lib/machines'
import { ORG } from '@/lib/site'

/** Lead-capture endpoint. Receives a contact-form submission and emails it to Harmac. */

type LeadBody = {
  name?: string
  company?: string
  email?: string
  phone?: string
  machine?: string
  message?: string
  /** Honeypot — must stay empty. Bots fill it; real users never see it. */
  website?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  let body: LeadBody
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  // Honeypot: silently accept (so bots think they succeeded) but send nothing.
  if (body.website && body.website.trim() !== '') {
    return Response.json({ ok: true })
  }

  const name = (body.name ?? '').trim()
  const company = (body.company ?? '').trim()
  const email = (body.email ?? '').trim()
  const phone = (body.phone ?? '').trim()
  const message = (body.message ?? '').trim()

  // Server-side validation (never trust the client).
  if (!name || !company || !message || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: 'validation' }, { status: 422 })
  }

  const machine = body.machine ? getMachineBySlug(body.machine) : undefined
  const machineLabel = machine ? `${machine.name} (${machine.categoryLabel.fi})` : '—'

  const toEmail = process.env.LEAD_TO_EMAIL || ORG.email
  // Resend requires the From address to be on a verified domain. Until harmac.fi
  // is verified, their shared onboarding sender works for testing.
  const fromEmail = process.env.LEAD_FROM_EMAIL || 'Harmac Web <onboarding@resend.dev>'

  const subject = `Uusi tarjouspyyntö: ${name}${company ? ` / ${company}` : ''}`

  const lines = [
    ['Nimi', name],
    ['Yritys', company],
    ['Sähköposti', email],
    ['Puhelin', phone || '—'],
    ['Kone', machineLabel],
  ]

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;line-height:1.5">
      <h2 style="color:#00B8D4;margin:0 0 16px">Uusi yhteydenotto harmac.fi-sivustolta</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${lines
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 16px 6px 0;font-weight:bold;vertical-align:top">${k}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`,
          )
          .join('')}
      </table>
      <h3 style="margin:20px 0 6px;font-size:14px">Viesti</h3>
      <p style="white-space:pre-wrap;font-size:14px;margin:0">${escapeHtml(message)}</p>
    </div>`

  const text =
    `Uusi yhteydenotto harmac.fi-sivustolta\n\n` +
    lines.map(([k, v]) => `${k}: ${v}`).join('\n') +
    `\n\nViesti:\n${message}\n`

  // No API key configured.
  if (!process.env.RESEND_API_KEY) {
    if (process.env.NODE_ENV !== 'production') {
      // Dev convenience: log the lead so the form can be tested without a key.
      console.warn(
        `[contact] RESEND_API_KEY not set — lead logged instead of emailed (would send to ${toEmail}):\n` +
          text,
      )
      return Response.json({ ok: true, dev: true })
    }
    // Never silently swallow a real lead in production.
    console.error('[contact] RESEND_API_KEY missing in production — lead NOT sent.')
    return Response.json({ ok: false, error: 'not_configured' }, { status: 500 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email, // dad can reply directly to the prospect
      subject,
      html,
      text,
    })
    if (error) {
      console.error('[contact] Resend error:', error)
      return Response.json({ ok: false, error: 'send_failed' }, { status: 502 })
    }
    return Response.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return Response.json({ ok: false, error: 'send_failed' }, { status: 502 })
  }
}

import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendMail = async ({ to, subject, html, from, attachments }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return
  }

  await transporter.sendMail({
    from: from || process.env.EMAIL_USER,
    to,
    subject,
    html,
    attachments,
  })
}

const formatLabel = (value) => value.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase())

export const buildAdminEmailHtml = (type, payload) => {
  const rows = Object.entries(payload)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0f172a;">${formatLabel(key)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#334155;">${String(value)}</td>
      </tr>
    `)
    .join('')

  return `
    <div style="font-family:Arial, sans-serif; max-width:720px; margin:0 auto; padding:24px; background:#f8fafc; border-radius:20px;">
      <div style="background:#ffffff; border-radius:18px; padding:24px; border:1px solid #e2e8f0; box-shadow:0 10px 30px rgba(15,23,42,0.06);">
        <h2 style="margin:0 0 8px; color:#0D4C92; font-size:24px;">New ${type} submission</h2>
        <p style="margin:0 0 18px; color:#475569;">A new candidate profile has been received on EdTaLink.</p>
        <table style="width:100%; border-collapse:collapse; background:#fcfdff; border-radius:12px; overflow:hidden;">
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `
}

export const buildUserEmailHtml = (name, type) => `
  <div style="font-family:Arial, sans-serif; max-width:680px; margin:0 auto; padding:24px;">
    <div style="background:linear-gradient(135deg, #0D4C92 0%, #1E88E5 100%); border-radius:20px; padding:28px; color:#ffffff;">
      <h2 style="margin:0 0 8px; font-size:24px;">Thank you, ${name}</h2>
      <p style="margin:0 0 10px; font-size:15px; line-height:1.7; color:#e0f2fe;">Your ${type} submission has been received successfully. Our team will review the profile and get back to you shortly.</p>
      <p style="margin:0; font-size:14px; color:#dbeafe;">Best regards,<br/>EdTaLink Team</p>
    </div>
  </div>
`

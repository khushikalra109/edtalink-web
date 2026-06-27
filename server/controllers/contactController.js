import Contact from '../models/Contact.js'
import { sendMail, buildAdminEmailHtml, buildUserEmailHtml } from '../utils/emailService.js'

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' })
    }

    if (phone.length < 10) {
      return res.status(400).json({ success: false, message: 'Phone number should be at least 10 digits.' })
    }

    const contact = await Contact.create({ name, email, phone, message })

    const adminPayload = { name, email, phone, message }

    await Promise.all([
      sendMail({
        to: process.env.EMAIL_USER || email,
        subject: 'New Contact Form Submission - EdTaLink',
        html: buildAdminEmailHtml('contact message', adminPayload),
      }),
      sendMail({
        to: email,
        subject: 'Thanks for contacting EdTaLink',
        html: buildUserEmailHtml(name, 'contact message'),
      }),
    ])

    res.status(201).json({ success: true, message: 'Contact form submitted successfully.', data: contact })
  } catch (error) {
    next(error)
  }
}

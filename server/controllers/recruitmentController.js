import Recruitment from '../models/Recruitment.js'
import { sendMail, buildAdminEmailHtml, buildUserEmailHtml } from '../utils/emailService.js'

export const submitRecruitment = async (req, res, next) => {
  try {
    const { organization, contactPerson, designation, email, phone, details, positions, location } = req.body

    if (!organization || !contactPerson || !designation || !email || !phone || !details || !positions || !location) {
      return res.status(400).json({ success: false, message: 'All fields are required.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' })
    }

    if (phone.length < 10) {
      return res.status(400).json({ success: false, message: 'Phone number should be at least 10 digits.' })
    }

    const recruitment = await Recruitment.create({
      organization,
      contactPerson,
      designation,
      email,
      phone,
      details,
      positions: Number(positions),
      location,
    })

    const adminPayload = { organization, contactPerson, designation, email, phone, details, positions, location }

    await Promise.all([
      sendMail({
        to: process.env.EMAIL_USER || email,
        subject: 'New Recruitment Requirement - EdTaLink',
        html: buildAdminEmailHtml('recruitment requirement', adminPayload),
      }),
      sendMail({
        to: email,
        subject: 'Your recruitment requirement has been received - EdTaLink',
        html: buildUserEmailHtml(contactPerson, 'recruitment requirement'),
      }),
    ])

    res.status(201).json({ success: true, message: 'Recruitment requirement submitted successfully.', data: recruitment })
  } catch (error) {
    next(error)
  }
}

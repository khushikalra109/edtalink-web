import fs from 'fs'
import path from 'path'
import Internship from '../models/Internship.js'
import {
  sendMail,
  buildAdminEmailHtml,
  buildUserEmailHtml,
} from '../utils/emailService.js'

export const submitInternship = async (req, res, next) => {
  try {
    const { name, college, course, email, phone } = req.body

    // Validation
    if (!name || !college || !course || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      })
    }

    if (phone.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Phone number should be at least 10 digits.',
      })
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Resume file is required.',
      })
    }

    // Prepare attachment
    const attachmentPath = req.file.path

    console.log('==============================')
    console.log('Uploaded File:', req.file)
    console.log('Attachment Path:', attachmentPath)
    console.log('File Exists:', fs.existsSync(attachmentPath))
    console.log('==============================')

    const internship = await Internship.create({
      name,
      college,
      course,
      email,
      phone,
      resumeFile: req.file.filename,
      resumeOriginalName: req.file.originalname,
      resumePath: attachmentPath,
    })

    const adminPayload = {
      name,
      college,
      course,
      email,
      phone,
      resumeFile: req.file.originalname,
    }

    // Admin Email with PDF Attachment
    const adminMailInfo = await sendMail({
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: 'New Internship Application - EdTaLink',
      html: buildAdminEmailHtml(
        'internship application',
        adminPayload
      ),
      attachments: [
        {
          filename: req.file.originalname,
          path: attachmentPath,
          contentType: 'application/pdf',
        },
      ],
    })

    console.log('Admin Email Sent:', adminMailInfo.messageId)

    // User Confirmation Email
    const userMailInfo = await sendMail({
      to: email,
      subject: 'Your internship application has been received - EdTaLink',
      html: buildUserEmailHtml(name, 'internship application'),
    })

    console.log('User Email Sent:', userMailInfo.messageId)

    return res.status(201).json({
      success: true,
      message: 'Internship application submitted successfully.',
      data: internship,
    })
  } catch (error) {
    console.error('Internship Submission Error:', error)
    next(error)
  }
}
import fs from 'fs';
import path from 'path';
import Resume from '../models/Resume.js';
import {
  sendMail,
  buildAdminEmailHtml,
  buildUserEmailHtml,
} from '../utils/emailService.js';

export const submitResume = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      currentCity,
      preferredCity,
      industry,
      currentCompany,
      designation,
      domain,
      totalWorkExperience,
      educationIndustryExperience,
      companiesServed,
      currentCTC,
      expectedCTC,
      noticePeriod,
    } = req.body;

    const requiredFields = [
      name,
      email,
      phone,
      currentCity,
      preferredCity,
      industry,
      currentCompany,
      designation,
      domain,
      totalWorkExperience,
      educationIndustryExperience,
      companiesServed,
      currentCTC,
      expectedCTC,
      noticePeriod,
    ];

    if (requiredFields.some((value) => !value || String(value).trim() === '')) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    if (phone.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Phone number should be at least 10 digits.',
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Resume file is required.',
      });
    }

    const attachmentPath = req.file.path ? path.resolve(req.file.path) : path.resolve(process.cwd(), 'uploads', req.file.filename);
    const attachment = {
      filename: req.file.originalname || req.file.filename,
      path: attachmentPath,
    };

    const resume = await Resume.create({
      name,
      email,
      phone,
      currentCity,
      preferredCity,
      industry,
      currentCompany,
      designation,
      domain,
      totalWorkExperience,
      educationIndustryExperience,
      companiesServed,
      currentCTC,
      expectedCTC,
      noticePeriod,
      company: currentCompany,
      experience: totalWorkExperience,
      location: currentCity,
      resumeFile: req.file.filename,
      resumeOriginalName: req.file.originalname,
      resumePath: req.file.path,
    });

    const adminPayload = {
      name,
      email,
      phone,
      currentCity,
      preferredCity,
      industry,
      currentCompany,
      designation,
      domain,
      totalWorkExperience,
      educationIndustryExperience,
      companiesServed,
      currentCTC,
      expectedCTC,
      noticePeriod,
      resumeFile: req.file.originalname,
    };

    await Promise.all([
      sendMail({
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: 'New Candidate Registration - EdTaLink',
        html: buildAdminEmailHtml('candidate registration', adminPayload),
        attachments: [attachment],
      }),

      sendMail({
        to: email,
        subject: 'Your Candidate Profile Has Been Received - EdTaLink',
        html: buildUserEmailHtml(name, 'candidate registration'),
      }),
    ]);

    return res.status(201).json({
      success: true,
      message: 'Candidate profile submitted successfully.',
      data: resume,
    });
  } catch (error) {
    console.error('Resume Submission Error:', error);
    next(error);
  }
};
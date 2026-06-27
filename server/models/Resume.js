import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    currentCity: { type: String, trim: true },
    preferredCity: { type: String, trim: true },
    industry: { type: String, trim: true },
    currentCompany: { type: String, trim: true },
    designation: { type: String, trim: true },
    domain: { type: String, trim: true },
    totalWorkExperience: { type: String, trim: true },
    educationIndustryExperience: { type: String, trim: true },
    companiesServed: { type: String, trim: true },
    currentCTC: { type: String, trim: true },
    expectedCTC: { type: String, trim: true },
    noticePeriod: { type: String, trim: true },
    company: { type: String, trim: true },
    experience: { type: String, trim: true },
    location: { type: String, trim: true },
    resumeFile: { type: String, required: true },
    resumeOriginalName: { type: String },
    resumePath: { type: String },
    status: { type: String, default: 'new' },
  },
  { timestamps: true }
)

export default mongoose.model('Resume', resumeSchema)

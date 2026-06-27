import mongoose from 'mongoose'

const recruitmentSchema = new mongoose.Schema(
  {
    organization: { type: String, required: true, trim: true },
    contactPerson: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    details: { type: String, required: true, trim: true },
    positions: { type: Number, required: true },
    location: { type: String, required: true, trim: true },
    status: { type: String, default: 'new' },
  },
  { timestamps: true }
)

export default mongoose.model('Recruitment', recruitmentSchema)

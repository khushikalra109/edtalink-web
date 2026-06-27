import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import connectDB from './config/db.js'
import resumeRoutes from './routes/resumeRoutes.js'
import recruitmentRoutes from './routes/recruitmentRoutes.js'
import internshipRoutes from './routes/internshipRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '.env') })
connectDB()

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'EdTaLink API is running' })
})

app.use('/api/resume', resumeRoutes)
app.use('/api/recruitment', recruitmentRoutes)
app.use('/api/internship', internshipRoutes)
app.use('/api/contact', contactRoutes)

app.use(errorMiddleware)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

import express from 'express'
import { submitInternship } from '../controllers/internshipController.js'
import { uploadSingle } from '../middleware/uploadMiddleware.js'

const router = express.Router()

router.post('/', uploadSingle, submitInternship)

export default router

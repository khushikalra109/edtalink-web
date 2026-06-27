import express from 'express'
import { submitResume } from '../controllers/resumeController.js'
import { uploadSingle } from '../middleware/uploadMiddleware.js'

const router = express.Router()

router.post('/', uploadSingle, submitResume)

export default router

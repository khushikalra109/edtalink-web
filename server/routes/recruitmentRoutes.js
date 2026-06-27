import express from 'express'
import { submitRecruitment } from '../controllers/recruitmentController.js'

const router = express.Router()

router.post('/', submitRecruitment)

export default router

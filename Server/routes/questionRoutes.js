import express from 'express'
const router = express.Router()
import {
  getQuestions,
  setQuestion,
  getMyQuestions,
} from '../controllers/questionController.js'

router.route('/').get(getQuestions)
router.route('/').post(setQuestion)
router.route('/my/:id').get(getMyQuestions)

export default router

import express from 'express'
const router = express.Router()
import {
  getAnswers,
  setAnswer,
  getMyAnswers,
} from '../controllers/answerController.js'

router.route('/:id').get(getAnswers)
router.route('/').post(setAnswer)
router.route('/my/:id').get(getMyAnswers)

export default router

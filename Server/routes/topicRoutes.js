import express from 'express'
const router = express.Router()
import {
  getTopics,
  setTopic,
} from '../controllers/topicController.js'

router.route('/').get(getTopics)
router.route('/').post(setTopic)

export default router

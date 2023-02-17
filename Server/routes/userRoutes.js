import express from 'express'
const router = express.Router()
import {
  registerUser,
  loginUser,
  getMe,
} from '../controllers/userController.js'

import { protectRoute } from '../middleware/authMiddleware.js'

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protectRoute, getMe)

export default router
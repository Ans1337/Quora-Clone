import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import { FindByEmail, Create } from '../services/queryUser.js'
import { generateToken } from '../services/generateToken.js'
import {
  EMPTY_FIELD,
  ALREADY_EXIST,
  INVALID_DATA,
  INVALID_CREDENTIALS
} from '../constants/errors.js'

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, avatar } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error(EMPTY_FIELD)
  }

  const userExists = await FindByEmail(email);

  if (userExists) {
    res.status(400)
    throw new Error(ALREADY_EXIST)
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await Create(name, email, hashedPassword, avatar);

  if (user) {
    console.log("Server Response");
    console.log(res.data);
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      avatar: user.avatar,
    })
  } else {
    res.status(400)
    throw new Error(INVALID_DATA)
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await FindByEmail(email);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      avatar: user.avatar,
    })
  } else {
    res.status(400)
    throw new Error(INVALID_CREDENTIALS)
  }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

export {
  registerUser,
  loginUser,
  getMe,
}

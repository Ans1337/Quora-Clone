import asyncHandler from 'express-async-handler'
import Question from '../model/questionModel.js'
import { EMPTY_FIELD } from '../constants/errors.js'

// @desc    Get questions
// @route   GET /api/questions
// @access  Public
const getQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find()
  res.status(200).json(questions)
})

// @desc    Get questions
// @route   GET /api/question/my/:id
// @access  Public
const getMyQuestions = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const question = await Question.find({ email: id })
  res.status(200).json(question)
})

// @desc    Set question
// @route   POST /api/questions
// @access  Private
const setQuestion = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error(EMPTY_FIELD)
  }

  const question = await Question.create({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text,
    avatar: req.body.avatar,
  })

  res.status(200).json(question)
})

export {
  getQuestions,
  setQuestion,
  getMyQuestions,
}

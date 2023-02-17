import asyncHandler from 'express-async-handler'
import Answer from '../model/answerModel.js'
import { EMPTY_FIELD } from '../constants/errors.js'

// @desc    Get answers
// @route   GET /api/answers
// @access  Public
const getAnswers = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const answers = await Answer.find({ questionId: id })
  res.status(200).json(answers)
})

// @desc    Get answers
// @route   GET /api/answers/my/:id
// @access  Public
const getMyAnswers = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const answer = await Answer.find({ email: id })
  res.status(200).json(answer)
})

// @desc    Set answer
// @route   POST /api/answers
// @access  Private
const setAnswer = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error(EMPTY_FIELD)
  }

  const answer = await Answer.create({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text,
    questionId: req.body.questionId,
    avatar: req.body.avatar,
  })

  res.status(200).json(answer)
})

export {
  getAnswers,
  setAnswer,
  getMyAnswers
}

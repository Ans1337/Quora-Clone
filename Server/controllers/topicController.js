import asyncHandler from 'express-async-handler'
import Topic from '../model/topicModel.js'
import { EMPTY_FIELD } from '../constants/errors.js'

// @desc    Get topics
// @route   GET /api/topics
// @access  Public
const getTopics = asyncHandler(async (req, res) => {
  const topic = await Topic.find()
  res.status(200).json(topic)
})

// @desc    Set topic
// @route   POST /api/topics
// @access  Private
const setTopic = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error(EMPTY_FIELD)
  }

  const topic = await Topic.create({
    text: req.body.text,
  })

  res.status(200).json(topic)
})

export {
  getTopics,
  setTopic,
}

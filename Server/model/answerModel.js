import mongoose from 'mongoose'
import { PROMT_NAME, PROMT_EMAIL, EMPTY_FIELD, DEFAULT_AVATAR } from '../constants/errors.js'

const answerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, PROMT_NAME],
    },
    email: {
      type: String,
      required: [true, PROMT_EMAIL],
    },
    text: {
      type: String,
      required: [true, EMPTY_FIELD],
    },
    questionId: {
      type: String,
      required: [true, EMPTY_FIELD],
    },
    avatar: {
      type: String,
      default: DEFAULT_AVATAR,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Answer', answerSchema)

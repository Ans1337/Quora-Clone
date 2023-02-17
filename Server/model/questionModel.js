import mongoose from 'mongoose'
import { PROMT_EMAIL, PROMT_NAME, EMPTY_FIELD, DEFAULT_AVATAR } from '../constants/errors.js'

const questionSchema = mongoose.Schema(
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
    avatar: {
      type: String,
      default: DEFAULT_AVATAR,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Question', questionSchema)

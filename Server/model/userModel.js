import mongoose from 'mongoose'
import { PROMT_NAME, PROMT_EMAIL, PROMT_PASSOWRD, DEFAULT_AVATAR } from '../constants/errors.js'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, PROMT_NAME],
    },
    email: {
      type: String,
      required: [true, PROMT_EMAIL],
      unique: true,
    },
    password: {
      type: String,
      required: [true, PROMT_PASSOWRD],
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

export default mongoose.model('User', userSchema)

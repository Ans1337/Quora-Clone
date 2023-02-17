import mongoose from 'mongoose'
import { EMPTY_FIELD } from '../constants/errors.js'

const topicSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, EMPTY_FIELD],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Topic', topicSchema)

import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import connectDB from './config/db.js'
import { errorHandler } from './middleware/errorMiddleware.js'
import questionRoutes from './routes/questionRoutes.js'
import userRoutes from './routes/userRoutes.js'
import answerRoutes from './routes/answerRoutes.js'
import topicRoutes from './routes/topicRoutes.js'

env.config()
const port = process.env.PORT || 5000;
const corsURL = process.env.CORS_URL;

connectDB()

const app = express()

app.use(cors({
  origin: corsURL,
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/topics', topicRoutes);

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))

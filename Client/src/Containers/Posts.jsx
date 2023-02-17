import { useEffect, useState } from 'react'
import { postQuestion, getQuestions } from '../api/questions'
import { useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import AddPost from '../Components/AddPost'
import Post from '../Components/Post'
import '../css/post.css'

/*
  @Post Function
  Handles logic for @AddPosts and @Posts. 
*/
const Posts = () => {
  const [questions, setQuestions] = useState(undefined)

  useEffect(() => {
    handleQuestions()
  }, [])

  const { user } = useSelector((state) => state.auth)

  const handlePost = async (values) => {
    try {
      const newObj = Object.assign({ text: values.text }, user);
      const response = await postQuestion(newObj)
      const newQuestion = [...questions, response]
      setQuestions(newQuestion)
    } catch (error) {
      toast.error("Error: " + error.message)
    }
  }

  const handleQuestions = async () => {
    try {
      const apiQuestions = await getQuestions();
      setQuestions(apiQuestions);
    }
    catch (error) {
      toast.error("Error: " + error.message)
    }
  }

  return (
    <>
      <div className='feed'>
        <Formik initialValues={{ text: '', }} onSubmit={handlePost}>
          <Form>
            <AddPost avatar={user.avatar} />
          </Form>
        </Formik>
        <Post questions={questions} />
      </div>
    </>
  )
}

export default Posts

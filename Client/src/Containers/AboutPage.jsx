import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { getMyAnswers } from '../api/answer'
import { getMyQuestions } from '../api/questions'
import { toast } from 'react-toastify'
import Header from '../Components/Header'
import MyAnswers from '../Components/About/MyAnswers'
import MyQuestions from '../Components/About/MyQuestions'
import MyUser from '../Components/About/MyUser'
import '../css/main.css'

/*
  @AboutPage Function
  Handles Logic for @MyAnswers @MyQuestions @MyUser.
*/
const AboutPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const [answers, setAnswers] = useState(undefined);
  const [questions, setQuestions] = useState(undefined);

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    dispatch(reset());
    fetchAnswer();
    fetchQuestion();
    // eslint-disable-next-line
  }, [user, navigate, dispatch])

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  const handleAboutPage = () => {
    navigate('/about')
  }

  const handleHomePage = () => {
    navigate('/')
  }

  const fetchAnswer = async () => {
    try {
      const apiAnswer = await getMyAnswers(user.email);
      setAnswers(apiAnswer);
    }
    catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  }

  const fetchQuestion = async () => {
    try {
      const apiQuestion = await getMyQuestions(user.email);
      setQuestions(apiQuestion);
    }
    catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  }

  return (
    <>
      {user &&
        <div className='quora'>
          <Header handleLogout={handleLogout} avatar={user.avatar} handleAboutPage={handleAboutPage} handleHomePage={handleHomePage} />
          {user && <MyUser user={user} />}
          {answers && <MyAnswers answers={answers} />}
          {questions && <MyQuestions questions={questions} />}
        </div>
      }
    </>
  )
}

export default AboutPage

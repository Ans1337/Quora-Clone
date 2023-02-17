import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Posts from './Posts'
import Sidebar from './Sidebar'
import Header from '../Components/Header'
import '../css/main.css'

/*
  @Home Function
  Handles User Authentication.
*/
const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    dispatch(reset())
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

  return (
    <>
      {user &&
        <div className='quora'>
          <Header handleLogout={handleLogout} avatar={user.avatar} handleAboutPage={handleAboutPage} handleHomePage={handleHomePage} />
          <div className='contents'>
            <div className='content'>
              <Sidebar />
              <Posts />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Home

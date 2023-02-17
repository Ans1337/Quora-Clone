import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import Login from '../Components/Login';
import Loading from '../Components/Loading';

/*
  @LoginContainer Function
  Authenticates User @Login.
*/
const LoginContainer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])


  const handleLogin = async (values) => {
    dispatch(login(values))
  }

  const togglePage = () => {
    navigate('/register')
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Formik initialValues={{ email: '', password: '', }} onSubmit={handleLogin}>
        <Form>
          <Login togglePage={togglePage} />
        </Form>
      </Formik>
    </>
  )
}

export default LoginContainer

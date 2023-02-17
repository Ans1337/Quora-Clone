import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { Form, Formik } from 'formik';
import SignUp from '../Components/SignUp';
import Loading from '../Components/Loading'

/*
  @SignUpContainer Function
  Authenticates User @SignUp.
*/
const SignUpContainer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [file, setFile] = useState(undefined)

  const API_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_BASE_URL_CLOUD_NAME}/image/upload`;

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

  const handleSignup = async (values) => {
    const imgURL = await handleFile();
    const newObj = Object.assign({ avatar: imgURL }, values);
    console.log(newObj);
    dispatch(register(newObj));
  }

  const handleFile = async () => {
    try {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'quoraclone');
      data.append('cloud_name', process.env.REACT_APP_API_BASE_URL_CLOUD_NAME);

      const res = await fetch(API_URL, {
        method: 'POST',
        body: data,
      });

      const fileData = await res.json();
      return fileData.url;
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <Loading />
  }

  const togglePage = () => {
    navigate('/login')
  }

  return (
    <>
      <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSignup}>
        <Form>
          <SignUp togglePage={togglePage} setImage={setFile} />
        </Form>
      </Formik>
    </>
  )
}

export default SignUpContainer

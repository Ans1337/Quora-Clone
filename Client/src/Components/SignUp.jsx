import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Field } from 'formik';
import '../css/login.css'

/*
  @SignUp Function
  Renders a SignUp Form using Formik.
*/
const SignUp = ({ togglePage, setImage }) => {

  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <div className='login-form-box'>
            <div className='login-form-box-inside'>
              <h1>Sign Up</h1>
              <input
                type="file"
                accept='image'
                onChange={(e) => setImage(e.target.files[0])}
              />
              <Form.Group className="mb-3 signup-form form-column" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
              </Form.Group>
              <Form.Group className="mb-3 signup-form form-column" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Field id="password" name="password" placeholder="example@gmail.com" type="password" />
              </Form.Group>
              <Form.Group className="mb-3 signup-form form-column" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Field id="name" name="name" placeholder="Ali1000" type="text" />
              </Form.Group>
              <div className='form-column'>
                <Button variant="primary" type="submit">Submit</Button>
                <br />
                <Button variant="light" onClick={togglePage} >Sign in</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp

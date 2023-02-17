import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Field } from 'formik';
import '../css/login.css'

/*
  @Login Function
  Renders a Login Form using Formik.
*/
const Login = ({ togglePage }) => {

  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <div className='login-form-box'>
            <div className='login-form-box-inside'>
              <h1>Login</h1>
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
              <div className='form-column'>
                <Button variant="primary" type="submit">Submit</Button>
                <br />
                <Button variant="light" onClick={togglePage} >Sign up</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

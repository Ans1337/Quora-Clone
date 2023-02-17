import { Avatar } from '@material-ui/core'
import { Field } from 'formik'
import { Button, Form } from 'react-bootstrap'
import '../css/addPost.css'
import '../css/login.css'

/*
  @AddAnswer Function
  Renders a "Add Answer" component to append posts.
*/
const AddAnswer = ({ avatar }) => {

  return (
    <>
      <div className='post'>
        <div className='info'>
          <Avatar src={avatar} />
        </div>
        <div className='question'>
          Give your Answer
        </div>
        <Form.Group className="mb-3 signup-form form-column" controlId="formBasicEmail" >
          <Field id="text" name="text" placeholder="Answer" type="text" />
        </Form.Group>
        <div className='form-column'>
          <Button variant="primary" type="submit">Answer</Button>
        </div>
      </div>
    </>
  )
}

export default AddAnswer

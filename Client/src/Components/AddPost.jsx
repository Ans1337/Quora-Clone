import { Avatar } from '@material-ui/core'
import { Field } from 'formik'
import { Button, Form } from 'react-bootstrap'
import '../css/addPost.css'
import '../css/login.css'

/*
  @AddPost Function
  Renders a "Add Post" component to append posts.
*/
const AddPost = ({ avatar }) => {

  return (
    <>
      <div className='post'>
        <div className='info'>
          <Avatar src={avatar} />
        </div>
        <div className='question'>
          Ask your Question
        </div>
        <Form.Group className="mb-3 signup-form form-column" controlId="formBasicEmail" >
          <Field id="text" name="text" placeholder="My First Questions" type="text" />
        </Form.Group>
        <div className='form-column'>
          <Button variant="primary" type="submit">Post</Button>
        </div>
      </div>
    </>
  )
}

export default AddPost

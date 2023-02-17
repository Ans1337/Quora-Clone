import { Field } from 'formik'
import { Button, Form } from 'react-bootstrap'
import '../css/login.css'

/*
  @AddSideTopics Function
  Renders a "Add Topics" component to append topics.
*/
const AddSidebarTopics = () => {

  return (
    <>
      <div className='form-column'>
        <Form.Group className="mb-3 signup-form form-column" controlId="formBasicEmail" >
          <Field id="text" name="text" placeholder="Topic Example" type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">Add Topic</Button>
      </div>
    </>
  )
}

export default AddSidebarTopics

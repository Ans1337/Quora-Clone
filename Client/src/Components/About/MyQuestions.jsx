import { Badge, ListGroup } from 'react-bootstrap'

/*
  @MyQuestions Function
  Renders Questions for current User
*/
const MyQuestions = ({ questions }) => {
  return (
    <>
      <Badge>User Questions</Badge>
      {
        questions && questions.map((question) => (
          <ListGroup key={question._id}>
            <ListGroup.Item>{question.text}</ListGroup.Item>
          </ListGroup>
        ))
      }
    </>
  )
}

export default MyQuestions

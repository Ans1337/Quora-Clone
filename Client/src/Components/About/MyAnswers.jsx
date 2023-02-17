import { Badge, ListGroup } from 'react-bootstrap'

/*
  @MyAnswers Function
  Renders Answers for current User
*/
const MyAnswers = ({ answers }) => {
  return (
    <>
      <Badge>User Answers</Badge>
      {
        answers
          ?
          answers.map((answer) => (
            <ListGroup key={answer._id}>
              <ListGroup.Item>{answer.text}</ListGroup.Item>
            </ListGroup>
          ))
          :
          null
      }
    </>
  )
}

export default MyAnswers

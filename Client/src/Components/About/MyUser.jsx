import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

/* 
  @MyUser Function
  Renders User Details for current User 
*/
const MyUser = ({ user }) => {

  return (
    <>
      <Badge>User Details</Badge>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default MyUser

import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons'

/*
  @Answer Function
  Renders All the answers passed as prop by @AnswerContainer.
*/
const Answer = ({ answers }) => {
  return (
    <>
      {answers
        ?
        answers.map((answer) => (
          <div className="post" key={answer._id}>
            <div className="info">
              <Avatar src={answer.avatar} />
              <h4>{answer.name}</h4>
            </div>
            <div className="body">
              <div className="answer">
                <p>{answer.text}</p>
              </div>
            </div>
            <div className="footer">
              <div className="footer-action">
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined />
              </div>
            </div>
          </div>
        )
        )
        :
        null
      }

    </>
  )
}

export default Answer

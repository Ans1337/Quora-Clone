import React from 'react'
import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons'
import AnswerContainer from '../Containers/AnswerContainer'
import '../css/post.css'

/*
  @Post Function
  Renders All the questions passed as prop by @Posts.
*/
const Post = ({ questions }) => {

  return (
    <>
      {questions && questions.map((question) => (
        <div className="post" key={question._id}>
          <div className="info">
            <Avatar src={question.avatar} />
            <h4>{question.name}</h4>
            <small>
              {question?.timeStamp}
            </small>
          </div>
          <div className="body">
            <div className="question">
              <p>{question.text}</p>
              <button className="btn-answer">Answer</button>
            </div>
          </div>
          <div className="footer">
            <div className="footer-action">
              <ArrowUpwardOutlined />
              <ArrowDownwardOutlined />
            </div>
          </div>
          <div>
            <p className='answer-length'>
              <AnswerContainer id={question._id} />
            </p>
          </div>
        </div>
      )
      )}
    </>
  )
}

export default Post

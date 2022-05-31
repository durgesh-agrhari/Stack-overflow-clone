import React from 'react'
//import QuestionsDetails from './QuestionsDetails'
import {Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avater'

const DisplayAnswer = ({question}) => {
  return (
    <div>
      {
          question.answer.map((ans) => (
              <div className='display-ans' key={ans._id}>
                  <p>{ans.answerBody}</p>
                  <div className='question-action-user '>
                    <div>
                      <button type='button'>Share</button>
                      <button type='button'>Delete</button>
                    </div>
                    <div>
                      <p>answered {ans.answeredOn}</p>
                      <Link to={`User/${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                        <div className='avatar2'>
                          <Avatar > {ans.userAnswered.charAt(0).toUpperCase()} </Avatar>
                        </div>
                        <div>
                         { question.userPosted}
                        </div>
                      </Link>
                    </div>
                  </div>
              </div>
          ))
      }
    </div>
  )
}

export default DisplayAnswer

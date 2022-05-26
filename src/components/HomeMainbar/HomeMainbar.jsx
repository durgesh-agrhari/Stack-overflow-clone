import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'
import './HomeMainbar.css'

const HomeMainbar = () => {

  var questionsList = [{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questinTitle: "What is the function?",
    questinBody: "It ment to be",
    questinTags: ['C','DBMS', ' Beast CSS ', 'Best HTML'],
    userPosted:"mono",
    askedOn:"jan 1"
  }, {
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questinTitle: "What is the function?",
    questinBody: "It ment to be",
    questinTags: ['C','DBMS', ' Beast CSS ', 'Best HTML'],
    userPosted:"mono",
    askedOn:"jan 1"
  }, {
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questinTitle: "What is the function?",
    questinBody: "It ment to be",
    questinTags: ['C','DBMS', ' Beast CSS ', 'Best Html'],
    userPosted:"mono",
    askedOn:"jan 1"
  }
  ]

  const location = useLocation()

  const user = 1;
  const navigate = useNavigate()

  // const redirect = () => {
  //   alert("Login or Signup to ask questions")
  //   navigate.push('/Auth')
  // }

  const checkAuth = () => {
    if(user === null){
      alert("Login or Signup to ask questions")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className="ask-btn" > Ask Question</button>
      </div>

      <div>
        {
           questionsList === null ?
          <h1>Loading.....</h1> :
          <>
            <p>{questionsList.length}Questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar
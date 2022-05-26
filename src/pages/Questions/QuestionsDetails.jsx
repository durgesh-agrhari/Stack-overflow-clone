import React from 'react'
//import Questions from '../../components/HomeMainbar/Questions'
import { useParams, Link } from 'react-router-dom'
import up from '../../assets/up.png'
import down from '../../assets/down.jpg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avater'
import DisplayAnswer from './DisplayAnswer'

const QuestionsDetails = () => {

    const {id} = useParams()
    console.log(id)
    // const question = 1

    var questionsList = [{
        _id: '1',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questinTitle: "What is the function?",
        questinBody: "It ment to be",
        questinTags: ['C','DBMS', ' Beast CSS ', 'Best HTML'],
        userPosted:"mono",
        userId: 1,
        askedOn:"jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: "Kumar",
            answeredOn:"jan 2",
            userId: 2
        }]
      }, {
        _id: '2',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questinTitle: "What is the function?",
        questinBody: "It ment to be",
        questinTags: ['C','DBMS', ' Beast CSS ', 'Best HTML'],
        userPosted:"mono",
        userId: 1,
        askedOn:"jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: "Kumar",
            answeredOn:"jan 2",
            userId: 2
        }]
      }, {
        _id: '3',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questinTitle: "What is the function?",
        questinBody: "It ment to be",
        questinTags: ['C','DBMS', ' Beast CSS ', 'Best HTML'],
        userPosted:"mono",
        userId: 1,
        askedOn:"jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: "Kumar",
            answeredOn:"jan 2",
            userId: 2
        }]
      }
      ]


  return (
    <div className='question-details-page'>
        {
            questionsList === null ?
            <h1>Loading......</h1>:
            <>
               {
                   questionsList.filter(question => question._id === id).map(question => (
                       <div key={question._id}>
                           <section className='question-details-container'>
                               <h1>{question.questinTitle}</h1>
                               <div className='question-details-container-2'>
                                   <div className='question-votes'>
                                       <img src={down} alt="" width='20' className='votes-icon'/>
                                       <p>{question.upVotes - question.downVotes}</p>
                                       <img src={up} alt="" width='18' className='votes-icon' />
                                   </div>
                                   <div style={{width: '100%'}}>
                                       <p className='question-body'>{question.questinBody}</p>
                                       <div className='question-details-tags'>
                                           {
                                               question.questinTags.map((tag) => (
                                                   <p key={tag}>{tag}</p>
                                               ))
                                           }
                                       </div>
                                       
                                       <div className='question-action-user'>
                                           <div>
                                               <button type='button'>Share</button>
                                               <button type='button'>Delete</button>
                                           </div>
                                           <div>
                                               <p>asked {question.askedOn   }</p>
                                               <Link to={`User/${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                                                   <div className='avatar'>
                                                   <Avatar >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                   </div>
                                                   <div>
                                                       { question.userPosted}
                                                   </div>
                                               </Link>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </section>
                           {
                               question.noOfAnswers !== 0 && (
                                   <section>
                                       <h3>{question.noOfAnswers} answers</h3>
                                       <DisplayAnswer key={question._id} question={question}/>
                                   </section>
                               )
                           }
                           <section className='post-ans-container'>
                               <h3>Your answer</h3>
                               <form>
                                   <textarea name="" id="" cols="100" rows="10"></textarea><br/>
                                   <input type="submit" value='Post your answer' className='post-ans-btn' />
                               </form>
                               <p>
                                   Browse your tagged
                                   {
                                       question.questinTags.map((tag) =>(
                                           <Link to='/Tags' key={tag} className='ans-tag'> {tag} </Link>
                                       )) 
                                   } or{
                                    <Link to='/AskQuestion' style={{textDecoration: 'none', color: '#009dff'}}> ask your own question.</Link>
                                   }
                               </p>
                           </section>
                       </div>
                   ))
               }
            </>
        }
    </div>
  )
}

export default QuestionsDetails
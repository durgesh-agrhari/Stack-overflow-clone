import React from 'react'
import './AskQuestion.css'
import { useNavigate } from 'react-router-dom'

const AskQuestion = () => {
  
  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Ask a public question</h1>
        <form>
          <div className='ask-form-container'>
            <label className='ask-ques-title'>
              <h4>Title</h4>
              <p>Be specific and your imagine you're asking a question another persion</p>
              <input type='text' name='questionTitle' id='ask-ques-title' placeholder='e.g Is there an R function for finding the index of an element in a vector' />
            </label>

            <label className='ask-ques-body'>
              <h4>Body</h4>
              <p>Include the all information someone would need to answer your question</p>
              <textarea name="questionTitle" id="ask-ques-title" cols="30" rows="10"></textarea>
            </label>

            <label className='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to discrive yours guestion is about</p>
              <input type='text' name='questionTitle' id='ask-ques-title' placeholder='e.g (XML typescript wordpress )' />
            </label>
          </div>
          <div className='reivew-btn'>
          <input type="button" value='Reivew Your question'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion
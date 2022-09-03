import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth'

import { signUp, login } from '../../actions/auth'
import {useDispatch} from 'react-redux'
// import {useHistory} from 'react-router-dom'
//we can use usenavigate palce of useHistory .....
import {useNavigate} from 'react-router-dom'

const Auth = () => {
 //[isgingup] ka use kam jab sign uo se register vale page mejana ho to use krate hai. 
  const [isSignup, setIsSignup] = useState(false)

  //------####----backend code----####--------//
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  //------####----backend code----####--------//
  const handelSubmit = (e) => {
    e.preventDefault()
    if(!email && !password)
    {
      alert("Enter Email and Password to continue");
    }
    if(isSignup)
    {
      if(!name)
      {
        alert("Enter name to continue");
      }
      dispatch(signUp({name, email, password}, navigate));
    }
    else
    {
      dispatch(login({email, password}, navigate));
    }
    // console.log({name, email, password})


  }


  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className='auth-contaner-2'>
        {!isSignup && <img src={icon} alt='Stack overflow' className='login-logo' />}
        <form onSubmit={handelSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                {/* //------####----backend code----####--------// 
                onChange={(e) => {setName(e.target.value)}}  use to connect (e) means event*/}
                <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}}/>
              </label>
            )
          }

          <label htmlFor='email'>
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
          </label>
          <label htmlFor='password'>
            <div className='pass'>
              <h4>Password</h4>

              {/* agar isSignup true hai to <forget paass > nahi chalega  */}
              {!isSignup && <p style={{color:"blue", fontSize:"14px"}}>Forget Password</p> }
            </div>
            <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
            {isSignup && <p style={{ color:"#666767", fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur<br/> adipisicing elit. Iusto voluptatem voluptates<br/> reiciendis illo non cum architecto.</p>}
          </label>

          {
            isSignup && (
              <label htmlFor='check' className='checkbox'>
                <input type="checkbox"/> 
                {/* <p style={{fontSize:'13px'}}>Lorem ipsum dolor sit, amet consectetur<br/> adipisicing elit. Iusto voluptatem voluptates<br/> reiciendis illo non cum architecto.</p> */}
              </label>
            )
          }

          <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up': 'Login'}</button>
          {
            isSignup && (
              <p style={{ color:"#666767", fontSize:'13px'}}>Lorem<span style={{color:"blue"}}> Stack </span> ipsum dolor sit, amet consectetur<br/> adipisicing elit.<span style={{color:"blue"}}> Stack </span> Iusto voluptatem voluptates<br/> "reiciendis" illo non cum architecto.</p>
            )
          }

        </form>
        <p>
          {isSignup ? 'alreadyhave an account? ': 'Dont have account'}
          <button type='button' className='handle-switch-bin' onClick={handleSwitch}>{isSignup ? 'Log in ': 'Sign up'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth
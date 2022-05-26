import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth'

const Auth = () => {
 //[isgingup] ka use kam jab sign uo se register vale page mejana ho to use krate hai. 
  const [isSignup, setIsSignup] = useState(false)

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }


  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className='auth-contaner-2'>
        {!isSignup && <img src={icon} alt='Stack overflow' className='login-logo' />}
        <form>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" name="name" id="name" />
              </label>
            )
          }

          <label htmlFor='email'>
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor='password'>
            <div className='pass'>
              <h4>Password</h4>

              {/* agar isSignup true hai to <forget paass > nahi chalega  */}
              {!isSignup && <p style={{color:"blue", fontSize:"14px"}}>Forget Password</p> }
            </div>
            <input type="password" name="password" id="password" />
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
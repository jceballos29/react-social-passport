import React from 'react'

import google from '../images/google.png'
import facebook from '../images/facebook.png'
import github from '../images/github.png'

const Login = () => {
  return (
    <div className='login'>
      <h1>Choose a Login Method</h1> 
      <div className='wrapper'>
        <div className="left">
          <div className="login__button google">
            <img src={google} alt="" className="login__icon " />
            <span>Google</span>
          </div>
          <div className="login__button facebook">
            <img src={facebook} alt="" className="login__icon " />
            <span>Facebook</span>
          </div>
          <div className="login__button github">
            <img src={github} alt="" className="login__icon " />
            <span>Github</span>
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button type='submit'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
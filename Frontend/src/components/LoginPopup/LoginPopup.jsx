import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({ setLogin }) => {
  const [currState, setCurrentState] = useState("Login");
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {
            currState === "Login" ? <></> :
              <input type="text" name="" id="" placeholder='Your name' required />
          }
          <input type="email" name="" id="" placeholder='Your Email' required />
          <input type="password" name="" id="" placeholder='Your Password' required />
          <button>{currState === 'Sign up' ? "Create Account" : "Log in"}</button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" name="" required id="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, facilis!</p>
        </div>{
          currState === 'Login' ?
            <p>Create a new Account? <span onClick={()=> setCurrentState('Sign up')}>Click here</span> </p> :
            <p>Alaready Have an account? <span onClick={()=> setCurrentState('Login')}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup

import React from 'react'
import './LoginScreen.css'
import logo from '../images/logo.png'
import Nav from '../Nav'

function LoginScreen() {
  return (
    <div className='loginScreen'>
        {/* <Nav/> */}
        <div className='loginScreen_background'>
        <img 
        className='loginScreen_logo'
        src={logo} alt="loginBackground"/>
        <button className='loginScreen_button'>Sign In</button>
        </div>
    </div>
  )
}

export default LoginScreen
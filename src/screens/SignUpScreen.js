import React from 'react'
import './SignUpScreen.css'

function SignUpScreen() {

  const register = (e)=>{
    e.preventDefault();
  }
  const signIn = (e)=>{
    e.preventDefault();
  }


  return (
    <div className='signupScreen'>
     <form>
      <h1>Sign Up</h1>
      <input placeholder='Email' type='email'/>
      <input placeholder='password' type='password'/>
      <button onClick={signIn} type='submit'>Sign In</button>
      <h4>
      <span className='signupScreen_gray'>New to Myflix? </span>
        <span onClick={register} className='signupScreen_link'> Sign Up now.</span>

      </h4>
     </form>
    </div>
  )
}

export default SignUpScreen
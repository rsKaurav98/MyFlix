import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from './images/logo.png'

const Nav = () => {
   
    const [show , handleshow] = useState(false);

    const transitionNavBar = ()=>{
        if(window.scrollY > 100 ){
            handleshow(true);
        }else{
            handleshow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar);
        return()=> window.removeEventListener('scroll',transitionNavBar)
    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
       <div className='nav_contents'>
       <img
        className='nav_logo'
         src={logo} alt='myflix-logo'/>
        <img
        className='nav_avatar'
         src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
       </div>
       
    </div>
  )
}

export default Nav
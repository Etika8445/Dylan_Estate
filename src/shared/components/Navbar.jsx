import React, { useState } from 'react'
import image from '../assets/mainlogo.png'
import trans from '../assets/translate.png'
import login from '../assets/login.png'
const Navbar = () => {
  const[navshow, setnav] =useState('visib-navbar');
  const[mainbar,setbar] = useState('show-navbar');
  const show=()=>{
    if(navshow !== 'visib-navbar'){
      setnav('visib-navbar');
      setbar('show-navbar')
    }
    else{
      setbar('visib-navbar');
      setnav('show-navbar');
    }
  }
  return (
    <div>
      <div className={mainbar}>
        <div className='layout-navbar'>
            <div className='img-navbar'>
                <img style={{backgroundColor:"#FCF8F4"}} src={image} alt="logo"></img>
            </div>
            <div className='content-navbar'>
                <p>PROPERTIES</p>
                <p>MY DASHBOARD/ACTIVITY</p>
                <p style={{textDecoration:"underline"}}>LIST YOUR PROPERTY</p>
                <p>CONTACT US </p>
                <p>MORE</p>
                <p style={{fontSize:"29px", fontWeight:"1px" ,paddingTop:"20px"}}>|</p>
                <img src={trans} alt='translate'/>
                <img src={login} alt='about'/>
            </div>
            <div className='value-navbar'>
              <div onClick={show}>&#9776;</div>
            </div>
        </div>
      </div>
        <div className={navshow}>
        <div className='open-navbar' >
              <p className='close-navbar' onClick={show}>&times;</p>
              <div className='openlist-navbar'>
                <p>PROPERTIES</p>
                <p>MY DASHBOARD/ACTIVITY</p>
                <p style={{textDecoration:"underline"}}>LIST YOUR PROPERTY</p>
                <p>CONTACT US </p>
                <p>MORE</p>
                <img src={trans} alt='translate'></img>
                <img src={login} alt='about'></img>
              </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import HoverNav from '../HoverNavbar/hoverNav.js';
import data from './data';


import logo from '../../assets/img/logo.svg'

const Navbar = () => {
  const [bars,setBars] = useState(false);
  const navRef = useRef();
  const handleBars = (e) => {
    setBars(!bars);
  }
  window.addEventListener('resize', ()=> {
    if(window.innerWidth > 1024) {
      setBars(true);
    }
    if(window.innerWidth <= 1024) {
      setBars(false);

    }

  })

    const hangleUlClick = (e) => {
      if(e.target.tagName === 'A'){
        e.target.parentElement.parentElement.className = 'active'
        if(e.target.parentElement.className === 'active') {
          e.target.parentElement.className = ''
        }else{
          e.target.parentElement.className = 'active'
        }
      }
      if(e.target.tagName === 'SPAN' && e.target.className === 'spanNav') {
        e.target.parentElement.parentElement.className = ''
        e.target.parentElement.className = ''
      }
    }
  return (
    <nav className='navbar flex-center'>
        <div className='logo'>
            <img src={logo} alt='logo' />
        </div>

        {bars && <ul className='d-flex' onClick={(e)=> {hangleUlClick(e)}}>
            {data[0].map((item,index)=> {
              return (
                <li key={index}>
                  <span className='spanNav'>{item}<i className="fa-solid fa-chevron-right"></i></span>
                  {(index!==6) && <HoverNav data={data[index+1]}/>}
                  <a href='#' className='flex-center'><span>{item}</span><i className="fa-solid fa-chevron-right"></i></a>
                </li> 
              )
            })}
            
        </ul>}

        <div className='login d-flex'>
          <a href='#' className='d-flex'><span>Đăng nhập</span> <i className="fa-solid fa-right-to-bracket"></i></a>
          <div onClick={(e)=> {handleBars(e)}} className='icon_log'><i className="fa-solid fa-bars"></i></div>
        </div>
    </nav>
  )
}

export default Navbar

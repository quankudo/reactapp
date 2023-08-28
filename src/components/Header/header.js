import React, { useRef } from 'react'
import { useState } from 'react'
import './header.css'

const Header = () => {
  const [individual, setIndividual] = useState(false);
  const [language, setLanguage] = useState(false);
  const span1Ref = useRef();
  const span2Ref = useRef();

  const handleClick = (index) => {
    if(index === 2){
      setLanguage(!language);
      if (language) {
        span2Ref.current.className = ' ';
      }
      else {
        span2Ref.current.className = 'hover';
      }
    }
    else {
      setIndividual(!individual);
      if (individual) {
        span1Ref.current.className = ' ';
      }
      else {
        span1Ref.current.className = 'hover';
      }
    }
  };
  return (
    <nav className='header_nav1 flex-center'>
      <div className='header_nav1-left d-flex'>
        <a href='#header'>
            <span onClick={()=> {handleClick(1)}} ref={span1Ref} className=''>Cá Nhân <i className="fa-solid fa-chevron-down"></i></span>
            {individual && <ul className='list_infomation'>
              <li><a href='#header' style={{color:'red'}}>Cá nhân</a></li>
              <li><a href='#header'>Doanh nghiệp</a></li>
              <li><a href='#header'>Nhà đầu tư</a></li>
              <li><a href='#header'>Về chúng tôi</a></li>
              <li><a href='#header'>Tuyển dụng</a></li>
            </ul>}
        </a>
        <ul className='d-flex'>
            <li><a href='#header' className='light-color'>Khám phá:</a></li>
            <li><a href='#header'>Inspire</a></li>
            <li><a href='#header'>Priority</a></li>
            <li><a href='#header'>Private</a></li>
        </ul>
      </div>
      <div className='header_nav1-right d-flex' >
        <ul className='d-flex'>
            <li><a href='#header'>Công cụ & Tiện ích</a></li>
            <li><a href='#header'>Hỗ trợ</a></li>
            <li><a href='#header'>Liên hệ</a></li>
        </ul>
        <a href='#header'>
          <span onClick={()=> {handleClick(2)}} ref={span2Ref} className=''><i className='fa-solid fa-earth-americas'></i> Tiếng Việt <i className='fa-solid fa-chevron-down'></i></span>
          {language && <ul>
            <li><a href='#header' style={{color:'red'}}>Tiếng Việt</a></li>
            <li><a href='#header'>English</a></li>
        </ul>}
        </a>
      </div>
    </nav>
  )
}

export default Header

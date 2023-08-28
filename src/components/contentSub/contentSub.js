import React from 'react'
import './contentSub.css'
import anh6 from '../../assets/img/anh6.png'
const ContentSub = ({img, text}) => {
  return (
    <div className='contentSub'>
        <div className='contentSub_img'>
            <img src={img} />
        </div>
        <p>{text}</p>

    </div>
  )
}

export default ContentSub

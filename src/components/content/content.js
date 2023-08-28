import React from 'react'
import './content.css'
import ContentSub from '../contentSub/contentSub'
import data from './data'

const Content = () => {
  return (
    <section className='content'>
        <h3>Vì sao chọn tài khoản TechComBank?</h3>
        <div className='contentList '>
            {
                data.map((item, index)=> {
                    return (
                        <ContentSub img={item.img} text={item.text}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Content

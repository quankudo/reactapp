import React from 'react'
import'./endow.css'

import data from './data'

const Endow = () => {
  console.log(data[0].listText)
  return (
    <section className='endow'>
        <h3>Tận hưởng ưu đãi khi mở tài khoản ngân hàng</h3>
        <div className='endowList'>
        {
          data.map((item)=> {
            return (
              <div className='endow_box'>
                <div className='img-box'>
                  <img src={item.img} alt='ảnh bị lỗi' />
                </div>
                <div className='endowContent'>
                  <h4>{item.title}</h4>
                  <ul>
                    {item.listText.map((text)=> {
                      return (
                        <li>{text}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })
        }
        </div>
    </section>
  )
}

export default Endow
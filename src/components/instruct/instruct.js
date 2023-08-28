import React from 'react'
import './instruct.css'
import data from './data.js'
import anh21 from '../../assets/img/anh21.png'
const Instruct = () => {
  return (
    <section className='instruct'>
        <div className='instruct_container'>
            <h3>3 bước mở tài khoản ngân hàng chỉ sau 1 phút</h3>
            <div className='list_instruct'>
                {
                    data.map((item, index)=> {
                        return (
                            <div className='box'>
                                <span>{index + 1}</span>
                                <div className='img'>
                                    <img src={item.img} alt='ảnh lỗi' />
                                </div>
                                <div className='content'>
                                    <h4>{item.heading}</h4>
                                    {
                                        index === 2 
                                        ? (<ul>
                                        {item.text.map((te)=>{
                                            return (
                                                <li>{te}</li>
                                            )
                                        })}
                                        </ul>)
                                        : <p>{item.text}</p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='link_QR'>
                <a className='d-flex'>
                    <span>Mở tài khoản ngay</span>
                    <img src={anh21} />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Instruct

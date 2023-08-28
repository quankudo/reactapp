import React from 'react'
import './utilities.css'
import data from './data.js'

const Utilities = () => {

    const handleMove = (e) => {
        if(e.target.classList.contains('fa-chevron-left')){
            if(e.target.parentElement.classList.contains('active')) {
                e.target.parentElement.classList.remove('active')
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
            }
            
        }
        if(e.target.classList.contains('fa-chevron-right')){
            if(e.target.parentElement.classList.contains('active')) {
                
            }
            else {
                e.target.parentElement.classList.add('active')
                e.target.style.display = 'none'
                e.target.previousSibling.style.display = 'block';

            }
        }
    }
  return (
    <section className='utilities'>
        <div className='d-flex'><h3>Trải nghiệm tiện ích với Techcombank Mobile</h3><span></span><a>Mở tài khoản ngay<i class="fa-solid fa-arrow-right"></i></a></div>
        <div className='utilities_container'>
            <div className='utilitiesList'>
            {
                data.map((item,index)=> {
                    return (
                        <div className='box'>
                            <div className='img'>
                                <img src={item.img} />
                            </div>
                            <div className='content'>
                                <span>{index + 1}</span>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <i class="fa-solid fa-chevron-left icon" onClick={(e)=> {handleMove(e)}}></i>
            <i class="fa-solid fa-chevron-right icon" onClick={(e)=> {handleMove(e)}}></i>
        </div>
    </section>
  )
}

export default Utilities

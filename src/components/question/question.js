import React from 'react'
import './question.css'
import anh25 from '../../assets/img/anh25.png'
import data from './data.js'

const Question = () => {
    const handleClick = (e) => {
        if(e.target.parentElement.nextSibling.classList.contains('active')) {
            e.target.parentElement.nextSibling.classList.remove('active');
            e.target.parentElement.style.borderBottom = '0.01rem solid rgb(161, 158, 158)'
            e.target.nextSibling.style.transform = 'rotate(' + 0 + 'deg)';
        }
        else{
            e.target.parentElement.nextSibling.classList.add('active');
            e.target.parentElement.style.border = '0.01rem solid transparent';
            e.target.nextSibling.style.transform = 'rotate(' + 180 + 'deg)';

        }
    }

  return (
    <section className='question flex-center'>
        <div className='question_left'>
            <h3>Các câu hỏi thường gặp</h3>
            <img src={anh25} />
        </div>
        <div className='question_right'>
            <div className='list'>
            {
                data.map((item, index)=> {
                    return (
                        <div className='box'>
                            <div className='contents flex-center'>
                                <p onClick={(e)=>{handleClick(e)}}>{item.title}</p>
                                <i class="fa-solid fa-chevron-down" ></i>
                            </div>
                            <p className='text'>{item.text}</p>
                    </div>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default Question

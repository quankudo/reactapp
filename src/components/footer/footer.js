import React, { useState } from 'react'
import './footer.css'
import data from './data.js'
import anh27 from '../../assets/img/anh27.png'
const Footer = () => {
    const [text, setText] = useState(false)
    const handleClick = (e) => {
        if(e.target.nextSibling.className ==='fa-solid fa-chevron-up active') {
            e.target.nextSibling.className='fa-solid fa-chevron-up'
        }
        else {
            e.target.nextSibling.className='fa-solid fa-chevron-up active'
        }
        setText(!text)
    }
  return (
    <section className='footer'>
        <div className='top'>
            <div className='heading flex-center'>
                <div className='img'>
                    <img src={anh27} />
                </div>
                <div className='link d-flex'>
                    <span onClick={(e)=>{handleClick(e)}}>Liên kết khác</span>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
            </div>
            {<div className='list flex-center'>
                {
                    text && data.map((item,index)=> {
                        return (
                            <div className='box'>
                                <h3>{item.title}</h3>
                                <div className='contents'>
                                    {
                                        item.list.map((link,index)=> {
                                            return (
                                                <a>{link}</a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>}
            <div className='icons'>
                <p>Kết nối với TechComBank nhiều hơn tại đây</p>
                <div className='list_icons d-flex'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
        </div>
        <div className='bottom d-flex'>
            <p>Bản quyền © 2023 thuộc về Ngân hàng Thương mại cổ phần Kỹ thương Việt Nam</p>
            <a>Điều khoản & điều kiện</a>
            <a>Quyền riêng tư dữ liệu</a>
            <p>☎ KH Cá nhân: 1800 588 822 (trong nước) - 84 24 3944 6699 (nước ngoài)</p>
            <p>☎ KH Doanh nghiệp: 1800 6556 (trong nước) - 84 24 7303 6556 (nước ngoài)</p>
        </div>
    </section>
  )
}

export default Footer

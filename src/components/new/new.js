import React from 'react'
import './new.css'
import anh29 from '../../assets/img/anh29.png'
import { Link } from "react-router-dom";

const New = () => {
  return (
    <>
      <section className='new'>
          <div className='new-content d-flex'>
              <Link to="/">Trang chủ</Link>
              <span><i class="fa-solid fa-chevron-right"></i></span>
              <span>Cá nhân</span>
          </div>
          <p>Chào mừng bạn đến với website Techcombank <br />dành cho khách hàng cá nhân</p>
      </section>
      <section className='new-2'>
        <div className='contents d-flex'> 
          <img src={anh29} />
          <div className='Content'>
            <h3>Bắt đầu hành trình trải nghiệm của bạn tại Techcombank</h3>
            <p>Mở tài khoản dễ dàng trong 1 phút trên ứng dụng Techcombank Mobile để tận hưởng những tính năng mới nhất và an toàn hơn khi giao dịch ngân hàng.</p>

          </div>
        </div>

      </section>
    </>
  )
}

export default New

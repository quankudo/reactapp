import React from 'react'
import './home.css'
import anh2 from '../../assets/img/anh2.png'

const Home = () => {
  return (
    <section className='home'>
        <div className='homeNav d-flex'>
            <p><a>Trang chủ</a><i class="fa-solid fa-chevron-right"></i></p>
            <p><a>Cá nhân</a><i class="fa-solid fa-chevron-right"></i></p>
            <p><a>Chi tiêu</a><i class="fa-solid fa-chevron-right"></i></p>
            <p><a>Tài Khoản</a><i class="fa-solid fa-chevron-right"></i></p>
            <p>Mở tài khoản ngân hàng TechComBank</p>
        </div>
        <div className='homeBanner'>
            <h3 className='homeTitle'>Mở tài khoản ngân hàng</h3>
            <p>
                Mở tài khoản ngân hàng và thẻ thanh toán <br />
                Chỉ 1 phút đăng ký online
            </p>
            <a><span>Mở tài khoản ngay</span><i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </section>
  )
}

export default Home

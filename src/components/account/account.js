import React from 'react'
import './account.css'
import anh21 from '../../assets/img/anh21.png'

const Account = () => {
  return (
    <section className='account'>
        <div className='top'>
            <h3>Mở tài khoản ngân hàng Online</h3>
            <div className='QR_link d-flex'>
                <span>Quét mã tải app & mở tài khoản ngay</span>
                <img src={anh21} />
            </div>
            <p>Để thuận tiện cho khách hàng, Techcombank cung cấp danh sách Chi nhánh và ATM theo tỉnh thành</p>
            <a>Tìm kiếm ngay <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='bottom'>
            <p className='title'>Bạn còn thắc mắc? Hãy để chuyên viên tư vấn của chúng tôi hỗ trợ bạn</p>
            <a className='flex-center'>Liên hệ ngay <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </section>
  )
}

export default Account

import React from 'react'
import './niceNumber.css'
import anh17 from '../../assets/img/anh17.jpg'
const NiceNumber = () => {
  return (
    <section className='niceNumber'>
        <img src={anh17} />
        <div className='nn_content'>
            <h3>Miễn phí tài khoản số đẹp</h3>
            <p>Chọn số tài khoản đẹp, thiết kế thẻ cá tính chỉ sau 1 phút online, trải nghiệm ngay tiện ích thanh toán hiện đại cùng nhiều ưu đãi hấp dẫn từ các thương hiệu lớn</p>
            <p><a>Xem thêm</a><i class="fa-solid fa-arrow-right"></i></p>
        </div>
    </section>
  )
}

export default NiceNumber

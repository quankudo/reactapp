import React from 'react'
import './infomation.css'

const Infomation = () => {
  return (
    <section className='infomation'>
        <h3>Thông tin cần biết khi mở tài khoản ngân hàng</h3>
        <div className='list flex-center'>
            <div className='box'>
                <span>1</span>
                <p className='title'>Biểu phí tài khoản và thẻ</p>
                <p>Biểu phí tài khoản<i class="fa-solid fa-download"></i></p>
                <p>Biểu phí thẻ<i class="fa-solid fa-download"></i></p>
            </div>
            <div className='box'>
                <span>2</span>
                <p className='title'>Điều khoản và điều kiện<i class="fa-solid fa-download"></i></p>
            </div>
            <div className='box'>
                <span>3</span>
                <p className='title'>Biểu mẫu mở tài khoản ngân hàng<i class="fa-solid fa-download"></i></p>
            </div>
            <div className='box'>
                <span>4</span>
                <p className='title'>So sánh các gói tài khoản<i class="fa-solid fa-download"></i></p>
            </div>
        </div>
    </section>
  )
}

export default Infomation

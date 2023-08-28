import React from 'react'
import './banners.css'

const Banners = () => {
  return (
    <section className='banners flex-center'>
        <div className='left_b'>
            <a>
                <p className='title'>Chọn tài khoản đẹp, Trọn đời miễn phí, Giá trị X3</p>
                <ul>
                    <li>Nhận ngay vouchers WinMart 100k</li>
                    <li>Quà tặng đặc quyền tới 110 triệu</li>
                    <li>Giảm thêm 3% chi tiêu siêu thị</li>
                </ul>
                <p className='link d-flex'><span>Tìm hiểu thêm</span><i class="fa-solid fa-arrow-right"></i></p>
            </a>
        </div>
        <div className='right_b'>
            <a>
                <p className='title'>Tự động thanh toán hóa đơn</p>
                <ul>
                    <li>Bật thanh toán hóa đơn</li>
                    <li>Bật năng lượng cuộc sống</li>
                </ul> 
                <p className='link d-flex'><span>Tìm hiểu thêm</span><i class="fa-solid fa-arrow-right"></i></p>
            </a>
        </div>
    </section>
  )
}

export default Banners

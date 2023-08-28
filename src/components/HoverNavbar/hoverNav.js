import React from 'react'
import './hoverNav.css'

const HoverNav = (data) => {
  return (
    <div className='hoverNav d-flex'>
        <div className='content'>
            <ul>
                {
                    data.data.content.map((item,index) =>
                        <li key={`content${index}`}><a><span>{item}</span><i className="fa-solid fa-arrow-right"></i></a></li>
                    )
                }
            </ul>
        </div>
        <div className='nav_info'>
            <div className='list_icon-text d-flex'>
                {
                    data.data.listIcon.map((item,index)=> {
                        return (
                            <div className='item_icon-text' key={`list_icon${index}`}>
                                {item}
                                <p>{data.data.listP[index]}</p>
                            </div> 
                        )
                    })
                }
            </div>
            <div className='endow flex-center'>
                <a className='d-flex'><i className="fa-solid fa-gift"></i><span>Chương trình ưu đãi</span></a>
                <div className='icon_endow'><i className="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    </div>
  )
}

export default HoverNav

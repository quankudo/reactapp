import React from 'react'
import Header from '../components/Header/header'
import Navbar from '../components/navbar/navbar'
import New from '../components/new/new'

const UserPage = () => {
  return (
    <div className='UserPage'>
        <Header />
        <Navbar />
        <New new_2 ={true}/>
    </div>
  )
}

export default UserPage

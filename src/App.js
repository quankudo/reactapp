import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './layout/HomePage'
import Spending from './layout/spending';
import UserPage from './layout/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/spen" element={<Spending />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

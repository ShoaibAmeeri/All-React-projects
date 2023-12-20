import React from 'react'
import Home from './Home'
import Menu from './menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './products/ProductDetails'

export default function HomePage() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/menu' element={<Menu/>} />
    <Route path='/product/:id' element={<ProductDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'

//pages
import Home from '../../pages/Home'
import About from '../../pages/About'
import Bookings from '../../pages/Bookings'
import Contact from '../../pages/Contact'
import Reviews from '../../pages/Reviews'
import Store from '../../pages/Store'
import Vouchers from '../../pages/Vouchers'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/vouchers' element={<Vouchers/>}/>
    </Routes>
  )
}

export default Links

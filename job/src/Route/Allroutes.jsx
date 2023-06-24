import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Componant/Home'
import AboutUs from '../Componant/AboutUs'
import ContactUs from '../Componant/ContactUs'
import Guide from '../Componant/Guide'
import Information from '../Componant/Information'

function Allroutes() {
  return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path='/guide' element={<Guide/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/information' element={<Information/>} />
    </Routes>
  )
}

export default Allroutes
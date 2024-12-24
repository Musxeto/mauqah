import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Homepage from '../pages/Homepage'
import Contact from '../pages/Contact'
import WazirabadFieldStudy from '../pages/WazirabadFieldStudy'
import VisitToJajja from '../pages/VisitToJajja'
import GenderEmpowermentSociety from '../pages/GenderEmpowermentSociety'
import Resources from '../pages/Resources'
const AllRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/wazirabad-field-study" element={<WazirabadFieldStudy />} />
        <Route path="/visit-to-jajja" element={<VisitToJajja />} />
        <Route path="/gender-empowerment-society" element={<GenderEmpowermentSociety />} />
        <Route path='resources' element={<Resources />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
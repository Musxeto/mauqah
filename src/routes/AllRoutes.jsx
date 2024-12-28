import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import WazirabadFieldStudy from '../pages/WazirabadFieldStudy';
import VisitToJajja from '../pages/VisitToJajja'; 
import GenderEmpowermentSociety from '../pages/GenderEmpowermentSociety';
import Resources from '../pages/Resources';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Projects from '../pages/Projects';
import ScrollToTop from './ScrollToTop';
const AllRoutes = () => {
  return(
    <BrowserRouter>
    <Navbar />
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/wazirabad-field-study" element={<WazirabadFieldStudy />} />
        <Route path="/visit-to-jajja" element={<VisitToJajja />} />
        <Route path="/gender-empowerment-society" element={<GenderEmpowermentSociety />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AllRoutes
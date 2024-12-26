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
// const AboutUs = React.lazy(() => import('../pages/AboutUs'));
// const Contact = React.lazy(() => import('../pages/Contact'));
// const WazirabadFieldStudy = React.lazy(() => import('../pages/WazirabadFieldStudy'));
// const VisitToJajja = React.lazy(() => import('../pages/VisitToJajja'));
// const GenderEmpowermentSociety = React.lazy(() => import('../pages/GenderEmpowermentSociety'));
// const Resources = React.lazy(() => import('../pages/Resources'));
// const NotFound = React.lazy(() => import('../pages/NotFound'));
import Navbar from '../components/Navbar'
import Projects from '../pages/Projects';
const AllRoutes = () => {
  return(
    <BrowserRouter>
    <Navbar />
    {/* <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundColor: '#f8f9fa',
            }}
          >
            <Loading type="spin" color="#A566F7" height={50} width={50} />
          </div>
        }
      ></Suspense> */}
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
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default AllRoutes
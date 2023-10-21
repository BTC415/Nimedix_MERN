import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from '../pages/app/Home'
import Services from '../pages/app/Services'
import OurToken from '../pages/app/OurToken'
import About from '../pages/app/About'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import Choose from '../pages/auth/Signup/Choose'
import Register from '../pages/auth/Signup/Register'
import ComingSoon from '../pages/ComingSoon'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ComingSoon />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="our-token" element={<OurToken />} />
          <Route path="about" element={<About />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup/" element={<Signup />}>
            {/* <Route path="choose" element={<Choose />} /> */}
            <Route path="" element={<Choose />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

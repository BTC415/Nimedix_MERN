import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavButton from '../components/NavButton'
import AppButton from '../components/AppButton'
import NiMEDixLogo from '../assets/images/logo/logo_single_line_nimedix.png'
import AppStoreIconDark from '../assets/images/app_download/app_store_dark.png'
import GooglePlayIconDark from '../assets/images/app_download/google_play_dark.png'

const AppFooterNavbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPath, setCurrentPath] = useState()

  useEffect(() => {
    setCurrentPath(location.pathname.slice(1))
  }, [location])

  return (
    <div id="app-footer-navbar" className="w-full bg-primary h-1/2 pt-10 pb-16">
      <div className="container mx-auto  grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="block">
          <img src={NiMEDixLogo} alt="nimedix-logo" className="h-12 my-4" />
          <p className="lg:w-1/2 w-full text-white my-6 sm:text-xl text-sm">
            No. 32 S. A Agada Avenue, (Police Housing Scheme) Dawaki, Kubwa.
            Abuja FCT, Nigeria
          </p>
          <div className="flex flex-row">
            <AppButton
              variant="primary"
              icon={AppStoreIconDark}
              bgColor="success-light"
              labelColor="amber-500"
              label="App Store"
            />
            <AppButton
              variant="secondary"
              icon={GooglePlayIconDark}
              bgColor="white"
              labelColor="dark"
              label="Google Play"
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="block">
            <h1 className="md:text-2xl sm:text-xl text-base text-white mb-2">
              Pages
            </h1>
            <NavButton
              label="Home"
              active={currentPath === 'home' || currentPath === ''}
              onClick={() => {
                navigate('/home')
              }}
            />
            <NavButton
              label="Services"
              active={currentPath === 'services'}
              onClick={() => {
                navigate('/services')
              }}
            />
            <NavButton
              label="About Us"
              active={currentPath === 'about'}
              onClick={() => {
                navigate('/about')
              }}
            />
            <NavButton
              label="Contact"
              active={currentPath === 'contact'}
              onClick={() => {
                navigate('/contact')
              }}
            />
            <NavButton
              label="Team"
              active={currentPath === 'team'}
              onClick={() => {
                navigate('/team')
              }}
            />
          </div>
          <div>
            <h1 className="md:text-2xl sm:text-xl text-base text-white mb-2">
              Support
            </h1>
            <NavButton
              label="FAQs"
              active={currentPath === 'faq'}
              onClick={() => {
                navigate('/faq')
              }}
            />
            <NavButton
              label="Articles"
              active={currentPath === 'articles'}
              onClick={() => {
                navigate('/articles')
              }}
            />
            <NavButton
              label="Support"
              active={currentPath === 'support'}
              onClick={() => {
                navigate('/support')
              }}
            />
            <NavButton
              label="Blog"
              active={currentPath === 'blog'}
              onClick={() => {
                navigate('/blog')
              }}
            />
          </div>
          <div>
            <h1 className="md:text-2xl sm:text-xl text-base text-white mb-2">
              Legal
            </h1>
            <NavButton
              label="Privacy Policy"
              active={currentPath === 'privacy'}
              onClick={() => {
                navigate('/privacy')
              }}
            />
            <NavButton
              label="Terms & Conditions"
              active={currentPath === 'term'}
              onClick={() => {
                navigate('/term')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppFooterNavbar

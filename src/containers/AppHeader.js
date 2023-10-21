import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HeaderNavButton from '../components/HeaderNavButton'
import SearchBar from '../components/SearchBar'
import Logo from '../assets/images/logo/logo_single_line_nimedix.png'
import SearchIcon from '../assets/images/form/search_light.png'
import CloseIcon from '../assets/images/form/close-circle.png'

const AppHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [onSearch, setOnSearch] = useState(false)
  const [currentPath, setCurrentPath] = useState()
  const [searchKeyword, setSearchKeyword] = useState('')

  const toggle = () => {
    setOnSearch((prev) => {
      return !prev
    })
  }

  useEffect(() => {
    setCurrentPath(location.pathname.slice(1))
  }, [location])

  return (
    <div id="app-header" className="w-full bg-primary text-white">
      <div className="container mx-auto md:py-8 sm:6 py-4">
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex justify-between items-center">
            {/* logo */}
            <button
              className="p-0"
              onClick={() => {
                navigate('/')
              }}
            >
              <img
                src={Logo}
                alt="logo-nimedix"
                className="md:h-12 h-auto md:w-auto w-2/3"
              />
            </button>
            {/* primary nav */}
            <div className="hidden lg:flex items-center">
              <HeaderNavButton
                label="Home"
                active={currentPath === 'home' || currentPath === ''}
                onClick={() => {
                  navigate('/home')
                }}
              />
              <HeaderNavButton
                label="Services"
                active={currentPath === 'services'}
                onClick={() => {
                  navigate('/services')
                }}
              />
              <HeaderNavButton
                label="Our Token"
                active={currentPath === 'our-token'}
                onClick={() => {
                  navigate('/our-token')
                }}
              />
              <HeaderNavButton
                label="About"
                active={currentPath === 'about'}
                onClick={() => {
                  navigate('/about')
                }}
              />
            </div>
          </div>
          {/* secondary nav */}
          <div className="hidden lg:flex items-center space-x-3 justify-end">
            <button
              onClick={toggle}
              className="md:p-2 p-1 bg-success-light rounded-full bg-opacity-10 hover:bg-opacity-50 transition duration-300"
            >
              {onSearch ? (
                <img src={CloseIcon} alt="search-icon" className="sm:w-8 w-6" />
              ) : (
                <img
                  src={SearchIcon}
                  alt="search-icon"
                  className="sm:w-8 w-6"
                />
              )}
            </button>
            <hr className="border-[1px] border-grey-light border-opacity-20 h-full" />
            <button
              className="lg:py-3 py-1 lg:px-6 px-2 text-dark bg-secondary rounded-full"
              onClick={() => {
                navigate('/login')
              }}
            >
              Login
            </button>
            <button
              className="lg:py-3 py-1 lg:px-6 px-2 text-primary bg-white rounded-full"
              onClick={() => {
                navigate('/signup')
              }}
            >
              Sign up
            </button>
          </div>
          {/* mobile button */}
          <div className="lg:hidden flex items-center space-x-3 justify-end">
            <button
              className="p-2 bg-success-light rounded-full bg-opacity-10 hover:bg-opacity-50 transition duration-300"
              onClick={() => {
                toggle()
              }}
            >
              {onSearch ? (
                <img src={CloseIcon} alt="search-icon" className="sm:w-8 w-6" />
              ) : (
                <img
                  src={SearchIcon}
                  alt="search-icon"
                  className="sm:w-8 w-6"
                />
              )}
            </button>
            <hr className="border-[1px] border-grey-light border-opacity-20 h-full" />
            <button className="p-2 bg-success-light rounded-full bg-opacity-10 hover:bg-opacity-50 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:w-8 w-6 sm:h-8 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-black block w-full h-96 fixed bg-opacity-50 top-0 left-0 w-full h-full z-[9000]">
        <div className="flex flex-row items-start">
          <button
            type="button"
            className="bg-light-green p-2"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="w-full h-screen bg-primary">sre</div>
        </div>
      </div> */}
      {onSearch && (
        <SearchBar
          value={searchKeyword}
          onChangeText={(val) => {
            setSearchKeyword(val)
          }}
        />
      )}
    </div>
  )
}

export default AppHeader

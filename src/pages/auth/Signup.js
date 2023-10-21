import React from 'react'
import { Outlet } from 'react-router-dom'
import NiMEDixLogo from '../../assets/images/logo/logo_single_line_nimedix.png'

const SignUp = () => {
  return (
    <div
      id="sign-up"
      className="w-screen h-screen fixed top-0 left-0 grid md:grid-cols-2 grid-col-1"
    >
      <div
        id="signup-banner"
        className="w-full y-full mx-auto bg-primary p-[10%]"
      >
        <img
          src={NiMEDixLogo}
          alt="nimedix-logo"
          className="h-[10%] my-4 mb-16"
        />
        <p className="p-0 text-tertiary-light md:text-4xl text-2xl mb-8 font-bold">
          Create Account
        </p>
        <p className="title text-white lg:text-7xl md:text-5xl sm:text-4xl text-3xl xl:w-2/3 w-full mb-8 break-words">
          Access better healthcare with technology
        </p>
        <p className="p-0 text-grey-light sm:text-2xl text-base">
          Patient-centric and doctors driven digital healthcare platform
          leveraging Blockchain and A.I to challenge health care solutions.
        </p>
      </div>
      <div className="bg-white px-16 pt-16 h-full overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default SignUp

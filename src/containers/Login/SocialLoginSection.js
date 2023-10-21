import React from 'react'
import AppleIcon from '../../assets/images/auth_social/apple.png'
import FacebookIcon from '../../assets/images/auth_social/Facebook.png'
import GoogleIcon from '../../assets/images/auth_social/google.png'

const SocialLoginSection = () => {
  return (
    <div className="flex items-center justify-between space-x-2 my-4">
      <button className="py-2 w-full bg-grey-lighter rounded-full">
        <img src={AppleIcon} alt="apple-icon" className="w-8 h-8 mx-auto" />
      </button>
      <button className="py-2 w-full bg-grey-lighter rounded-full">
        <img src={FacebookIcon} alt="apple-icon" className="w-8 h-8 mx-auto" />
      </button>
      <button className="py-2 w-full bg-grey-lighter rounded-full">
        <img src={GoogleIcon} alt="apple-icon" className="w-8 h-8 mx-auto" />
      </button>
    </div>
  )
}

export default SocialLoginSection

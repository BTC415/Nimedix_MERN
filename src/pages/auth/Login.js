import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppInput from '../../components/AppInput'
import SocialLoginSection from '../../containers/Login/SocialLoginSection'
import LockIcon from '../../assets/images/form/lock.png'
import EmailIcon from '../../assets/images/form/sms.png'
import NiMEDixLogo from '../../assets/images/logo/logo_nimedix.png'
import Divider from '../../containers/Login/Divider'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('login!')
  }

  return (
    <div id="login" className="w-full bg-white">
      <div className="container 2xl:w-1/3 xl:w-2/5 lg:w-3/5 w-full h-full mx-auto flex flex-col justify-around items-center">
        <div className="block w-full bg-primary rounded-3xl p-2 text-center mt-16">
          <img
            src={NiMEDixLogo}
            className="sm:w-24 w-12 mx-auto my-10"
            alt="nimedix-logo"
          />
          <p className="title text-white text-4xl my-2">Welcome Back</p>
          <p className="text-grey-light md:text-xl text-base my-2">
            Login to access your account.
          </p>
          <div className="w-full sm:p-12 p-2 bg-white rounded-3xl text-start">
            <AppInput
              type="email"
              label="Email"
              value={email}
              img={EmailIcon}
              placeholder="Enter email address"
              onChangeText={(val) => {
                setEmail(val)
              }}
            />
            <AppInput
              type="password"
              label="Password"
              value={password}
              img={LockIcon}
              placeholder="Enter password"
              onChangeText={(val) => {
                setPassword(val)
              }}
            />
            <button
              className="p-0"
              onClick={() => {
                navigate('/forgot-password')
              }}
            >
              <p className="p-0 md:text-xl text-base text-primary">
                Forgot Password?
              </p>
            </button>
            <button
              className="w-full bg-primary py-4 rounded-full my-8"
              onClick={() => {
                handleLogin()
              }}
            >
              <p className="p-0 text-white md:text-xl text-base">Login</p>
            </button>
            <Divider />
            <SocialLoginSection />
            <div className="flex items-center justify-center space-x-2">
              <p className="p-0 md:text-lg text-base text-dark">
                Don&apos;t have an account?
              </p>
              <button
                className="p-0"
                onClick={() => {
                  navigate('/signup')
                }}
              >
                <p className="p-0 md:text-lg text-base text-primary">Sign up</p>
              </button>
            </div>
          </div>
        </div>
        <p className="p-0 text-grey md:text-xl text-base text-center my-8">
          &copy;NiMEDix Ecosystem 2023. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Login

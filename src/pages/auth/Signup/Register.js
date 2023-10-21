import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AppInput from '../../../components/AppInput'
import BackButton from '../../../components/BackButton'
import EmailIcon from '../../../assets/images/form/sms.png'
import UserIcon from '../../../assets/images/form/user.png'
import AddressIcon from '../../../assets/images/form/location.png'
import CalendarIcon from '../../../assets/images/form/calendar.png'
import GalleryIcon from '../../../assets/images/form/gallery.png'

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [birthday, setBirthday] = useState('')
  const [photo, setPhoto] = useState('')

  const isFormEmpty = () => {
    return (
      name === '' ||
      email === '' ||
      address === '' ||
      birthday === '' ||
      photo === ''
    )
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div id="register-section">
      <BackButton
        onClick={() => {
          navigate(-1)
        }}
      />
      <p className="title md:text-4xl text-2xl text-dark sm:mt-24 mt-8 mb-4">
        {capitalize(location.state.userType)} SignUp
      </p>
      <p className="p-0 sm:text-xl text-base text-grey mb-4">
        Choose your type of account to continue.
      </p>
      <AppInput
        type="text"
        label="Full Name"
        value={name}
        img={UserIcon}
        placeholder="Enter your full name"
        onChangeText={(val) => {
          setName(val)
        }}
      />
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
        type="text"
        label="Address"
        value={address}
        img={AddressIcon}
        placeholder="Enter your home address"
        onChangeText={(val) => {
          setAddress(val)
        }}
      />
      <AppInput
        type="text"
        label="Date of Birth"
        value={birthday}
        img={CalendarIcon}
        placeholder="DD/MM/YYYY"
        onChangeText={(val) => {
          setBirthday(val)
        }}
      />
      <AppInput
        type="text"
        label="Photo"
        value={photo}
        img={GalleryIcon}
        placeholder="Choose photo"
        onChangeText={(val) => {
          setPhoto(val)
        }}
      />
      <button
        className={
          isFormEmpty()
            ? 'w-full py-4 bg-grey rounded-full my-8'
            : 'w-full py-4 bg-primary rounded-full my-8'
        }
        disabled={isFormEmpty()}
        onClick={() => {
          navigate('/home')
        }}
      >
        <p className="p-0 text-white md:text-xl text-base">Continue</p>
      </button>

      <div className="w-full flex space-x-2 items-center justify-center mb-16">
        <p className="p-0 md:text-xl text-base text-grey">
          Already have an account?
        </p>
        <button
          className="p-0"
          onClick={() => {
            navigate('/login')
          }}
        >
          <p className="p-0 md:text-xl text-base text-primary">Login</p>
        </button>
      </div>
    </div>
  )
}

export default Register

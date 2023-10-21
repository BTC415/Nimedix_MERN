import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../../components/BackButton'
import UserTypeCard from '../../../components/UserTypeCard'
import PatientLogo from '../../../assets/images/access/patient.png'
import ProviderLogo from '../../../assets/images/access/provider.png'

const Choose = () => {
  const navigate = useNavigate()
  const [userType, setUserType] = useState(null)

  return (
    <div id="auth-choose">
      <BackButton
        onClick={() => {
          navigate(-1)
        }}
      />
      <p className="title md:text-4xl text-2xl text-dark sm:mt-24 mt-8 mb-4">
        Choose Access
      </p>
      <p className="p-0 sm:text-xl text-base text-grey mb-4">
        Choose your type of account to continue.
      </p>
      <div className="grid gap-4 xl:grid-cols-2 grid-cols-1 my-16">
        <UserTypeCard
          title="Patient"
          description="Find a doctor, book appointment and access your medical record online as NFT"
          onClick={() => {
            setUserType((prev) => {
              return prev === 'patient' ? null : 'patient'
            })
          }}
          labelIcon={PatientLogo}
          bgColor="bg-danger-light"
          active={userType === 'patient'}
        />
        <UserTypeCard
          title="Provider"
          description="Easiest way to reach patient, access telehealth with AI tools and get paid."
          onClick={() => {
            setUserType((prev) => {
              return prev === 'provider' ? null : 'provider'
            })
          }}
          labelIcon={ProviderLogo}
          bgColor="bg-info-light"
          active={userType === 'provider'}
        />
        <UserTypeCard
          title="Provider's Staff"
          description="Use the information received in your mail to sign up."
          onClick={() => {
            setUserType((prev) => {
              return prev === 'staff' ? null : 'staff'
            })
          }}
          labelIcon={ProviderLogo}
          bgColor="bg-success-light"
          active={userType === 'staff'}
        />
        <UserTypeCard
          title="Pharmacy"
          description="Register your pharmacy and list your products to over 5000K+ users"
          onClick={() => {
            setUserType((prev) => {
              return prev === 'pharmacy' ? null : 'pharmacy'
            })
          }}
          labelIcon={ProviderLogo}
          bgColor="bg-warn-light"
          active={userType === 'pharmacy'}
        />
      </div>
      <button
        className={
          userType === null
            ? 'w-full py-4 bg-grey rounded-full my-8'
            : 'w-full py-4 bg-primary rounded-full my-8'
        }
        disabled={userType === null}
        onClick={() => {
          navigate('/signup/register', {
            state: { userType },
          })
        }}
      >
        <p className="p-0 text-white md:text-xl text-base">Continue</p>
      </button>
    </div>
  )
}

export default Choose

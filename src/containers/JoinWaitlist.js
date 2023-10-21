import React, { useState } from 'react'
import { addEmailToWaitList } from '../libs/apiController'
import { emailValidation } from '../libs/utils'
import SendIcon from '../assets/images/form/arrow_right.png'
import EmailIcon from '../assets/images/form/sms_star.png'

const JoinWaitlist = ({ dismiss }) => {
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleJoin = async () => {
    if (emailValidation(email)) {
      try {
        const result = await addEmailToWaitList(email)
        console.log(result.data)
        setEmail('')
      } catch (error) {
        console.error(error)
      }
    } else {
      setErrorMsg('⚠️Invalid email')
      setTimeout(() => {
        setErrorMsg('')
      }, [2000])
    }
  }

  return (
    <div
      data-te-modal-init
      className="fixed top-0 left-0 h-full w-full z-[1000] bg-opacity-[0.5] bg-[rgba(0,0,0,0.2)] flex flex-col justify-center"
      id="join-waitlist-modal"
    >
      <div
        data-te-modal-dialog-ref
        className="w-auto mx-auto min-[576px]:max-w-[500px]"
      >
        <div className="relative w-full rounded-3xl bg-white">
          <div className="w-full text-end rounded-t-3xl px-4 pt-4">
            <button
              type="button"
              className="rounded-full bg-light-green p-2"
              onClick={() => {
                dismiss()
              }}
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
          </div>
          <div
            className="relative block px-4 text-center"
            data-te-modal-body-ref
          >
            <p className="title md:text-4xl text-2xl text-primary">
              Join our waitlist
            </p>
            <p className="p-0 text-grey text-base">Get early access</p>
            <div className="w-11/12 bg-grey-light rounded-full my-4 mx-auto p-2 flex flex-row justify-between gap-4">
              <div className="flex items-center">
                <img
                  src={EmailIcon}
                  alt="searchbar-icon"
                  className="w-6 h-6 mx-2"
                />
                <input
                  type="email"
                  className="w-full text-dark bg-transparent border-transparent focus:border-transparent focus:outline-none placeholder-dark-light"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <button
                className="py-2 px-4 rounded-full bg-primary"
                onClick={() => {
                  handleJoin()
                }}
              >
                <div className="flex flex-direction gap-2 w-full items-center">
                  <p className="p-0 text-white">Send</p>
                  <img src={SendIcon} alt="btn-icon" className="w-4 h-4" />
                </div>
              </button>
            </div>
            {errorMsg !== '' && (
              <p className="py-0 pl-4 text-start text-danger text-base my-2">
                {errorMsg}
              </p>
            )}
            <p className="p-0 text-grey text-base mt-4">
              By providing your email you agree to NiMEDix
            </p>
            <button className="p-1">
              <p className="p-0 text-primary text-base mb-4">
                Terms of Service & Privacy
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinWaitlist

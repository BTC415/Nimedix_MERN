import React from 'react'
import SendIcon from '../assets/images/form/arrow_right.png'
import EmailIcon from '../assets/images/form/sms.png'

const SubscribeBar = (props) => {
  return (
    <div className="lg:w-1/2 w-full bg-grey-light rounded-full my-4 mx-auto p-2 flex flex-row justify-between gap-4">
      <div className="flex items-center">
        <img src={EmailIcon} alt="searchbar-icon" className="w-6 h-6 mx-2" />
        <input
          type="email"
          className="w-full text-dark sm:text-base text-sm bg-transparent border-transparent focus:border-transparent focus:outline-none placeholder-dark-light"
          value={props.value}
          placeholder="Enter your email"
          onChange={(e) => {
            props.onClick(e.target.value)
          }}
        />
      </div>
      <button className="py-2 px-4 rounded-full bg-primary">
        <div className="flex flex-direction items-center gap-1">
          <p className="p-0 text-white sm:text-base text-xs">Send</p>
          <img
            src={SendIcon}
            alt="btn-icon"
            className="sm:w-4 w-3 sm:h-4 h-3"
          />
        </div>
      </button>
    </div>
  )
}

export default SubscribeBar

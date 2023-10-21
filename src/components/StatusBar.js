import React from 'react'
import StatusBarLogo from '../assets/images/status_bar.png'

const StatusBar = () => {
  return (
    <div className="w-full bg-primary">
      <div className="container mx-auto md:py-0 py-8 flex sm:flex-row flex-col items-center lg:gap-8 md:gap-4 gap-2">
        <div className="flex sm:items-center items-start lg:gap-8 md:gap-4 gap-2">
          <div className="rounded-full border-4 border-white p-1">
            <div className="rounded-full bg-secondary w-4 h-4"></div>
          </div>
          <div>
            <p className="title text-white xl:text-3xl lg:text-2xl md:text-xl text-base">
              Digital health tools have immense potential to bring affordable,
              quality health care to people across geographies — not just the
              unserved, but also the underserved. - EDISON Alliance 2021
            </p>
          </div>
        </div>
        <img
          src={StatusBarLogo}
          alt="status-bar-bg"
          className="lg:w-72 md:w-64 w-full h-full"
        />
      </div>
    </div>
  )
}

export default StatusBar

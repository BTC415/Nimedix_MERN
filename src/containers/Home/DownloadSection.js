import React from 'react'
import AppButton from '../../components/AppButton'
import DownloadBgIcon from '../../assets/images/download/download_bg.png'
import AppStoreIconDark from '../../assets/images/app_download/app_store_dark.png'
import GooglePlayIconDark from '../../assets/images/app_download/google_play_light.png'

const DownloadSection = () => {
  return (
    <div id="download-section" className="bg-white sm:py-24 py-12">
      <div className="container mx-auto">
        <div className="bg-primary rounded-3xl md:p-16 sm:p-8 p-4 border-box grid lg:gap-32 md:gap-16 gap-8 lg:grid-cols-2 grid-cols-1 items-center">
          <div className="block">
            <p className="text-tertiary-light md:text-2xl sm:text-xl text-base">
              Ready to get started?
            </p>
            <p className="title text-white lg:text-7xl md:text-5xl sm:text-4xl text-3xl text-start md:my-8 my-4 break-words">
              Download the App to start exploring
            </p>
            <p className="text-grey-light sm:my-8 my-4 lg:text-2xl md:text-xl sm:text-base text-sm">
              Get full access to affordable and easy to use digital health care
              platform. Unlimited access to top-rated providers and better
              health care services designed for your health needs and security.
            </p>
            <div className="flex">
              <AppButton
                variant="secondary"
                icon={AppStoreIconDark}
                bgColor="white"
                labelColor="amber-500"
                label="App Store"
              />
              <AppButton
                icon={GooglePlayIconDark}
                bgColor="transparent"
                labelColor="white"
                label="Google Play"
                variant="outline"
              />
            </div>
          </div>
          <div className="bg-primary-light rounded-3xl">
            <img
              src={DownloadBgIcon}
              alt="download-bg"
              className="w-4/5 mx-auto my-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadSection

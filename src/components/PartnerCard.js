import React from 'react'
const PartnerCard = (props) => {
  return (
    <div className="bg-grey-light rounded-2xl shadow-xl shadow-grey-light border-t-[1px] border-[#f5f5f5] pb-2 m-2">
      <div className="h-full flex lg:py-10 md:py-6 py-4 lg:px-16 px-0 bg-white md:rounded-2xl rounded-lg items-center justify-center">
        <img
          src={props.logo}
          alt="partner-logo"
          className="lg:h-8 md:h-6 sm:h-4 h-4 aspect-auto"
        />
        {props.label && (
          <p className="p-0 lg:text-2xl md:text-base text-sm ml-2">
            {props.label}
          </p>
        )}
      </div>
    </div>
  )
}

export default PartnerCard

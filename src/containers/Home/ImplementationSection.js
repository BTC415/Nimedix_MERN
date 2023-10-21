import React from 'react'
import ImplementationBg from '../../assets/images/implementation/implementation_bg.png'

const ImplementationSection = () => {
  return (
    <div id="implementation-section" className="w-full bg-white py-16">
      <div className="container mx-auto text-center">
        <p className="title text-dark lg:text-7xl md:text-5xl sm:text-4xl text-3xl p-0 break-words mb-8">
          Our Implementation
        </p>
        <p className="p-0 text-grey lg:text-2xl md:text-xl text-base break-words mb-8 lg:w-3/5 w-full mx-auto">
          Digital healthcare can create sustainable models in terms of return on
          investment, reducing the cost of care. We promote
        </p>
        <img
          src={ImplementationBg}
          alt="implementation-bg"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default ImplementationSection

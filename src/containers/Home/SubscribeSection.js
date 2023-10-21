import React from 'react'
import SubscribeBar from '../../components/SubscribeBar'

const SubscribeSection = () => {
  return (
    <div id="subscribe-section" className="w-full bg-white lg:py-24 py-16">
      <div className="container mx-auto text-center">
        <p className="title text-primary font-black lg:text-7xl md:text-5xl sm:text-4xl text-3xl mb-4">
          Let&apos;s keep you updated
        </p>
        <p className="text-grey md:text-2xl sm:text-xl text-base mb-8">
          Subscribe to our newsletter to get feeds, offers and promos.
        </p>
        <SubscribeBar />
      </div>
    </div>
  )
}

export default SubscribeSection

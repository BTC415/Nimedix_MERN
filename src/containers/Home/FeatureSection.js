import FeatureCard from '../../components/FeatureCard'
import TelemedicinLogo from '../../assets/images/features/telemedicine.png'
import VRTelegraphyLogo from '../../assets/images/features/vr_telegraphy.png'
import CDSSLogo from '../../assets/images/features/cdss.png'
import CBHLogo from '../../assets/images/features/cross_border_healthcare.png'
import NFTLogo from '../../assets/images/features/nimedix_nfts.png'
import WellnessLogo from '../../assets/images/features/wellness.png'

import React from 'react'
const FeatureSection = () => {
  return (
    <div id="feature-section" className="w-full bg-light-green py-16">
      <div className="container mx-auto text-center">
        <p className="title text-dark lg:text-7xl md:text-5xl sm:text-4xl text-3xl">
          Our Key Features
        </p>
        <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-16">
          <FeatureCard
            logo={TelemedicinLogo}
            title="Telemedicine"
            description="Access to care is a RIGHT, not a LUXURY. We provide opportunity to get consultations from top-rated doctors, nurses, pharmacists and more on the NiMEDix platform"
          />
          <FeatureCard
            logo={VRTelegraphyLogo}
            title="VR Teletherapy"
            description="VR powered Teletherapy / Consult  for Depression and Anxiety disorders."
          />
          <FeatureCard
            logo={CDSSLogo}
            title="Clinical Decision Support System (CDSS)"
            description="We provide full access to AI tools for better Diagnostics and patient management for providers."
          />
          <FeatureCard
            logo={CBHLogo}
            title="Cross Border Health Care Remittances"
            description="Make seamless and secure payment transactions for healthcare services on the Blockchain"
          />
          <FeatureCard
            logo={NFTLogo}
            title="NiMEDix NFTs"
            description="Secure medical records as Non-Fungible Digital Twins (DTs) and BioNFTs"
          />
          <FeatureCard
            logo={WellnessLogo}
            title="Wellness incentivisation / gamification"
            description="Mine TDX tokens for wellness activities and competitions to promote good health"
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureSection

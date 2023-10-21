import React from 'react'
import PartnerCard from '../../components/PartnerCard'
import NearLogo from '../../assets/images/partner/near.png'
import GenBankLogo from '../../assets/images/partner/gen_bank.png'
import BurstIQLogo from '../../assets/images/partner/burst_iq.png'
import BoundlessPayLogo from '../../assets/images/partner/boundless_pay.png'
import AllianceLogo from '../../assets/images/partner/alliance.png'
import PinkSaleLogo from '../../assets/images/partner/pink_sale.png'
import ClinicBancLogo from '../../assets/images/partner/clinic_banc.png'
import AelexLogo from '../../assets/images/partner/aelex.png'
import SankoreLogo from '../../assets/images/partner/sankore.png'
import NimsaLogo from '../../assets/images/partner/nimsa.png'

const PartnerSection = () => {
  return (
    <div id="partner-section" className="w-full bg-white sm:py-24 py-12">
      <div className="container mx-auto text-center">
        <p className="title lg:text-7xl md:text-5xl sm:text-4xl text-3xl text-dark my-8">
          Our Partners
        </p>
        <p className="text-grey lg:text-2xl md:text-xl text-base">
          We’ve partnered with market leading providers in the medical,
          Artificial Intelligence and Blockchain market to build a lasting
          solution.
        </p>
        <div className="grid lg:gap-8 gap-0 md:grid-cols-4 grid-cols-2 my-8">
          <PartnerCard logo={NearLogo} />
          <PartnerCard logo={SankoreLogo} />
          <PartnerCard logo={GenBankLogo} />
          <PartnerCard logo={BoundlessPayLogo} />
          <PartnerCard logo={PinkSaleLogo} label="PinkSale" />
          <PartnerCard logo={AllianceLogo} />
          <PartnerCard logo={ClinicBancLogo} label="Clinic Banc" />
          <PartnerCard logo={AelexLogo} />
          <PartnerCard logo={BurstIQLogo} />
          <PartnerCard logo={NimsaLogo} label="NIMSA" />
        </div>
      </div>
    </div>
  )
}

export default PartnerSection

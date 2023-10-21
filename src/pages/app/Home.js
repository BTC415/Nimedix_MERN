import React from 'react'
import BannerSection from '../../containers/Home/BannerSection'
import FeatureSection from '../../containers/Home/FeatureSection'
import ImplementationSection from '../../containers/Home/ImplementationSection'
import PatientDataSection from '../../containers/Home/PatientDataSection'
import DigitalTwinSection from '../../containers/Home/DigitalTwinSection'
import ProcessSection from '../../containers/Home/ProcessSection'
import PartnerSection from '../../containers/Home/PartnersSection'
import DownloadSection from '../../containers/Home/DownloadSection'
import SubscribeSection from '../../containers/Home/SubscribeSection'
import StatusBar from '../../components/StatusBar'

const Home = () => {
  return (
    <div id="home" className="bg-primary">
      <BannerSection />
      <FeatureSection />
      <StatusBar />
      <ImplementationSection />
      <PatientDataSection />
      <DigitalTwinSection />
      <ProcessSection />
      <PartnerSection />
      <DownloadSection />
      <SubscribeSection />
    </div>
  )
}

export default Home

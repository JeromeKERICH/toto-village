import React from 'react'
import DonationHero from '../components/Donation/DonateHero'
import WhyDonate from '../components/Donation/WhyDonate'
import CallToAction from '../components/Donation/DonateCTA'
import DonationFAQs from '../components/Donation/DonationFAQ'

const Donate = () => {
  return (
    <div>
      <DonationHero/>
      <WhyDonate/>
      <DonationFAQs/>
    </div>
  )
}

export default Donate

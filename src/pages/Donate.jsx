import React, { useEffect } from 'react'
import DonationHero from '../components/Donation/DonateHero'
import WhyDonate from '../components/Donation/WhyDonate'
import DonationFAQs from '../components/Donation/DonationFAQ'

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <DonationHero/>
      <WhyDonate/>
      <DonationFAQs/>
    </div>
  );
}

export default Donate

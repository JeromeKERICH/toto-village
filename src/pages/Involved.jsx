import React, { useEffect } from 'react'
import GetInvolvedHero from '../components/involved/InvolvedHero'

import CustomDonation from '../components/involved/InvolvedLearn';
import InvolvedCTA from '../components/involved/InvolvedCTA';
import DonationCard from '../components/involved/InvolvedKit';


const Involved = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);
  return (
    <div>
      <GetInvolvedHero/>
      <DonationCard/>
      <CustomDonation/>
      <InvolvedCTA/>
    </div>
  )
}

export default Involved

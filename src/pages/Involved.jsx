import React, { useEffect } from 'react'
import GetInvolvedHero from '../components/involved/InvolvedHero'


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
      
      <InvolvedCTA/>
    </div>
  )
}

export default Involved

import React, { useEffect } from 'react'
import HeroSection from '../components/compo/Hero'
import Programs from '../components/compo/ProgramCard'

import ContactSection from '../components/compo/ContactForm'
import MissionSection from '../components/compo/Mission-Vision'
import CommunitySection from '../components/compo/Community'



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <HeroSection/>
      <MissionSection/>
      <CommunitySection/>
      <Programs/>
      
      <ContactSection/>
    </div>
  )
}

export default Home

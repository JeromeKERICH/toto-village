import React, { useEffect } from 'react'
import HeroSection from '../components/compo/Hero'
import Programs from '../components/compo/ProgramCard'
import DonationSection from '../components/compo/HomeDonation'
import ContactSection from '../components/compo/ContactForm'
import MissionSection from '../components/compo/Mission-Vision'
import CommunitySection from '../components/compo/Community'
import Testimonial from '../components/compo/TestimonialSlider'

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
      <DonationSection/>
      <ContactSection/>
    </div>
  )
}

export default Home

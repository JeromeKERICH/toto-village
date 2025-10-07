import React, { useEffect } from 'react'
import HeroSection from '../components/compo/Hero'
import Programs from '../components/compo/ProgramCard'
import MissionSection from '../components/compo/Mission-Vision'
import CommunitySection from '../components/compo/Community'
import ProblemSection from '../components/compo/Problem'



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <HeroSection/>
      <ProblemSection/>
      <Programs/>
      <MissionSection/>
      <CommunitySection/>
      
      
      
    </div>
  )
}

export default Home

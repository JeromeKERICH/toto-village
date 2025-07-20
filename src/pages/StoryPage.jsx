import React, { useEffect } from 'react'
import StoryOverview from '../components/story/StoryOverview'
import FoundersBrief from '../components/story/Founders'
import DonationCTA from '../components/story/DonationBrief'
import FAQ from '../components/story/FAQs'
import HeroSection from '../components/story/StoryHero'
import WhatWeDo from '../components/story/WhatWeDo'

const StoryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
    }
    , []);
  return (
    <div className='bg-[#f6f4f1] '>
      <HeroSection/>
      <StoryOverview/>
      <WhatWeDo/>
      <FoundersBrief/>
      
      <DonationCTA/>
      <FAQ/>
    </div>
  )
}

export default StoryPage

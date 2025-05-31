import React, { useEffect } from 'react'
import StoryOverview from '../components/story/StoryOverview'
import StoryMission from '../components/story/StoryMission'
import FoundersBrief from '../components/story/Founders'
import DonationCTA from '../components/story/DonationBrief'
import FAQ from '../components/story/FAQs'

const StoryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
    }
    , []);
  return (
    <div className='bg-[#f6f4f1] '>
      <StoryOverview/>
      <StoryMission/>
      <FoundersBrief/>
      <DonationCTA/>
      <FAQ/>
    </div>
  )
}

export default StoryPage

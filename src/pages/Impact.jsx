import React, { useEffect } from 'react'
import ImpactHero from '../components/impact/ImpactOverview'
import ImpactStories from '../components/impact/Impacts'
import ImpactPillars from '../components/impact/ImpactPillars'

const Impact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }
, []);
  return (
    <div>
      <ImpactHero/>
      <ImpactStories/>
      <ImpactPillars/>
    </div>
  )
}

export default Impact

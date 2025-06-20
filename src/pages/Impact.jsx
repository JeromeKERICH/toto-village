import React from 'react'
import ImpactHero from '../components/impact/ImpactOverview'
import ImpactStories from '../components/impact/Impacts'
import DataVisualization from '../components/impact/ImpactStats'
import ImpactPillars from '../components/impact/ImpactPillars'

const Impact = () => {
  return (
    <div>
      <ImpactHero/>
      <ImpactStories/>
      <DataVisualization/>
      <ImpactPillars/>
    </div>
  )
}

export default Impact

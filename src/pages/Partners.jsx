import React, { useEffect } from 'react'
import PartnershipHero from '../components/partners/PartnerHero'
import WhyPartner from '../components/partners/WhyPartner'
import PartnerStories from '../components/partners/PartnerStories'

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <PartnershipHero/>
      <WhyPartner/>
      <PartnerStories/>
    </div>
  )
}

export default Partners

import React from 'react'
import HeroSection from '../components/compo/Hero'
import OurStory from '../components/compo/Story'
import Programs from '../components/compo/ProgramCard'
import Testimonials from '../components/compo/TestimonialSlider'
import DonationSection from '../components/compo/HomeDonation'
import TheChangeSoFar from '../components/compo/Impact'
import PodcastSection from '../components/compo/PodcastPlayer'
import BlogSection from '../components/compo/BlogSection'
import ContactSection from '../components/compo/ContactForm'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurStory/>
      <Programs/>
      <DonationSection/>
      <TheChangeSoFar/>
      <PodcastSection/>
      <BlogSection/>
      <Testimonials/>
      <ContactSection/>
    </div>
  )
}

export default Home

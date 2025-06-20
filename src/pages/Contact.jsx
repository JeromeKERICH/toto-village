import React, { useEffect } from 'react'
import ContactSection from '../components/compo/ContactForm'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <div>
      <ContactSection/>
    </div>
  )
}

export default Contact

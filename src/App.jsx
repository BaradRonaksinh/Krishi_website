// import { useState } from 'react'

import './App.css'
import CompanyLogo from './components/CompanyLogo'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection'
import Navbar from './components/Navbar'
import NewsletterSection from './components/NewsletterSection'
import PricingSection from './components/PricingSection'
import PurposeSection from './components/PurposeSection'
import ScheduleSection from './components/ScheduleSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <PurposeSection />
      <FeaturesSection />
      <ScheduleSection />
      <MonitorSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}

export default App

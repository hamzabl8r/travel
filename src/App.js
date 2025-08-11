import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import MainSearch from './Components/MainSearch'
import FeedbackSection from './Components/FeedbackSection'
import Services from './Components/Services'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MainSearch/>
      <Services/>
      <FeedbackSection/>
      <Footer/>
    </div>
  )
}

export default App

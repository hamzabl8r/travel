import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import MainSearch from './Components/MainSearch'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MainSearch/>
      <Footer/>
    </div>
  )
}

export default App

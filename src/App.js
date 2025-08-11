import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FeedbackSection from './Components/FeedbackSection'
import Services from './Components/Services'
import Card from './Components/Card'



const App = () => {
  return (
    <div>
  <Navbar/>

  <Card/>
      <Services/>


      <FeedbackSection/>


    

      <Footer/>

    </div>
  )
}

export default App

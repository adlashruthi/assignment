import React from 'react'
import AboutUs from './components/AboutUs'
import Faq from './components/Faq'
import Navbar from './components/Navbar'
import Student from './components/Student'
import WhyChoose from './components/WhyChoose'

const App = () => {
  return (
    <div>
       <Navbar />
       <AboutUs />
       <Student />
         <WhyChoose /> 
         <Faq />

    </div>
  )
}

export default App
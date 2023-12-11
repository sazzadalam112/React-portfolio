import React from 'react'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  )
}

export default App

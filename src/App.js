import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />

      <SocialLinks />
    </div>
  )
}

export default App

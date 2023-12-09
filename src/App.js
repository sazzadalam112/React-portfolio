import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />

      <SocialLinks />
    </div>
  )
}

export default App

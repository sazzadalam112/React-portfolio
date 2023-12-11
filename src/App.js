import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  )
}

export default App

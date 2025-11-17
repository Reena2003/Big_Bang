import React from 'react'
import Navbar from './components/Navbar'
import Contact from './components/contact'
import Footer from './components/footer'
import Director from './components/director'
import Classes from './components/Classes'
import Home from './components/Home'
import About from './components/About'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      
      <Classes />
      <Director />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

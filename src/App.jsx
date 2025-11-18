import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/contact'
import Footer from './components/Footer'
import Director from './components/director'
import Classes from './components/Classes'
import Home from './components/Home'
import About from './components/About'
import Admin from './components/Admin'

const App = () => {
  return (
    <div>
      
      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <>
          <Navbar />
            <Home />
            <About />
            <Classes />
            <Director />
            <Contact />
            <Footer />
          </>
        } />
        {/* Admin page route */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      
    </div>
  )
}

export default App

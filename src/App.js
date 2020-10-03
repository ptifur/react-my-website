import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import MainText from './components/MainText'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MainText />
    </div>
  )
}

export default App
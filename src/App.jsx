import React from 'react'
import { DarkModeProvider } from './components/DarkModeContext'
import About from './sections/About'
import PopularArea from './sections/PopularArea'
import Posperties from './sections/Posperties'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Client from './sections/Client'
import Contact from './sections/Contact'
import Fuuter from './components/Fuuter'
import Headerr from './components/Headerr'

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Headerr/>
        <Hero/> 
        <About />
        <PopularArea />
        <Posperties/>
        <Services/>
        <Client/>
        <Contact/>
        <Fuuter/>
      </DarkModeProvider>
    </>
  )
}

export default App
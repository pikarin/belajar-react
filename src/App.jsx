import React, { useState } from 'react'
import AppLink from './components/AppLink'
import ButtonCounter from './components/ButtonCounter'
import HeroList from './components/HeroList'
import AppLogo from './components/AppLogo'
import './App.css'

function App() {
  const [heroes, setHeroes] = useState(['Batman', 'Superman', 'Wonder Woman'])

  return (
    <div className="text-center">
      <header className="flex flex-col items-center min-h-screen
        space-y-4 bg-[#282c34]
        text-3xl text-white"
      >
        <AppLogo className="h-[40vmin] pointer-events-none" />

        <HeroList heroes={heroes} onUpdateHeroes={(heroes) => setHeroes(heroes)}/>
      </header>
    </div>
  )
}

export default App

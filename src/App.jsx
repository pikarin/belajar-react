import React from 'react'
import AppLink from './components/AppLink'
import ButtonCounter from './components/ButtonCounter'
import AppLogo from './components/AppLogo'
import './App.css'

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen
        space-y-4 bg-[#282c34]
        text-3xl text-white"
      >
        <AppLogo className="h-[40vmin] pointer-events-none" />
        <p>Aditia Belajar React!</p>
        <p>
          <ButtonCounter className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-3xl" />
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p className="divide-x-2 divide-gray-50">
          <AppLink
            className="hover:text-blue-500 px-6"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
          {/* {' | '} */}
          <AppLink
            className="px-6"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </AppLink>
        </p>
      </header>
    </div>
  )
}

export default App

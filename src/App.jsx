import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home'
import Menu from './Components/Header/Menu'
import { Route, Routes } from 'react-router'
import { AnimatePresence } from 'framer-motion'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const isConsoleLogged = useRef(false)


  useEffect(() => {
    if (!isConsoleLogged.current) {
        console.log(`
            

            ░░░░░▄░░░░░▄░░░░░▄░░░░
            ░░░░▀▄▀░░░▀▄▀░░░▀▄▀░░░
            ░░░▀▄╣░░░▄░║░░░░░║░▄░░
            ░░░▄░║░▄░░▀╣░▄░▄░╠▀░░░
            ▒▒▒▒▀╬▀▒▒▒▒╠▀▒▒▒▀╣▒▒▒▒

            
        `,
      `       ¿Sos curioso? 😏

Te dejo el portfolio del verdadero genio detrás de esto: 
    https://bautistacalvo.vercel.app/`,
  )
        isConsoleLogged.current = true // Evita que se imprima más de una vez
    }
}, [])

  return (
    <main className="bg-background min-h-screen font-['SF_Pro_Display'] ">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>
        {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App

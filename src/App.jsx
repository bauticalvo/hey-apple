import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home'
import Menu from './Components/Header/Menu'
import { Route, Routes } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { IphonePage } from './Pages/IphonePage'
import { PageTransition } from './Components/Custom/PageTransition'
import { usePageTransition } from './Hooks/usePageTransition'
import { Footer } from './Components/Footer/Footer'
import ScrollToTop from './Hooks/ScrollToTop'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const isConsoleLogged = useRef(false)
  const { isTransitioning, startTransition } = usePageTransition();


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
      <ScrollToTop />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} startTransition={startTransition}/>
      <AnimatePresence>
        {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} startTransition={startTransition} />}
      </AnimatePresence>
      <PageTransition show={isTransitioning} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<IphonePage />} />
      </Routes>
      <Footer startTransition={startTransition}/>
    </main>
  )
}

export default App

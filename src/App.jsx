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
import { Privacy } from './Pages/Legal/Privacy'
import { Terms } from './Pages/Legal/Terms'
import { Error404 } from './Pages/404Error'
import { Construction } from './Pages/Construction'

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
     
  )
        isConsoleLogged.current = true // Evita que se imprima más de una vez
    }
}, [])

  return (
    <main className="bg-background min-h-screen w-full font-['SF_Pro_Display'] ">
      <ScrollToTop />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} startTransition={startTransition}/>
      <AnimatePresence>
        {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} startTransition={startTransition} />}
      </AnimatePresence>
      <PageTransition show={isTransitioning} />

      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/iphone" element={<IphonePage />} /> */}
        <Route path="legal">
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms/>} />
        </Route>
        <Route path="*" element={<Construction  startTransition={startTransition} />} />
      </Routes>
      <Footer startTransition={startTransition}/>
    </main>
  )
}

export default App

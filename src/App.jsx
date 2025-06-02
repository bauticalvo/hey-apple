import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home'
import Menu from './Components/Header/Menu'
import { Route, Routes } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { PageTransition } from './Components/Custom/PageTransition'
import { usePageTransition } from './Hooks/usePageTransition'
import { Footer } from './Components/Footer/Footer'
import ScrollToTop from './Hooks/ScrollToTop'
import { Privacy } from './Pages/Legal/Privacy'
import { Terms } from './Pages/Legal/Terms'
import { Construction } from './Pages/Construction'
import { IphonePage } from './Pages/Products/IphonePage'
import { MacPage } from './Pages/Products/MacPage'
import { AirpodsPage } from './Pages/Products/AirpodsPage'
import { Products } from './Pages/Products/Products'
import { WatchPage } from './Pages/Products/WatchPage'
import { ImacPage } from './Pages/Products/ImacPage'
import { IpadPage } from './Pages/Products/IpadPage'
import { AirtagPage } from './Pages/Products/AirtagPage'
import { PencilPage } from './Pages/Products/PencilPage'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const { isTransitioning, startTransition } = usePageTransition();

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
        <Route path="/iphone" element={<IphonePage />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/airpods" element={<AirpodsPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/imac" element={<ImacPage />} />
        <Route path="/ipad" element={<IpadPage />} />
        <Route path="/airtag" element={<AirtagPage />} />
        <Route path="/apple-pencil" element={<PencilPage />} />
        <Route path="/products" element={<Products />} />
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

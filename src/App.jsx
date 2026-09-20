import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Contact from './components/Contact'
import LegalModal from './components/LegalModal'
import Footer from './components/Footer'

export default function App() {
  const [activeLegal, setActiveLegal] = useState(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#privacy' || hash === '#privacy-policy') {
        setActiveLegal('privacy')
      } else if (hash === '#terms' || hash === '#terms-and-conditions') {
        setActiveLegal('terms')
      } else if (hash === '#disclaimer') {
        setActiveLegal('disclaimer')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenLegal={(type) => setActiveLegal(type)} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
      </main>

      <Footer onOpenLegal={(type) => setActiveLegal(type)} />

      <LegalModal
        activeLegal={activeLegal}
        onClose={() => {
          setActiveLegal(null)
          if (window.location.hash.includes('privacy') || window.location.hash.includes('terms') || window.location.hash.includes('disclaimer')) {
            history.pushState("", document.title, window.location.pathname + window.location.search)
          }
        }}
      />
    </div>
  )
}

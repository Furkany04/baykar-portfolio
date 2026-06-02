import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Projects from './components/Projects'
import BaykarFit from './components/BaykarFit'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('tr')

  return (
    <div style={{ background: '#020817', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Journey lang={lang} />
        <Projects lang={lang} />
        <BaykarFit lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

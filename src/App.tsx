
import './App.css'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { Footer } from './components/footer'

function App() {

  return (
    <main className='overflow-hidden'>
    
      <Navbar />  
      <Hero />
      <About />
      <Skills />
      <Projects />      
      <Contact  />
      <Footer />
    </main>
  )
}

export default App

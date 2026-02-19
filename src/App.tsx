
import './App.css'
import { About } from './components/about'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Projects } from './components/projects'
import { Skills } from './components/skills'



function App() {

  return (
    <main className='overflow-hidden'>
    
      <Navbar />  
      <Hero />
      <About />
      <Skills />
      <Projects />      


    </main>
  )
}

export default App

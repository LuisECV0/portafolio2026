
import './App.css'
import { About } from './components/about'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Skills } from './components/skills'



function App() {

  return (
    <main className='overflow-hidden'>
    
      <Navbar />  
      <Hero />
      <About />
      <Skills />
      


    </main>
  )
}

export default App

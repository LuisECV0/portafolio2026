
import './App.css'
import { About } from './components/about'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'



function App() {

  return (
    <main className='overflow-hidden'>
    
      <Navbar />  
      <Hero />
      <About />
    </main>
  )
}

export default App

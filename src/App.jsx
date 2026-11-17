import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Apartments from './components/Apartments'
import About from './components/About'
import Tlemcen from './components/Tlemcen'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Hero />
        <Apartments />
        <About />
        <Tlemcen />
        <Contact />
      </div>
    </>
  )
}

export default App
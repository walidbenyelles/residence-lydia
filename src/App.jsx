import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Apartments from './components/Apartments'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <div className="page-content">
        <Hero />
        <Apartments />
      </div>
    </>
  )
}

export default App
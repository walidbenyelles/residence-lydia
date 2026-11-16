
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Apartments from './components/Apartments'
import Tlemcen from './components/Tlemcen'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <div className="page-content">
        <Hero />
        <Apartments />
        <Tlemcen />
      </div>
    </>
  )
}

export default App

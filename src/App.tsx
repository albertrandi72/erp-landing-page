import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Dashboard from './features/dashboard'
import About from './features/About'
import Pricing from './features/pricing'
import Contact from './features/contact'
import Footer from './features/MainFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Dashboard />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

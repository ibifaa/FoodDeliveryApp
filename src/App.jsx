import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Listings from './sections/Listings'

function App() {
 

  return (
    <div className='main'>
     <Navbar/>
     <Hero/>
     <Listings/>
     <Footer/>
    </div>
  )
}

export default App

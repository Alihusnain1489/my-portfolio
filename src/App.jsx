import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import TopBar from "./components/TopBar"
import '../src/App.css'



function App() {


  return (
    <>
      <TopBar/>
      <Navbar/>
      <About/>
      <Skills/>
      
      <Contact/>
      <Footer/>
     
    </>
  )
}

export default App

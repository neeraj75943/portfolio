import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {
  return(
    <>
  <Navbar/>
  <HeroSection/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  </>
  )
}

export default App;

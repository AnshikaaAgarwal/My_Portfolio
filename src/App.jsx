import Achievements from "./Components/Achievements/Achievements"
import Contact from "./Components/Contact/Contact"
import Experience from "./Components/Experience/Experience"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"



function App() {


  return (
    <div className=" bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
    
  )
}

export default App

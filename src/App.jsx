import Navbar from "./components/Navbar"
import About from "./sections/About"
import Home from "./sections/Home"
import Schedule from "./sections/Schedule"
import Events from "./sections/Events"
import Footer from "./sections/Footer"


function App() {

  return (
<div className="bg-black">



<Navbar />
<Home />
<About/>
<Schedule/>
<Events/>
<Footer/>
</div>

  )
}

export default App

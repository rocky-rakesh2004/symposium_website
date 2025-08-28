import Navbar from "./components/Navbar"
import About from "./sections/About"
import Home from "./sections/Home"
import Schedule from "./sections/Schedule"
import Events from "./sections/Events"
import Register from "./sections/Register"
import Footer from "./sections/Footer"


function App() {

  return (
<div className="bg-black">



<Navbar />
<Home />
<About/>
<Events/>
<Schedule/>
<Register/>
<Footer/>
</div>

  )
}

export default App

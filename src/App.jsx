import Navbar from "./components/Navbar"
import About from "./sections/About"
import Home from "./sections/Home"
import Schedule from "./sections/Schedule"
import Events from "./sections/Events"
import Footer from "./sections/Footer"
import Staff from "./sections/Staff"
import BrochurePopup from "./sections/BrochurePopup.jsx"

function App() {

  return (
<div className="bg-black">
<BrochurePopup />
<Navbar />
<Home />
<About/>
<Schedule/>
<Events/>
<Staff/>
<Footer/>
</div>

  )
}

export default App

import Navbar from './Home/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import ABOUT from './About/About.jsx'
import Testimonials from './About/AboutCarousel.jsx'
import Services from './services/Services.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import Team from './team/Team.jsx'
import Pricing from './pricing/Pricing.jsx'
function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <ABOUT/>
     <Testimonials/>
     <Services/>
     <Portfolio/>
     <Team/>
     <Pricing/>
    </>
  )
}

export default App

import Navbar from './Home/Navbar'
import Hero from './Hero/Hero.jsx'
import ABOUT from './About/About.jsx'
import Testimonials from './About/AboutCarousel.jsx'
import Services from './services/Services.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import Team from './team/Team.jsx'
import Pricing from './pricing/Pricing.jsx'
import Questions from './questions/Questions.jsx'
import ContactSection from './contact/Contact.jsx'
import Footer from './footer/Footer.jsx'


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
     <Questions/>
     <ContactSection/>
     <Footer/>
     
     </>
     
    
  )
}

export default App

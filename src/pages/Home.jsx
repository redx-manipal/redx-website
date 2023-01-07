import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Team from "../components/Team";
import Contact from '../components/Contact';
import HeroSection from '../components/HeroSection';


function Home() {
  return (
    <div>
      <Navbar/>
      <div className="mt-14">
      <HeroSection/>
      <AboutUs/>
      <Team/>
      <Partners/>
      <Contact/>
      <Footer/>
      </div>
   
    </div>
  )
}

export default Home
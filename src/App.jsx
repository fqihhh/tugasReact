import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";
import Linkedin from "./components/linkedin/Linkedin";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Galery from "./components/galery/Galery";      
import Skill from "./components/skill/Skill";    
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react"; 

function App() {
  useEffect(() => {
 const lenis = new Lenis({
  duration: 0.28,
  easing: (t) => 1 - Math.pow(1 - t, 3), // smooooth tapi ringan
  smoothWheel: true,
  smoothTouch: true,
  wheelMultiplier: 0.8,
});


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Skill/>
      <Galery />  
      <Linkedin />
      <Footer />
    
    </> 
  );
}

export default App;
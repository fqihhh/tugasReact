import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
import Linkedin from "./components/linkedin/Linkedin";
import Footer from "./components/footer/Footer";
import Certivicate from "./components/certivicate/Certivicate";
import Galery from "./components/galery/Galery";           

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Galery />
      <Certivicate />
      <Linkedin />
      <Footer />
    
    </> 
  );
}

export default App;
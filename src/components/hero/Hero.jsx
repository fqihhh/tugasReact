import gambar1 from "../../assets/Selected.png";
import gambar2 from "../../assets/Portfolio.png";
const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">

        {/* Tahun */}
        <p className="text-gray-300 tracking-widest text-sm mb-6">
          2024 — 2025
        </p>

        {/* Selected (diganti gambar) */}
        <div className="flex justify-center mb-4 mr-55">
          <img 
            src={gambar1} 
            alt="Selected" 
            className="w-[180px] opacity-120 md:w-[300px]"
          />
        </div>

        {/* Portfolio (diganti gambar) */}
        <div className="flex justify-center mb-6">
          <img 
            src={gambar2} 
            alt="Portfolio" 
            className="w-[600px] opacity-95"
          />
        </div>

        {/* Subtext */}
        <p className="text-gray-400 text-xs tracking-widest">
          BRAND IDENTITY DESIGN | SOCIAL MEDIA DESIGN | UI/UX DESIGN | GRAPHIC DESIGN
        </p>

        <p className="text-gray-400 text-xs tracking-widest mt-3">
          PORTFOLIO BY: <span className="text-yellow-400">ARSYAD FAQIH ALHISYAMI</span>
        </p>

      </div>
    </section>
  );
};

export default Hero;
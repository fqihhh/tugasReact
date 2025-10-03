import gambar from "../../assets/download-removebg-preview.png";
const Hero = () => {
  return (
    <div className="bg-[#2D2D06] text-white">
        <section className="py-16 text-center bg-[#F5F5DC] text-black px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect with me on LinkedIn</h2>
      <p className="text-gray-700 mb-6">
        Lihat pengalaman, proyek, dan jaringan profesional saya secara lengkap di LinkedIn.  
        Mari terkoneksi dan berkolaborasi.
      </p>
      <a href="https://www.linkedin.com/in/arsyad-faqih-alhisyami-005628377/" target="_blank"
        className="bg-[#2D2D06] text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
        Visit LinkedIn
      </a>
    </section>
    </div>
  );
};

export default Hero;
import gambar from "../../assets/download-removebg-preview.png";
const Footer = () => {
  return (
    <div className="bg-[#2D2D06] text-white">
      <footer className="bg-[#2D2D06] text-gray-200">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 gap-10 md:grid-cols-5">

          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Portofolio</h2>
            <p className="text-sm leading-relaxed">
              Solusi kreatif untuk membangun website modern, cepat, dan responsif.  
              Kami percaya desain dan performa adalah kunci pengalaman digital terbaik.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Ikuti Kami</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
            <p className="text-sm mb-4">Dapatkan update proyek terbaru langsung ke email Anda.</p>
            <form className="flex flex-col sm:flex-row">
              <input type="email" placeholder="Email Anda"
                className="text-white px-4 py-2 rounded-md w-full text-black focus:outline-none mb-3 sm:mb-0 sm:rounded-l-md" />
              <button type="submit"
                className="bg-white text-[#680000] px-4 py-2 rounded-md sm:rounded-r-md hover:bg-gray-200 transition">
                Kirim
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          © <span id="year"></span> Arsyad Faqih Alhisyami. Dibuat dengan TailwindCSS.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
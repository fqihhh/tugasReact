import gambar1 from "../assets/DSC07836.JPG";
import gambar2 from "../assets/_DSC7007.JPG";
import gambar3 from "../assets/_DSC7009.JPG";
import gambar4 from "../assets/_DSC7008.JPG";
import gambar5 from "../assets/_DSC7010.JPG";
import gambar6 from "../assets/_DSC7014.JPG";
import gambar7 from "../assets/_DSC7029.JPG";
import gambar8 from "../assets/_DSC7030.JPG";
import gambar9 from "../assets/_DSC7031.JPG";
import gambar10 from "../assets/_DSC7048.JPG";
import gambar11 from "../assets/_DSC7049.JPG";
import gambar12 from "../assets/_DSC7052.JPG";
import gambar13 from "../assets/_DSC7055.JPG";
import gambar14 from "../assets/_DSC7056.JPG";
import gambar15 from "../assets/photo-1743701168206-bd617221b559.avif";


const Galery = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Galeri Foto
      </h1>
      <div className="relative max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div id="slides-gallery" className="relative w-full h-[400px]">
          <img src={gambar1} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 1" />
          <img src={gambar2} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 2" />
          <img src={gambar3} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 3" />
          <img src={gambar4} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 4" />
          <img src={gambar5} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 5" />
          <img src={gambar6} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 6" />
          <img src={gambar7} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 7" />
          <img src={gambar8} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 8" />
          <img src={gambar9} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 9" />
          <img src={gambar10} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 10" />
          <img src={gambar11} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 11" />
          <img src={gambar12} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 12" />
          <img src={gambar13} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 13" />
          <img src={gambar14} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 14" />
          <img src={gambar15} className="slide-gallery absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out" alt="Foto 15" />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-gallery w-3 h-3 rounded-full bg-white/40"></span>
        </div>
      </div>
    </section>
  );
};

export default Galery;
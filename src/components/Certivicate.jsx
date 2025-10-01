import gambar from "../assets/cert1.png";
import gambar1 from "../assets/cert2.png";
import gambar2 from "../assets/cert3.png";

const Certivicate = () => {
  return (
    <section id="certificate" className="py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Sertifikat & Pencapaian
      </h1>
      <div className="relative max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div id="slides-certificate" className="relative w-full h-[400px]">
          <img
            src={gambar}
            className="slide-certificate absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out"
            alt="Sertifikat 1"
          />
          <img
            src={gambar1}
            className="slide-certificate absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out"
            alt="Sertifikat 2"
          />
          <img
            src={gambar2}
            className="slide-certificate absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out"
            alt="Sertifikat 3"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <span className="dot-certificate w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-certificate w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot-certificate w-3 h-3 rounded-full bg-white/40"></span>
        </div>
      </div>
    </section>
  );
};

export default Certivicate;

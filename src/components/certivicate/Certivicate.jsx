import gambar from "../../assets/cert1.png";
import gambar1 from "../../assets/cert2.png";
import gambar2 from "../../assets/cert3.png";
import gambar3 from "../../assets/cert4.png";
import { useEffect } from "react";

const Certivicate = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".cert-slide");
    const dots = document.querySelectorAll(".cert-dot");
    let current = 0;

    function showSlide(index) {
      slides.forEach((s, i) => {
        s.style.opacity = i === index ? "1" : "0";
      });
      dots.forEach((d, i) => {
        d.classList.toggle("bg-gray-800", i === index);
        d.classList.toggle("bg-gray-300", i !== index);
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    showSlide(current);
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="certificate" className="py-16 bg-[#2D2D06]">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Sertifikat & Pencapaian
      </h1>

      <div className="relative max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div className="relative w-full h-[400px] bg-white">
          {[gambar, gambar1, gambar2, gambar3].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Sertifikat ${i + 1}`}
              className="cert-slide absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out opacity-0 bg-white"
            />
          ))}
        </div>

        {/* Dots formal */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="cert-dot w-3 h-3 rounded-full bg-gray-300 transition-all"
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certivicate;

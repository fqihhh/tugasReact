import { useState, useEffect } from "react";
import gambar from "../assets/cert1.png";
import gambar1 from "../assets/cert2.png";
import gambar2 from "../assets/cert3.png";

const Certivicate = () => {
  const images = [gambar, gambar1, gambar2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="certificate" className="py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Sertifikat & Pencapaian
      </h1>

      <div className="relative max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div className="relative w-full h-[400px]">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className={`slide absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                current === idx ? "opacity-100" : "opacity-0"
              }`}
              alt={`Sertifikat ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot w-3 h-3 rounded-full ${
                current === idx ? "bg-white" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certivicate;
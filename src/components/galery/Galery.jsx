import { useEffect } from "react";
import gambar1 from "../../assets/DSC07836.JPG";
import gambar2 from "../../assets/_DSC7007.JPG";
import gambar3 from "../../assets/_DSC7009.JPG";
import gambar4 from "../../assets/_DSC7008.JPG";
import gambar5 from "../../assets/_DSC7010.JPG";
import gambar6 from "../../assets/_DSC7014.JPG";
import gambar7 from "../../assets/_DSC7029.JPG";
import gambar8 from "../../assets/_DSC7030.JPG";
import gambar9 from "../../assets/_DSC7031.JPG";
import gambar10 from "../../assets/_DSC7048.JPG";
import gambar11 from "../../assets/_DSC7049.JPG";
import gambar12 from "../../assets/_DSC7052.JPG";
import gambar13 from "../../assets/_DSC7055.JPG";
import gambar14 from "../../assets/_DSC7056.JPG";
import gambar15 from "../../assets/photo-1743701168206-bd617221b559.avif";

const Galery = () => {
  const images = [
    gambar1, gambar2, gambar3, gambar4, gambar5,
    gambar6, gambar7, gambar8, gambar9, gambar10,
    gambar11, gambar12, gambar13, gambar14, gambar15,
  ];

  useEffect(() => {
    const slides = document.querySelector(".gallery-slides");
    const dots = document.querySelectorAll(".gallery-dot");
    let current = 0;

    function showSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => {
        d.classList.toggle("bg-blue-500", i === index);
        d.classList.toggle("bg-blue-200", i !== index);
        d.classList.toggle("scale-125", i === index);
      });
    }

    function nextSlide() {
      current = (current + 1) % images.length;
      showSlide(current);
    }

    showSlide(current);
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="py-16 bg-[#2D2D06] text-white">
      <h1 className="text-3xl font-bold text-center mb-8">
        Galeri Foto
      </h1>

      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
        {/* Slides wrapper */}
        <div className="gallery-slides flex transition-transform duration-700 ease-in-out w-full h-[450px]">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Foto ${i + 1}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Dots colorful */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              className="gallery-dot w-3 h-3 rounded-full bg-blue-200 transition-all duration-300"
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galery;

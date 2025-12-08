import React, { useContext } from "react";
import { LangContext } from "../../Language/Language";
import data from "../../data/Galery/Galery.json";

import gambar1 from "../../assets/z.webp";
import gambar2 from "../../assets/zz.webp";
import gambar3 from "../../assets/zzz.webp";

const Galery = () => {
  const { language } = useContext(LangContext);

  const images = [gambar1, gambar2, gambar3];

  // SAFETY ACCESS (anti-error)
  const title = data?.title?.[language] || "Gallery";
  const captions = data?.captions?.[language] || [];

  return (
    <>
      {/* Filters */}
      <style>
        {`
          .grain {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image: url("https://grainy-gradients.vercel.app/noise.webp");
            opacity: .17;
            mix-blend-mode: soft-light;
          }
          .vignette {
            position: absolute;
            inset: 0;
            pointer-events: none;
            box-shadow: inset 0 0 120px rgba(0,0,0,.6);
          }
        `}
      </style>

      <section className="bg-[#1A1817] text-[#EDE4D8] py-50 px-6 relative">
        <div className="grain"></div>
        <div className="vignette"></div>

        {/* TITLE */}
        <h1 className="text-center text-4xl font-bold tracking-[0.15em] mb-14 opacity-90">
          {title}
        </h1>

        {/* GRID */}
        <div className="
          max-w-7xl mx-auto 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-10
        ">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group rounded-xl overflow-hidden
                border border-[#4F463A]/60 
                shadow-[0_6px_25px_rgba(0,0,0,0.6)] 
                bg-[#2A2723]
                transition-all duration-700
                hover:scale-[1.02]
                hover:shadow-[0_12px_45px_rgba(0,0,0,0.8)]
                p-3"
            >

              {/* IMAGE */}
              <div className="w-full h-72 bg-[#1F1D1A] rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={src}
                  className="
                    max-w-full max-h-full object-contain 
                    sepia-[40%] brightness-[92%] contrast-[90%]
                    transition-all duration-700 ease-out
                    group-hover:sepia-[20%] group-hover:brightness-[100%]
                    group-hover:scale-[1.02]
                  "
                />
              </div>

              {/* Light leak */}
              <div className="
                absolute inset-0 
                bg-gradient-to-r from-transparent via-transparent to-[#ff8c54]/20
                opacity-0 group-hover:opacity-60
                transition-all duration-700 mix-blend-screen pointer-events-none
              "></div>

              {/* CAPTION (AUTO BAHASA, ANTI ERROR) */}
              <div className="
                absolute bottom-0 left-0 right-0
                bg-gradient-to-t from-black/60 to-transparent
                p-4 text-sm opacity-0 group-hover:opacity-100
                transition-all duration-500
              ">
                <p className="tracking-wide text-[#EDE4D8]/90">
                  {captions[i] || `Photo ${i + 1}`}
                </p>
              </div>

              <div className="grain"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Galery;

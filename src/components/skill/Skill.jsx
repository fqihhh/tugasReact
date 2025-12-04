import React from "react";
import data from "../../data/skill/skill.json";

// Manual import image agar Vite bisa bundling
import img1 from "../../assets/k.webp";
import img2 from "../../assets/b.webp";
import img3 from "../../assets/m.webp";

const imageMap = {
  "k.webp": img1,
  "b.webp": img2,
  "m.webp": img3
};

export default function MySkill() {
  return (
    <section className="w-full bg-black text-white py-50 px-6 md:px-20">

      {/* TOP IMAGES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
        {data.topImages.map((name, i) => (
          <img 
            key={i}
            src={imageMap[name]}
            className="w-full h-52 sm:h-64 object-cover"
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center">

        {/* LEFT TITLE */}
        <div className="text-left font-extrabold leading-none tracking-tight 
                        text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {data.title.map((t, i) => (
            <h1 key={i}>{t}</h1>
          ))}
        </div>

        {/* SKILL LISTS */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 lg:gap-32 mt-10 md:mt-0 
                        text-2xl sm:text-3xl font-semibold">

          <ul className="space-y-3">
            {data.skillsLeft.map((s, i) => (
              <li key={i}>- {s}</li>
            ))}
          </ul>

          <ul className="space-y-3">
            {data.skillsRight.map((s, i) => (
              <li key={i}>- {s}</li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  );
}

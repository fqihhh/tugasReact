import gambar from "../../assets/b.webp";
import gambar1 from "../../assets/k.webp";
import gambar2 from "../../assets/m.webp";
import React from "react";

export default function MySkill() {
  return (
    <section className="w-full bg-black text-white py-50 px-6 md:px-20">

  {/* TOP IMAGES */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
    <img src={gambar1} className="w-full h-52 sm:h-64 object-cover" />
    <img src={gambar} className="w-full h-52 sm:h-64 object-cover" />
    <img src={gambar2} className="w-full h-52 sm:h-64 object-cover" />
  </div>

  <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center">

    {/* LEFT TITLE */}
    <div className="text-left font-extrabold leading-none tracking-tight 
                    text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
      <h1>MY</h1>
      <h1>SKILL</h1>
    </div>

    {/* SKILL LISTS */}
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 lg:gap-32 mt-10 md:mt-0 
                    text-2xl sm:text-3xl font-semibold">

      <ul className="space-y-3">
        <li>- HTML</li>
        <li>- CSS</li>
        <li>- JAVASCRIPT</li>
        <li>- TAILWIND.CSS</li>
        <li>- REACT</li>
      </ul>

      <ul className="space-y-3">
        <li>- TINKERCAT</li>
        <li>- SCRATCH</li>
        <li>- WORDPRESS</li>
        <li>- FIGMA</li>
      </ul>

    </div>

  </div>

</section>

  );
}

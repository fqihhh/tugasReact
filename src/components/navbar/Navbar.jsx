import gambar2 from "../../assets/lgo.webp";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 md:px-20 flex items-center">
      
      {/* Logo Only */}
      <img 
        src={gambar2} 
        alt="Logo" 
        className="w-30 h-30 object-contain rounded-md ml-154"
      />

    </nav>
  );
}

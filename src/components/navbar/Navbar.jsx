import gambar2 from "../../assets/lgo.webp";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 md:px-20 flex justify-center items-center">

      {/* Center Logo with Animation */}
      <motion.img
        src={gambar2}
        alt="Logo"
        className="w-28 h-28 object-contain rounded-md"
        initial={{ opacity: 0, y: -20, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        whileHover={{
          scale: 1.08,
          rotate: 1,
          transition: { duration: 0.3 }
        }}
      />
      
    </nav>
  );
}

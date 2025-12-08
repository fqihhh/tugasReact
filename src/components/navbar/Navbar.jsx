import gambar2 from "../../assets/lgo.webp";
import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../../Language/Language.jsx";

export default function Navbar() {
  const { lang, toggleLang } = useLang();

  return (
    <nav className="bg-black text-white py-5 px-6 md:px-20 flex justify-between items-center relative">

      {/* Center Logo */}
      <motion.img
        src={gambar2}
        alt="Logo"
        className="w-28 h-28 object-contain rounded-md drop-shadow-lg mx-auto"
        initial={{ opacity: 0, y: -25, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        whileHover={{
          scale: 1.12,
          rotate: 1.5,
          filter: "drop-shadow(0px 0px 14px rgba(255,255,255,0.4))",
          transition: { duration: 0.25 }
        }}
      />

      {/* Language Switcher — pojok kanan */}
<motion.div
  onClick={toggleLang}
  className="
    absolute right-6 top-1/2 -translate-y-1/2
    w-[70px] h-[32px] rounded-full cursor-pointer
    bg-white/10 backdrop-blur-xl
    border border-white/20
    shadow-[0_0_20px_rgba(255,255,255,0.15)]
    relative flex items-center
    transition-all duration-500
  "
  whileTap={{ scale: 0.93 }}
>

  {/* LABEL LEFT */}
  <span className="
    absolute left-3 text-[10px] font-semibold tracking-wider
    text-white/60
  ">
    ID
  </span>

  {/* LABEL RIGHT */}
  <span className="
    absolute right-3 text-[10px] font-semibold tracking-wider
    text-white/60
  ">
    EN
  </span>

  {/* TOGGLE BALL */}
  <motion.div
    layout
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 22
    }}
    className="
      w-[28px] h-[28px] rounded-full
      bg-white shadow-[0_4px_15px_rgba(255,255,255,0.4)]
      absolute top-1/2 -translate-y-1/2
    "
    animate={{
      left: lang === 'id' ? 2 : 40,
    }}
  />

</motion.div>

    </nav>
  );
}

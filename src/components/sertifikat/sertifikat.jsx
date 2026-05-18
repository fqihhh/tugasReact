import React from 'react';

// Impor gambar sertifikat Anda di sini.
import htmlImg from '../../assets/HTML DASAR.jpg';
import jsImg from '../../assets/JS DASAR.jpg';
import tsImg from '../../assets/TypeScript Dasar.jpg';
import gitImg from '../../assets/Git & GitHub Dasar.jpg';

export default function Navbar(){
  // Data list sertifikat yang disesuaikan secara akurat dari gambar yang Anda unggah
  const listSertifikat = [
    {
      id: 1,
      title: "HTML Dasar",
      year: "2026",
      description: "Memahami struktur dasar halaman web, semantik elemen HTML, dan pembuatan kerangka aplikasi web yang solid.",
      imageSrc: htmlImg,
    },
    {
      id: 2,
      title: "JavaScript Dasar",
      year: "2026",
      description: "Menguasai konsep dasar pemrograman JavaScript, manipulasi DOM, logika pengkondisian, penanganan fungsi, dan asynchronous dasar.",
      imageSrc: jsImg,
    },
    {
      id: 3,
      title: "TypeScript Dasar",
      year: "2026",
      description: "Mempelajari implementasi static typing pada JavaScript untuk membangun kode yang lebih aman, scalable, dan minim bug.",
      imageSrc: tsImg,
    },
    {
      id: 4,
      title: "Git & GitHub Dasar",
      year: "2026",
      description: "Pemahaman mengenai version control system, manajemen repositori lokal dan remote, branching, serta alur kerja kolaborasi tim.",
      imageSrc: gitImg,
    },
  ];

  return (
    <section className="bg-[#0f0e0e] text-[#e5e5e5] py-20 px-4 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Judul Section Utama */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-widest text-[#f5ebd6] uppercase">
            Penghargaan
          </h2>
          <div className="w-12 h-[2px] bg-[#3a3530] mx-auto mt-4"></div>
        </div>

        {/* Grid Posisi 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {listSertifikat.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#161515] border border-[#2a2520] rounded-xl p-6 shadow-xl flex flex-col justify-between hover:border-[#4a4035] transition-all duration-300"
            >
              {/* Bingkai Desain Mini Sertifikat Internal - HANYA MENAMPILKAN GAMBAR ASLI */}
              <div className="relative w-full aspect-[16/10] bg-[#1a1919] border border-[#3a3530] rounded-lg overflow-hidden before:content-[''] before:absolute before:inset-1 before:border before:border-[#2a2520] before:rounded before:pointer-events-none mb-6">
                
                {/* GAMBAR SERTIFIKAT ASLI (Full & Bersih) */}
                <img 
                  src={item.imageSrc} 
                  alt={`Sertifikat ${item.title}`}
                  className="absolute inset-0 w-full h-full object-contain" 
                />

              </div>

              {/* Detail Keterangan di Luar Bingkai Sertifikat */}
              <div className="text-center mt-2 space-y-1">
                <h4 className="text-base font-medium text-[#e5e5e5] tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs text-[#7a7060] font-light tracking-wider">
                  {item.year}
                </p>
                <p className="text-xs text-[#b5a994] font-light max-w-sm mx-auto pt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

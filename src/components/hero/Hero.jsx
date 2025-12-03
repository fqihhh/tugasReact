import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import gambar1 from "../../assets/sl.webp";
import gambar2 from "../../assets/pf.webp";

const PortfolioPage = () => {
  const [hideSplash, setHideSplash] = useState(false);

  const splashRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const grainRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Timeline Splash
    const tl = gsap.timeline();

    // Splash fade-in + zoom
    tl.fromTo(
      splashRef.current,
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
      }
    );

    // Text fade-in stagger
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-0.6"
    );

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 0.75,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-0.7"
    );

    // Grain flicker subtle
    gsap.to(grainRef.current, {
      opacity: 0.22,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Hide splash
    setTimeout(() => {
      gsap.to(splashRef.current, {
        opacity: 0,
        scale: 0.97,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => setHideSplash(true),
      });
    }, 2300);
  }, []);

  useEffect(() => {
    if (hideSplash) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, [hideSplash]);

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">

      {/* SPLASH SCREEN */}
      {!hideSplash && (
        <div
          ref={splashRef}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#151313",
            backgroundSize: "300px",
          }}
        >
          {/* Grain Animated */}
          <div
            ref={grainRef}
            className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage: "url('https://i.ibb.co/2kH7kzf/grain.png')",
            }}
          />

          {/* Text Content */}
          <h1
            ref={titleRef}
            className="text-[#e8dfd2] font-serif text-5xl md:text-6xl tracking-widest mb-3"
          >
            PORTFOLIO
          </h1>

          <p
            ref={subtitleRef}
            className="text-[#c9bba7] font-serif text-lg md:text-xl tracking-wide"
          >
            Crafted with Identity, Vision & Direction
          </p>
        </div>
      )}

      {/* HERO SECTION */}
      {hideSplash && (
        <section
          ref={heroRef}
          className="w-full min-h-screen bg-black flex items-center justify-center px-6"
        >
          <div className="text-center">

            <p className="text-gray-300 tracking-widest text-sm mb-6">
              2025 — 2026
            </p>

            <div className="flex justify-center mb-4 mr-55">
              <img
                src={gambar1}
                alt="Selected"
                className="w-[180px] opacity-120 md:w-[300px]"
              />
            </div>

            <div className="flex justify-center mb-6">
              <img
                src={gambar2}
                alt="Portfolio"
                className="w-[600px] opacity-95"
              />
            </div>

            <p className="text-gray-400 text-xs tracking-widest">
              BRAND IDENTITY DESIGN | SOCIAL MEDIA DESIGN | UI/UX DESIGN | GRAPHIC DESIGN
            </p>

            <p className="text-gray-400 text-xs tracking-widest mt-3">
              PORTFOLIO BY: <span className="text-yellow-400">ARSYAD FAQIH ALHISYAMI</span>
            </p>

          </div>
        </section>
      )}
    </div>
  );
};

export default PortfolioPage;

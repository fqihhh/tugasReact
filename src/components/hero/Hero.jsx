import React, { useEffect, useRef, useState, useContext } from "react";
import { gsap } from "gsap";
import { LangContext } from "../../Language/Language.jsx";

import heroData from "../../data/hero/Hero.json";

import gambar1 from "../../assets/sl.webp";
import gambar2 from "../../assets/pf.webp";

const PortfolioPage = () => {
  const { t } = useContext(LangContext);
  const [hideSplash, setHideSplash] = useState(false);

  const splashRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const grainRef = useRef(null);
  const heroRef = useRef(null);

  // SPLASH ANIM
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      splashRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" }
    );

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-0.6"
    );

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 0.75, y: 0, duration: 1, ease: "power3.out" },
      "-0.7"
    );

    gsap.to(grainRef.current, {
      opacity: 0.22,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

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

  // HERO ANIM
  useEffect(() => {
    if (hideSplash) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, [hideSplash]);

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">

      {/* SPLASH */}
      {!hideSplash && (
        <div
          ref={splashRef}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#151313" }}
        >
          <div
            ref={grainRef}
            className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.15]"
            style={{ backgroundImage: "url('https://i.ibb.co/2kH7kzf/grain.png')" }}
          />

          <h1
            ref={titleRef}
            className="text-[#e8dfd2] font-serif text-5xl md:text-6xl tracking-widest mb-3"
          >
            {t(heroData.splashTitle.id, heroData.splashTitle.en)}
          </h1>

          <p
            ref={subtitleRef}
            className="text-[#c9bba7] font-serif text-lg md:text-xl tracking-wide"
          >
            {t(heroData.splashSubtitle.id, heroData.splashSubtitle.en)}
          </p>
        </div>
      )}

      {/* HERO */}
      {hideSplash && (
        <section
          ref={heroRef}
          className="w-full min-h-screen bg-black flex items-center justify-center px-6"
        >
          <div className="text-center">

            <p className="text-gray-300 tracking-widest text-sm mb-6">
              {t(heroData.year.id, heroData.year.en)}
            </p>

            <div className="flex justify-center mb-4 mr-55">
              <img src={gambar1} className="w-[180px] md:w-[300px]" />
            </div>

            <div className="flex justify-center mb-6">
              <img src={gambar2} className="w-[600px] opacity-95" />
            </div>

            <p className="text-gray-400 text-xs tracking-widest">
              {t(heroData.tagline.id, heroData.tagline.en)}
            </p>

            <p className="text-gray-400 text-xs tracking-widest mt-3">
              {t(heroData.by.id, heroData.by.en)}:{" "}
              <span className="text-yellow-400">{heroData.ownerName}</span>
            </p>

          </div>
        </section>
      )}
    </div>
  );
};

export default PortfolioPage;

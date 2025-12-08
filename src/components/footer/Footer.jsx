import { useContext } from "react";
import { LangContext } from "../../Language/Language.jsx";

const Footer = () => {
  const { t } = useContext(LangContext);

  return (
    <div className="bg-[#0E0B0C] text-white">
      <footer className="bg-[#0E0B0C] text-gray-200">
        <div className="container mx-auto px-6 py-20 grid grid-cols-1 gap-10 md:grid-cols-5">

          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("Portofolio", "Portofolio")}
            </h2>
            <p className="text-sm leading-relaxed">
              {t(
                "Solusi kreatif untuk membangun website modern, cepat, dan responsif. Kami percaya desain dan performa adalah kunci pengalaman digital terbaik.",
                "Creative solutions for building modern, fast, and responsive websites. We believe design and performance are key to the best digital experiences."
              )}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              {t("Navigasi", "Navigation")}
            </h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">{t("Beranda","Home")}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t("Tentang","About")}</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">{t("Proyek","Projects")}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t("Kontak","Contact")}</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              {t("Ikuti Kami","Follow Us")}
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              {t("Buletin","Newsletter")}
            </h3>
            <p className="text-sm mb-4">
              {t(
                "Dapatkan update proyek terbaru langsung ke email Anda.",
                "Get the latest project updates straight to your email."
              )}
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder={t("Email Anda","Your email")}
                className="text-white px-4 py-2 rounded-md w-full text-black focus:outline-none mb-3 sm:mb-0 sm:rounded-l-md"
              />
              <button
                type="submit"
                className="bg-white text-[#680000] px-4 py-2 rounded-md sm:rounded-r-md hover:bg-gray-200 transition"
              >
                {t("Kirim","Send")}
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Arsyad Faqih Alhisyami. {t("Dibuat dengan TailwindCSS.","Made with TailwindCSS.")}
        </div>
      </footer>
    </div>
  );
};

export default Footer;

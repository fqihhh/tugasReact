import gambar from "../assets/download-removebg-preview.png";
import { useEffect } from "react";

const Navbar = () => {
  const bukaMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    // Kalau nanti ada logic tambahan saat komponen mount, taruh di sini
  }, []);

  return (
    <div className="bg-[#2D2D06] text-white">
      <header className="flex justify-between items-center px-6 py-4 relative">
        <img src={gambar} alt="Logo" className="w-16 md:w-20" />
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={bukaMenu}
        >
          ☰
        </button>
        <nav
          id="menu"
          className="hidden absolute top-16 left-0 w-full bg-[#2D2D06] flex-col space-y-4 px-6 py-4 md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent"
        >
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact Us
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

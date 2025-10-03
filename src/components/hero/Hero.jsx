import gambar1 from "../../assets/apa.jpg";
const Hero = () => {
  return (
    <div className="bg-[#2D2D06] text-white">
      <section className="flex flex-col md:flex-row items-center px-6 md:px-20 py-10 md:py-20 text-center md:text-left">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Halo, Gw</h1>
          <h1 className="text-3xl md:text-5xl font-bold">Arsyad Faqih Alhisyami</h1>
          <p>ini portofolio</p>
          <button className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 rounded-lg">
            Call Me
          </button>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img src={gambar1} alt="Hero" className="w-full max-w-sm mx-auto md:max-w-md" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
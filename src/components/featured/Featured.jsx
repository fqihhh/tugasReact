import gambar from "../../assets/download-removebg-preview.png";
import gambar1 from "../../assets/bla.jpeg";
import gambar2 from "../../assets/blabla.png";
import gambar3 from "../../assets/blabli.png";
import gambar4 from "../../assets/bleble.png";
const Featured = () => {
  return (
    <div className="bg-[#2D2D06] text-white">
      <section className="px-6 md:px-20 py-10">
      <p className="mb-4 font-semibold text-white text-center md:text-left">Skill</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#F5F5DC] p-6 rounded-lg place-items-center">
        <img src={gambar1} alt="skill" className="w-20 h-20 object-contain md:w-24 md:h-24" />
        <img src={gambar2} alt="skill" className="w-20 h-20 object-contain md:w-24 md:h-24" />
        <img src={gambar3} alt="skill" className="w-20 h-20 object-contain md:w-24 md:h-24" />
        <img src={gambar4} alt="skill" className="w-20 h-20 object-contain md:w-24 md:h-24" />
      </div>
    </section>
    </div>
  );
};

export default Featured;
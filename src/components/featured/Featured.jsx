import gambar from "../../assets/gg.webp";
import gambar1 from "../../assets/g.webp";
import gambar2 from "../../assets/ggg.webp";
import gambar3 from "../../assets/pr.webp";
const Featured = () => {
  return (
       <section className="w-full min-h-screen bg-black text-white px-6 md:px-10 py-50">

  {/* Dekorasi Atas */}
  <img
    src={gambar3}
    alt="Decor"
    className="w-32 md:w-56 opacity-90 mb-10 mx-auto md:ml-40"
  />

  {/* GRID RESPONSIVE */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* LEFT COLUMN */}
    <div className="flex flex-col justify-between">

      {/* Organization */}
      <div>
        <h2 className="text-yellow-500 text-sm font-semibold mb-4">
          ORGANIZATION:
        </h2>

        <ul className="space-y-3 text-sm leading-relaxed">
          <li>OSIS BAGIAN KEBERSIHAN<br />(OSIS)</li>
          <li>STUDENTS WHO LOVE NATURE<br />(SAPALA)</li>
        </ul>
      </div>

      {/* Bottom-left image */}
      <img
        src={gambar}
        alt="Bottom Left"
        className="w-40 md:w-64 mt-10 opacity-90 mx-auto md:mx-0"
      />

      {/* Skill list */}
      <p className="text-xs tracking-wider mt-6 text-center md:text-left">
        STILL STUDENTS AT THE TAHFIZH PLUS ABU DZAR SCHOOL
      </p>

    </div>

    {/* CENTER COLUMN */}
    <div className="text-center">

      {/* Main Photo */}
      <img
        src={gambar1}
        alt="Main"
        className="w-full h-72 md:h-[420px] object-cover grayscale"
      />

      {/* Name Box */}
      <div className="bg-gray-100 text-black font-semibold py-3 tracking-widest text-base md:text-lg mt-3">
        ARSYAD FAQIH ALHISYAMI
      </div>

      {/* Contact */}
      <p className="text-xs text-gray-400 mt-3 tracking-widest break-all px-3">
        aarsyadfaqihalhisyami@gmail.com | www.linkedin.com/in/arsyad-faqih-alhisyami
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col justify-between">

      {/* Top-right image */}
      <img
        src={gambar2}
        alt="Top Right"
        className="w-40 md:w-64 mb-8 opacity-80 mx-auto md:mx-0"
      />

      <div>

        {/* Portfolio by */}
        <h2 className="text-gray-300 text-sm">PORTFOLIO BY :</h2>

        <p className="mt-3 text-sm">
          NICKNAME : <span className="text-yellow-400">ARSYAD</span>
        </p>

        <p className="text-sm leading-relaxed mt-4">
          ARSYAD IS A GRAPHIC DESIGNER WHO FOCUS ON CREATING CLEAR, ENGAGING,
          AND VISUALLY CONSISTENT DESIGNS ACROSS VARIOUS MEDIA.
        </p>

        {/* Education */}
        <h2 className="text-yellow-500 text-sm font-semibold mt-6">
          EDUCATION :
        </h2>

        <ul className="text-sm mt-3 space-y-3">
          <li>ABU DZAR TAHFIZH HIGH SCHOOL |<br />(TAHFIZH AND IT)</li>
        </ul>
      </div>

    </div>

  </div>

</section>

  );
};

export default Featured;
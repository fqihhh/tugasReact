import { useContext } from "react";
import { LangContext } from "../../Language/Language.jsx";
import LinkedinData from "../../data/Linkedin/Linkedin.json";

const Linkedin = () => {
  const { t } = useContext(LangContext);

  return (
    <div className="bg-[#0E0B0C] text-white w-full    rounded-lg shadow-lg mx-auto">
      <section className="py-20 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t(LinkedinData.title.id, LinkedinData.title.en)}
        </h2>
        <p className="mb-6">
          {t(LinkedinData.description.id, LinkedinData.description.en)}
        </p>
        <a
          href={LinkedinData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300"
        >
          {t(LinkedinData.buttonText.id, LinkedinData.buttonText.en)}
        </a>
      </section>
    </div>
  );
};

export default Linkedin;

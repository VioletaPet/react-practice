import { RevealEffect } from "../RevealEffect";
import Photo from "../../assets/Photo.png";

export const Home = () => {

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  };

  const handleCVDownload = () => {
    window.open('/LibbeyDownloadLink.pdf', '_blank');
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealEffect>
        <div className="text-center z-10 px-4">
          <img
          src={Photo}
          alt="Picture of Violeta"
          className="w-70 h-70 md:w-70 md:h-70 rounded-full mx-auto mb-6 shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Violeta Petkovic
          </h1>

          <p className="text-gray-600 text-xl mb-8 max-w-lg mx-auto">
            Junior full-stack developer that brings a unique resourcefulness from a diverse background including project management and leadership
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleNavigation('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium hover:scale-110 transition-all duration-300"
            >
              View Projects
            </button>

            <button
              onClick={handleCVDownload}
              className="border border-blue-500 text-purple-600 py-3 px-6 rounded font-medium hover:scale-110 transition-all duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </RevealEffect>
    </section>
  );
};

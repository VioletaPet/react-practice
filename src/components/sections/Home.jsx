import { useState, useEffect } from "react";
import { RevealEffect } from "../RevealEffect";
import Photo from "../../assets/Photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


export const Home = () => {

  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);


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

      {showArrow && (
        <div className="absolute bottom-10 text-center transform translate-x-0.5 animate-bounce transition-all ease-out">
          <FontAwesomeIcon icon={faArrowDown} className='text-3xl text-gray-400' />
        </div>
      )}
    </section>
  );
};

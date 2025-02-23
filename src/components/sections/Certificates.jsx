import React, { useState, useEffect } from 'react';
import { ChevronLeft ,ChevronRight } from 'lucide-react';

export const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      logo: "https://media.licdn.com/dms/image/v2/C560BAQG3UxM6HRXqgg/company-logo_200_200/company-logo_200_200/0/1654689161165/le_wagon_germany_logo?e=2147483647&v=beta&t=TiBYLvSC5pbMgUcBffwqDbroRA1o2DF61NHeFMrdhJ4",
      insitution: "Le Wagon",
      name: "Certified Full Stack Web Developer",
      year: "2024/25",
      alt: "Le Wagon Logo"
    },
    {
      logo: "https://www.lippewelle.de/externalimages/?source=jpg48/logo-ihk-1.jpg&crop=503x0x517x517&resize=517x517&dt=201903171223270",
      insitution: "Chamber of Industry and Commerce (IHK)",
      name: "Level D Certified Project Management Associate",
      year: "2023",
      alt: "IHK Logo"
    },
    {
      logo: "https://www.lippewelle.de/externalimages/?source=jpg48/logo-ihk-1.jpg&crop=503x0x517x517&resize=517x517&dt=201903171223270",
      insitution: "Chamber of Industry and Commerce (IHK)",
      name: "Specialist for Rhethoric and Communication",
      year: "2024",
      alt: "IHK Logo"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? certificates.length - 1 : prev -1));
  };

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);



  return (
    <section id="certifications" className="relative w-full max-w-4xl mx-auto my-14 px-14 md:px-16">
      <div className="relative h-[400px] w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
          Certificates
        </h2>
        <div className="relative h-full flex items-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white shadow-lg rounded-lg p-8 md:p-6 mx-auto w-full h-[250px] flex flex-col items-center justify-center gap-4">
                <img
                  src={cert.logo}
                  alt={cert.alt}
                  className="w-20 h-20 md:w-16 md:h-16 object-cover rounded-lg"
                />
                <h3 className="text-2xl md:text-xl font-bold uppercase text-center text-gray-800">
                  {cert.institution}
                </h3>
                <p className="text-lg md:text-base text-center text-gray-600">
                  {cert.name}
                </p>
                <p className="text-base md:text-sm italic text-center text-gray-500">
                  {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-14"
        >
          <ChevronLeft className="w-8 h-8 text-gray-700" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-14"
        >
          <ChevronRight className="w-8 h-8 text-gray-700" />
          <span className="sr-only">Next</span>
        </button>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates

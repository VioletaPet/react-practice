import { RevealEffect } from "../RevealEffect";
import { Link } from "react-router-dom";
import StreamCaddyThumbnail from "../../assets/StreamCaddyThumbnail.png";
import RentaPetThumbnail from "../../assets/RentaPetThumbnail.png";
import WebsiteMakeover from "../../assets/WebsiteMakeover.png";
import PortfolioThumbnail from "../../assets/PortfolioThumbnail.png";

export const Projects = () => {

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealEffect>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-6 rounded-xl border border-black/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <img
                src={WebsiteMakeover}
                alt="Website Makeover Thumbnail"
                className="w-80 h-auto md:w-80 md:h-40 mx-auto mb-6 rounded filter grayscale transition duration-300 group-hover:filter-none"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-600">
                Website Makeover
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Redesigning and modernizing a friend’s website to enhance its functionality, user experience, and visual appeal while applying and expanding my web development skills
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "React"].map((tech, key) => (
                  <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-md"
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/VioletaPet/website-makeover" className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium filter grayscale transition-all duration-300 group-hover:filter-none hover:scale-110">
                  View Code
                </a>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-black/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <img
                src={PortfolioThumbnail}
                alt="Portfolio Thumbnail"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded filter grayscale transition duration-300 group-hover:filter-none"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-600">
                Portfolio
              </h3>
              <p className="text-gray-600 mb-4">
                Built with React, this portfolio project allowed me to explore a new framework, expand development knowledge and showcase my technical skills through hands-on practice and a responsive environment
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "Tailwind CSS", "JavaScript", "React"].map((tech, key) => (
                  <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 mx-1 my-1 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/VioletaPet/react-practice" className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium filter grayscale transition-all duration-300 group-hover:filter-none hover:scale-110">
                  View Code
                </a>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-black/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <img
                src={StreamCaddyThumbnail}
                alt="StreamCaddy Thumbnail"
                className="w-50 h-auto md:w-40 md:h-40 mx-auto mb-6 rounded filter grayscale transition duration-300 group-hover:filter-none"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-600 ">
                StreamCaddy
              </h3>
              <p className="text-gray-600 mb-4">
                An innovative mobile app that simplifies subscription management for streamers, helping users track services, avoid unnecessary expenses and enhance their viewing experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Ruby on Rails", "Heroku", "Cloudinary", "TMDB API", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 mx-1 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-10 items-center">
                <a href="https://github.com/VioletaPet/StreamCaddy" className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium filter grayscale transition-all duration-300 group-hover:filter-none hover:scale-110">
                  View Code
                </a>
                <Link to="/projects/StreamCaddy" className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium filter grayscale transition-all duration-300 group-hover:filter-none hover:scale-110">
                  Details
                </Link>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-black/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <img
                src={RentaPetThumbnail}
                alt="RentaPet Thumbnail"
                className="w-100 h-auto md:w-80 md:h-40 mx-auto mb-6 rounded filter grayscale transition duration-300 group-hover:filter-none"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-600">
                RentaPet
              </h3>
              <p className="text-gray-600 mb-4">
                An Airbnb-style platform that connects pet lovers by enabling users to rent pets, featuring detailed listings, location mapping, user reviews and filtering options for an easy and engaging experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Ruby on Rails", "Heroku", "Cloudinary", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-10 items-center">
                <a href="https://github.com/jameshwood/rent_a_pet" className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium filter grayscale transition-all duration-300 group-hover:filter-none hover:scale-110">
                  View Code
                </a>
                <Link to="/projects/RentaPet" className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium filter grayscale transition-all duration-300 group-hover:filter-none hover:scale-110">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RevealEffect>
    </section>
  )
}

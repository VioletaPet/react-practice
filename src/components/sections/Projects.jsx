import { RevealEffect } from "../RevealEffect"
import { Link } from "react-router-dom"

export const Projects = () => {

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealEffect>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                StreamCaddy
              </h3>
              <p className="text-gray-400 mb-4">
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
              <div className="flex justify-between items-center">
                <a href="https://github.com/VioletaPet/StreamCaddy" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Code
                </a>
                <Link to="/projectPages/StreamCaddy">Details</Link>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                RentaPet
              </h3>
              <p className="text-gray-400 mb-4">
                An Airbnb-style platform that connects pet lovers by enabling users to rent pets, featuring detailed listings, location mapping, user reviews and filtering options for an easy and engaging experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Ruby on Rails", "Heroku", "Cloudinary", "TMDB API", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/jameshwood/rent_a_pet" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Code
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Portfolio
              </h3>
              <p className="text-gray-400 mb-4">
                Built with React.js, this portfolio project allowed me to explore a new framework, expand development knowledge and showcase my technical skills through hands-on practice and a responsive environment
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "Tailwind CSS", "JavaScript", "React.js", "API"].map((tech, key) => (
                  <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 mx-1 my-1 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/VioletaPet/react-practice" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Code
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Website Makeover
              </h3>
              <p className="text-gray-400 mb-4">
                Redesigning and modernizing a friend’s website to enhance its functionality, user experience, and visual appeal while applying and expanding my web development skills
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "Tailwind CSS", "JavaScript", "React.js"].map((tech, key) => (
                  <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {/* <a href="https://github.com/jameshwood/rent_a_pet" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Code
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </RevealEffect>
    </section>
  )
}

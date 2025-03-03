import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/PortfolioLogo.png";

export const Navbar = ({menuOpen, setMenuOpen}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavigation = (sectionId) => {
    if (!isHomePage) {
      navigate('/');

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // disable scrolling while user has mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-black/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {isHomePage ? (
            <button
              onClick={() => handleNavigation('home')}
              className="focus:outline-none"
            >
              <img src={logo} alt="Logo" className="h-12" />
            </button>
          ) : (
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
          )}

          {isHomePage && (
            <div className="w-7 h-5 text-black text-xl relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
              &#9776;
            </div>
          )}

          {isHomePage && (
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('home')}
                className="text-lg text-gray-600 hover:text-purple-500 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-lg text-gray-600 hover:text-purple-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('skills')}
                className="text-lg text-gray-600 hover:text-purple-500 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => handleNavigation('projects')}
                className="text-lg text-gray-600 hover:text-purple-500 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation('certifications')}
                className="text-lg text-gray-600 hover:text-purple-500 transition-colors"
              >
                Certifications
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="text-lg text-gray-600 hover:text-purple-500 transition-colors"
              >
                Contact
              </button>
            </div>
          )}

          {!isHomePage && (
            <Link to="/" className="text-lg text-gray-700 hover:text-purple-500 transition-colors">
              ← Back to Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

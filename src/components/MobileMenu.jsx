import { useNavigate, useLocation } from "react-router-dom";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);

    if (!isHomepage) {
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

  if (!menuOpen) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-blue-400 to-purple-400 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}>
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu">
        &times;
      </button>

      <button
        onClick={() => handleNavigation('home')}
        className={`text-2xl text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Home
      </button>
      <button
        onClick={() => handleNavigation('about')}
        className={`text-2xl text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        About
      </button>
      <button
        onClick={() => handleNavigation('skills')}
        className={`text-2xl text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Skills
      </button>
      <button
        onClick={() => handleNavigation('projects')}
        className={`text-2xl text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Projects
      </button>
      <button
        onClick={() => handleNavigation('certifications')}
        className={`text-2xl text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Certifications
      </button>
      <button
        onClick={() => handleNavigation('contact')}
        className={`text-2xl text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Contact
      </button>
    </div>
  );
};

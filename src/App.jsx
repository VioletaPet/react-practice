import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'

// imports components
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';

// importing separate project page components
import { StreamCaddy } from './components/projects/StreamCaddy';
import { RentaPet } from './components/projects/RentaPet';


function App() {
  // code to clear up text once it's done loading
  // create state that tracks whether text is still shown
  const [isLoaded, setIsLoaded] = useState(false);

  // display mobile menu when mobile screen
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* only show loading screen if isLoaded is false (when text is still being generated) */}
      {/* callback function what happens once isLoaded=true */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* div with all content after the loading screen, navbar, etc */}
      {/* inject JavaScript in className -> Boolean whether isLoaded is true */}
      <Router>
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-blue text-gray-100`}>

          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
              </>
            } />
            <Route path="/projects/StreamCaddy" element={<StreamCaddy />}/>
            <Route path="/projects/RentaPet" element={<RentaPet />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

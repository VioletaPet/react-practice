import { useState } from 'react';
import './App.css';
import './index.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { SoftSkills } from './components/sections/SoftSkills';
import { Projects } from './components/sections/Projects';


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
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-#501E64 text-gray-100`}>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home/>
        <About/>
        <Skills/>
        <SoftSkills/>
        <Projects/>
      </div>
    </>
  );
}

export default App;

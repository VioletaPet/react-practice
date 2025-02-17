import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"

function App() {
  // code to clear up text once it's done loading
  // create state that tracks whether text is still shown
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {/* only show loading screen if isLoaded is false (when text is still being generated) */}
      {/* callback function what happens once isLoaded=true */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    </>
  );
}

export default App;

// A SEPARATE COMPONENT CALLED IN THE APP.JSX

import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {

  // keeps track of length of txt displayed in screen
  // useState hook tracks state in a function component
  // left value (text) = current state, right value (setText) = function that is used to update the state
  const [text, setText] = useState("");
  const fullText = "Hello there!";

  // useEffect hook that runs code after component is rendered
  useEffect(() => {

    // keep track of index which letter of the text is currently being displayed
    let index = 0;
    const interval = setInterval(() => {

      // takes part of the full text from the start (0) up to current index
      // each time the code runs, index increases by 1
      setText(fullText.substring(0, index));
      index++;

      // once text is full, index is higher then fulltext, the interval should be cleared
      if (index > fullText.length) {
        clearInterval(interval)

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    // stops interval when component is no longer displayed
    // setInterval keeps running code every 100ms forever, unless its stopped
    return () => clearInterval(interval)
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

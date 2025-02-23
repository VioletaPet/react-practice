import { useEffect, useRef } from "react";

export const RevealEffect = ({children}) => {

  const reference = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reference.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (reference.current) sectionObserver.observe(reference.current);

    return () => sectionObserver.disconnect();
  },);

  return (
    <div ref = {reference} className="reveal">
      {children}
    </div>
  )
}

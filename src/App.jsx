import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import { useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    let lenis;
    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        console.warn("Lenis not available, using native scroll");
      }
    };

    if (!isLoading) {
      initLenis();
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="noise-overlay">
      <Preloader onComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <Navbar />
          <main ref={mainRef} className="flex flex-col">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
};

export default App;

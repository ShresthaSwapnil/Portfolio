import { MotionConfig } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Convergence from "./components/Convergence";
import Work from "./components/Work";
import Chronicle from "./components/Chronicle";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import ChapterHUD, { AmbientGlow } from "./components/ChapterHUD";
import { AmbientProvider, setLenis, useActiveChapter, usePrefersReducedMotion } from "./lib/interaction";

const App = () => {
  const [introDone, setIntroDone] = useState(false);
  const [ambient, setAmbient] = useState(null);
  const reducedMotion = usePrefersReducedMotion();
  const activeChapter = useActiveChapter();

  // Smooth scroll. Starts immediately; the page is never unmounted behind the intro.
  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(lenis);
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, [reducedMotion]);

  // The mood only belongs to the exhibits; everywhere else it fades out.
  const glow = activeChapter === "work" ? ambient : null;
  const ambientValue = useMemo(() => ({ color: ambient, setColor: setAmbient }), [ambient]);

  return (
    <MotionConfig reducedMotion="user">
      <AmbientProvider value={ambientValue}>
        <div className="noise-overlay">
          <a
            href="#convergence"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-full focus:bg-primary focus:text-bg"
          >
            Skip to content
          </a>
          <Preloader onDone={() => setIntroDone(true)} />
          <AmbientGlow color={glow} />
          <Navbar />
          <main className="relative z-10">
            <Hero ready={introDone} />
            <Convergence />
            <Work />
            <Chronicle />
            <Contact />
          </main>
          <ChapterHUD active={activeChapter} />
        </div>
      </AmbientProvider>
    </MotionConfig>
  );
};

export default App;

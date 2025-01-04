import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MouseTracker from "./components/MouseTracker";
import Footer from "./components/Footer";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  if (isMobile) {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar />
        <div className="flex flex-col">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
        <motion.div className="fixed bottom-0 left-0 right-0 h-1 bg-blue-600/20">
          <motion.div
            className="h-full bg-green-600"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "0%",
            }}
          />
        </motion.div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen relative">
      <Navbar />
      <MouseTracker />

      <section ref={targetRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <Home />
            <About />
            <Projects />
            <Contact />
          </motion.div>
        </div>
      </section>

      <motion.div className="fixed bottom-0 left-0 right-0 h-1 bg-blue-600/20 z-50">
        <motion.div
          className="h-full bg-green-600"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "0%",
          }}
        />
      </motion.div>
      <Footer />
    </div>
  );
};

export default App;

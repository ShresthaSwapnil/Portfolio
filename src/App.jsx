import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MouseTracker from "./components/MouseTracker";
import Footer from "./components/Footer";

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    visible && (
      <motion.div
        className="fixed bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-gray-600 dark:text-gray-300 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.p
          className="text-sm font-medium uppercase tracking-wider"
          animate={{ x: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Scroll to explore
        </motion.p>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ x: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M1 8H15M15 8L8 1M15 8L8 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    )
  );
};

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
      <ScrollIndicator />

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

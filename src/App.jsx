import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MouseTracker from "./components/MouseTracker";

const App = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

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

      {/* Bottom Progress Bar */}
      <motion.div className="fixed bottom-0 left-0 right-0 h-1 bg-green-600/20">
        <motion.div
          className="h-full bg-green-600"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "0%",
          }}
        />
      </motion.div>
    </div>
  );
};

export default App;

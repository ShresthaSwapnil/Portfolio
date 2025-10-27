import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Designing interfaces that think, not just look.",
    "Building meaningful experiences through code and creativity.",
    "Blending design, development, and intelligent automation.",
    "Transforming ideas into interactive, AI-powered products.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section
      id="home"
      className="w-screen h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-green-700 dark:text-green-500">
            Swapnil Shrestha
          </span>
        </motion.h1>

        <div className="h-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTitle}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              I am {titles[currentTitle]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/SwapnilCV.pdf"
            target="_blank"
            className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors inline-block cursor-pointer"
          >
            Preview CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

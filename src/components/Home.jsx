import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "a Web Developer",
    "a UI/UX Designer",
    "a Problem Solver",
    "an Innovation Enthusiast",
  ];

  const socials = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/ShresthaSwapnil",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/swapnil-shrestha-b5792925b/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/shresthaswapnil/",
      label: "Instagram",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:shresthaswapnil03@gmail.com",
      label: "Email",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-screen h-screen flex items-center justify-center p-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I'm{" "}
          <span className="text-green-600 dark:text-green-400">
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

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 mt-8 mb-8"
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            onClick={() => {
              window.scrollTo(0, window.innerHeight * 3);
            }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-block cursor-pointer"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-light dark:bg-dark transition-colors duration-300"
    >
      {/* Background Watermark - Namaste in Nepali */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.03] dark:opacity-[0.02]">
        <span className="font-nepali text-[20rem] md:text-[30rem] lg:text-[40rem] text-slate-900 dark:text-white leading-none whitespace-nowrap">
          gd:t]
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-serif italic text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-6">
            Namaste, I am
          </p>

          <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl text-slate-900 dark:text-slate-100 mb-8 tracking-tight">
            Swapnil Shrestha
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-12">
            <span>Mobile Developer</span>
            <span className="hidden md:inline w-2 h-2 bg-rose-500 rounded-full"></span>
            <span>UX Designer</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group relative cursor-pointer px-8 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-medium transition-transform hover:-translate-y-1"
            >
              View Selected Work
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer font-serif italic text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors border-b border-rose-500/0 hover:border-rose-500/50"
            >
              Get in touch &rarr;
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-slate-300 dark:bg-slate-700 overflow-hidden">
          <motion.div
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-rose-500"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

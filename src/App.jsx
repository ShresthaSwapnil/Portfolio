import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* The progress bar stays on top of everything. */}
      <motion.div className="fixed bottom-0 left-0 right-0 h-1 bg-transparent z-20">
        <motion.div
          className="h-full bg-green-500"
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

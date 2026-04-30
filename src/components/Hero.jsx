import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleOut = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
  const nepaliScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const nepaliOpacity = useTransform(scrollYProgress, [0, 0.5], [0.04, 0]);

  const titleWords = "Swapnil Shrestha".split("");

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1, // Minimal initial delay
        staggerChildren: 0.1, // Faster stagger between sections
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03, // Fast letter-by-letter reveal
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Background Nepali watermark — parallax */}
      <motion.div
        style={{ scale: nepaliScale, opacity: nepaliOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-nepali text-[18rem] md:text-[30rem] lg:text-[42rem] leading-none whitespace-nowrap"
          style={{ color: "var(--color-text)" }}
        >
          gd:t]
        </span>
      </motion.div>

      {/* Main content wrapped in stagger container */}
      <motion.div
        style={{ y: nameY, opacity: opacityOut, scale: scaleOut }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-lg md:text-xl mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Namaste, I am
        </motion.p>

        {/* Name — letter-by-letter reveal */}
        <motion.h1
          variants={titleVariants}
          className="text-display font-sans font-bold tracking-tight mb-6"
          style={{ color: "var(--color-text)" }}
        >
          {titleWords.map((letter, i) => {
            if (letter === " ") {
              return (
                <span key={i}>
                  <span className="hidden md:inline-block">&nbsp;</span>
                  <br className="block md:hidden" />
                </span>
              );
            }
            return (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Role titles */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:gap-x-5 mb-10"
        >
          {[
            "Full-Stack Engineer",
            "AI-Augmented Builder",
            "Visual Storyteller",
            "Content Designer",
          ].map((title, i) => (
            <span key={title} className="flex items-center gap-3 md:gap-5">
              <span
                className="text-sm md:text-base font-light tracking-wide"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {title}
              </span>
              {i < 3 && (
                <span
                  className="w-1 h-1 rounded-full hidden sm:block"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              )}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-lg md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Building the bridge between code, creativity & intelligence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-[0.12em] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-text)",
              color: "var(--color-bg)",
            }}
          >
            <span className="relative z-10">View Selected Work</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-serif italic text-base transition-colors duration-300 hover:text-accent group"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Get in touch
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
        style={{ opacity: opacityOut }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{ color: "var(--color-text-muted)" }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-12 overflow-hidden"
          style={{ backgroundColor: "var(--color-border)" }}
        >
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-1/3"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

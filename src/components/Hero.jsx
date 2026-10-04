import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { profile } from "../data/content";
import { scrollToId, useKathmanduClock } from "../lib/interaction";
import { Magnetic, RollText } from "./ui";

const ease = [0.16, 1, 0.3, 1];
const disciplines = ["Artificial Intelligence", "Design", "Digital Content", "Technology", "Business", "Visual Storytelling"];

const StatusHUD = ({ ready }) => {
  const { time, awake } = useKathmanduClock();
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={ready ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.9, ease }}
      className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted"
    >
      <span className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className={`absolute inline-flex h-full w-full rounded-full opacity-60 ${awake ? "animate-ping bg-emerald-500" : "bg-amber-400"}`} />
          <span className={`relative inline-flex h-2 w-2 rounded-full ${awake ? "bg-emerald-500" : "bg-amber-400"}`} />
        </span>
        {awake ? "Awake & building" : "Recharging"}
      </span>
      <span>
        Kathmandu <span className="text-primary">{time}</span> NPT
      </span>
      <span className="hidden sm:inline">{profile.coords}</span>
    </motion.div>
  );
};

const Hero = ({ ready }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const watermarkScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  // Pointer parallax on the watermark
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const wx = useSpring(px, { stiffness: 40, damping: 20 });
  const wy = useSpring(py, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      px.set((e.clientX / window.innerWidth - 0.5) * -40);
      py.set((e.clientY / window.innerHeight - 0.5) * -24);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py]);

  const [first, last] = profile.name.split(" ");

  return (
    <section
      id="hero"
      ref={ref}
      data-chapter="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Devanagari watermark: real Unicode text, decorative only */}
      <motion.div
        aria-hidden="true"
        style={{ x: wx, y: wy, scale: watermarkScale, opacity: fade }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 0.05 } : {}}
          transition={{ duration: 2, delay: 0.3 }}
          className="font-nepali font-bold text-[42vw] md:text-[32vw] leading-none whitespace-nowrap text-primary"
        >
          {profile.greeting}
        </motion.span>
      </motion.div>

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl w-full mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-10">
        <StatusHUD ready={ready} />

        <motion.div style={{ y: nameY, opacity: fade }} className="flex-1 flex flex-col justify-center py-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-serif italic text-xl md:text-2xl text-secondary mb-4"
          >
            <span className="font-nepali not-italic">{profile.greeting}</span>, I am
          </motion.p>

          <h1 className="text-mega font-sans font-semibold text-primary" aria-label={profile.name}>
            {[first, last].map((word, wi) => (
              <span key={word} className="block overflow-hidden pb-[0.04em]" aria-hidden="true">
                <motion.span
                  className={`block ${wi === 1 ? "md:pl-[12vw]" : ""}`}
                  initial={{ y: "105%" }}
                  animate={ready ? { y: "0%" } : {}}
                  transition={{ duration: 1.2, delay: 0.15 + wi * 0.12, ease }}
                >
                  {word}
                  {wi === 1 && <span className="text-accent">.</span>}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="md:col-span-6 text-2xl md:text-[2.1rem] font-serif leading-[1.2] text-primary"
            >
              A {profile.title.toLowerCase()} building where{" "}
              <em className="text-accent">code</em>, <em>craft</em> &amp; <em>intelligence</em> meet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.7, ease }}
              className="md:col-span-6 flex flex-wrap items-center gap-4 md:justify-end"
            >
              <Magnetic>
                <button
                  onClick={() => scrollToId("convergence")}
                  className="group relative inline-flex items-center gap-3 rounded-full bg-primary text-bg px-7 py-4 text-[12px] font-medium uppercase tracking-[0.16em] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo" />
                  <span className="relative">
                    <RollText>Begin the story</RollText>
                  </span>
                  <span className="relative transition-transform duration-500 group-hover:translate-y-0.5">↓</span>
                </button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <button
                  onClick={() => scrollToId("work")}
                  className="group px-2 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-secondary"
                >
                  <RollText>Skip to work →</RollText>
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Discipline marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.1, duration: 1 }}
        className="relative z-10 border-y border-border py-4 overflow-hidden"
        aria-hidden="true"
      >
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {[...disciplines, ...disciplines, ...disciplines, ...disciplines].map((d, i) => (
            <span key={i} className="flex items-center gap-10 font-serif italic text-2xl md:text-3xl text-secondary">
              {d}
              <span className="text-accent not-italic text-base">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

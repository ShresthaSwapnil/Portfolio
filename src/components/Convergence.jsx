import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile, stats, stories, systems } from "../data/content";
import { ChapterLabel, MaskLines } from "./ui";

const ease = [0.16, 1, 0.3, 1];

/* ---------- Scroll-scrubbed manifesto: words ink in as you read ---------- */

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const Manifesto = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = profile.manifesto.split(" ");

  return (
    <p ref={ref} className="text-[1.7rem] md:text-[2.6rem] lg:text-[3.1rem] font-serif leading-[1.18] text-primary max-w-5xl">
      <span className="sr-only">{profile.manifesto}</span>
      <span aria-hidden="true">
        {words.map((w, i) => {
          const start = i / words.length;
          const highlight = /700\+|10\+|AI|Craft/.test(w);
          return (
            <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
              {highlight ? <em className="text-accent">{w}</em> : w}
            </Word>
          );
        })}
      </span>
    </p>
  );
};

/* ---------- Systems ⇄ Stories split ---------- */

const Column = ({ eyebrow, title, items, tone }) => (
  <div className="absolute inset-0 p-7 md:p-10 flex flex-col">
    <p className={`font-mono text-[10px] uppercase tracking-[0.3em] ${tone === "dark" ? "opacity-60" : "text-muted"}`}>
      {eyebrow}
    </p>
    <h3 className="mt-3 text-4xl md:text-5xl font-serif">{title}</h3>
    <ul className="mt-auto flex flex-wrap gap-2 max-w-md">
      {items.map((s) => (
        <li
          key={s}
          className={`px-3 py-1.5 rounded-full text-xs border ${
            tone === "dark" ? "border-white/15 text-white/80 dark:border-black/15 dark:text-black/75" : "border-border text-secondary"
          }`}
        >
          {s}
        </li>
      ))}
    </ul>
  </div>
);

const DualBrain = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const split = useMotionValue(50);
  const [value, setValue] = useState(50);
  const clip = useTransform(split, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(split, (v) => `${v}%`);

  useMotionValueEvent(split, "change", (v) => setValue(Math.round(v)));

  // A one-time "wiggle" hint so people discover the handle
  useEffect(() => {
    if (!inView) return;
    const controls = animate(split, [50, 30, 70, 50], { duration: 2.2, ease: "easeInOut", delay: 0.4 });
    return () => controls.stop();
  }, [inView, split]);

  return (
    <div ref={ref}>
      <div className="relative h-[460px] md:h-[520px] rounded-sm overflow-hidden bg-surface border border-border select-none">
        {/* Right layer: Stories */}
        <div className="absolute inset-0 text-primary">
          <div className="absolute inset-0 flex justify-end">
            <div className="w-full">
              <Column eyebrow="Right brain · the feeling" title={<>Stories<em className="text-accent">.</em></>} items={stories} tone="light" />
            </div>
          </div>
        </div>

        {/* Left layer: Systems, clipped by the split */}
        <motion.div style={{ clipPath: clip }} className="absolute inset-0 bg-primary text-bg">
          <Column eyebrow="Left brain · the logic" title={<>Systems<em className="text-accent">.</em></>} items={systems} tone="dark" />
        </motion.div>

        {/* Handle */}
        <motion.div style={{ left: handleLeft }} className="absolute top-0 bottom-0 w-px bg-accent pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </div>
        </motion.div>

        {/* Native range = free drag, touch and keyboard support */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => split.set(Number(e.target.value))}
          aria-label="Balance between systems and stories"
          aria-valuetext={`${value}% systems, ${100 - value}% stories`}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>

      <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
        <span>Systems {value}%</span>
        <span className="hidden sm:inline">Drag to rebalance. Every project needs both.</span>
        <span>Stories {100 - value}%</span>
      </div>
    </div>
  );
};

/* ---------- Count-up stats ---------- */

const Stat = ({ value, suffix, label, decimals = 0, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.08, ease }}
      className="py-8 md:py-10 border-t border-border"
    >
      <p className="text-5xl md:text-6xl font-serif text-primary tabular-nums">
        {display.toFixed(decimals)}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{label}</p>
    </motion.div>
  );
};

/* ---------- Act ---------- */

const Convergence = () => {
  const portraitRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: portraitRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="convergence" data-chapter="convergence" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ChapterLabel index="01" label="The Convergence" className="mb-16 md:mb-24" />

        <Manifesto />

        <div className="mt-28 md:mt-40 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              ref={portraitRef}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.3, ease }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <motion.img
                style={{ y: imgY, scale: 1.18 }}
                src="/images/swapnil-suit.jpg"
                alt="Portrait of Swapnil Shrestha"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-[filter] duration-700"
              />
            </motion.div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Based in</p>
                <p className="font-serif italic text-xl text-primary">{profile.location}</p>
              </div>
              <p className="font-nepali text-3xl text-accent leading-none">{profile.nameNepali}</p>
            </div>
          </div>

          {/* Split + copy */}
          <div className="lg:col-span-8">
            <MaskLines
              lines={["Two halves,", <em key="e">one practice.</em>]}
              className="text-headline text-primary mb-8"
            />
            <p className="text-base md:text-lg font-light leading-[1.8] text-secondary max-w-2xl mb-12">
              My work moves between code (Flutter, FastAPI, Next.js, local LLMs) and content (700+ creatives,
              festival campaigns, race-day documentary). Most teams split those jobs across two people. I bring
              both halves into the same room, so the AI is useful <em>and</em> the experience feels intentional.
            </p>
            <DualBrain />
          </div>
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-x-8">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Convergence;

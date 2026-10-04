import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile, socials } from "../data/content";
import { scrollToId, useCopy, useKathmanduClock } from "../lib/interaction";
import { ChapterLabel, Magnetic, RollText } from "./ui";

const ease = [0.16, 1, 0.3, 1];

const Contact = () => {
  const ref = useRef(null);
  const { copied, copy } = useCopy();
  const { time, awake } = useKathmanduClock();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const thanksY = useTransform(scrollYProgress, [0.4, 1], ["40%", "0%"]);
  const thanksOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <section
      id="contact"
      ref={ref}
      data-chapter="contact"
      className="relative overflow-hidden bg-primary text-bg"
    >
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="opacity-70 [&_.labeled-divider::after]:bg-current [&_.labeled-divider::after]:opacity-20">
            <ChapterLabel index="04" label="Epilogue" className="mb-16 md:mb-24" />
          </div>

          <h2 className="text-display">
            {["The next chapter", "could be ours."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, delay: i * 0.1, ease }}
                >
                  {i === 1 ? (
                    <>
                      <em>could be</em> <span className="text-accent">ours.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed opacity-70"
          >
            AI products, digital strategy, creative direction, or something that needs all three. Tell me what
            you’re building.
          </motion.p>

          {/* Email: copy is the primary action, mailto is the fallback */}
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-4">
            <Magnetic strength={0.15}>
              <button
                onClick={() => copy(profile.email)}
                className="group relative flex items-center gap-4 rounded-full border border-current/20 pl-7 pr-2 py-2 text-left"
                style={{ borderColor: "color-mix(in srgb, currentColor 25%, transparent)" }}
                aria-live="polite"
              >
                <span className="text-lg md:text-2xl font-serif italic">{profile.email}</span>
                <span className="relative w-28 h-11 rounded-full bg-accent text-white overflow-hidden flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "done" : "copy"}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      {copied ? "Copied ✦" : "Copy"}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </button>
            </Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="group px-2 font-mono text-[11px] uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity"
            >
              <RollText>or open mail app ↗</RollText>
            </a>
          </div>

          {/* Meta row */}
          <div
            className="mt-24 pt-10 grid grid-cols-2 md:grid-cols-4 gap-10"
            style={{ borderTop: "1px solid color-mix(in srgb, currentColor 15%, transparent)" }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-50 mb-4">Elsewhere</p>
              <ul className="space-y-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="group text-sm uppercase tracking-[0.14em]">
                      <RollText>{s.name}</RollText>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-50 mb-4">Local time</p>
              <p className="text-3xl font-serif tabular-nums">{time}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                {awake ? "Likely at my desk" : "Asleep, will reply soon"}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-50 mb-4">Résumé</p>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="group text-sm uppercase tracking-[0.14em]">
                <RollText>Download CV ↗</RollText>
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-50 mb-4">Status</p>
              <p className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing bookend: नमस्ते opened the story, धन्यवाद closes it */}
      <div className="relative overflow-hidden">
        <motion.p
          style={{ y: thanksY, opacity: thanksOpacity }}
          className="font-nepali font-bold text-center leading-[1.1] text-[26vw] md:text-[20vw] text-accent select-none"
          lang="ne"
        >
          {profile.thanks}
        </motion.p>
      </div>

      <div
        className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60"
        style={{ borderTop: "1px solid color-mix(in srgb, currentColor 15%, transparent)" }}
      >
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed & built in {profile.location}</span>
        <button onClick={() => scrollToId("hero")} className="group">
          <RollText>Back to the beginning ↑</RollText>
        </button>
      </div>
    </section>
  );
};

export default Contact;

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { chapters } from "../data/content";
import { scrollToId } from "../lib/interaction";

/* Floating "you are here" pill with overall reading progress. */
const ChapterHUD = ({ active }) => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [open, setOpen] = useState(false);
  const current = chapters.find((c) => c.id === active) ?? chapters[0];
  const hidden = active === "hero";

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 z-40">
      <motion.nav
        aria-label="Story chapters"
        initial={false}
        animate={{ y: hidden ? 120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`relative ${hidden ? "pointer-events-none" : ""}`}
        onMouseLeave={() => setOpen(false)}
      >
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-full mb-2 left-0 right-0 min-w-[220px] rounded-2xl p-2 bg-surface border border-border shadow-xl"
            >
              {chapters.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setOpen(false);
                      scrollToId(c.id);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm transition-colors hover:bg-accent-soft ${
                      c.id === active ? "text-accent" : "text-secondary"
                    }`}
                  >
                    <span className="font-mono text-[10px]">{c.index}</span>
                    {c.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={() => setOpen(true)}
          aria-expanded={open}
          className="relative flex items-center gap-3 rounded-full pl-4 pr-5 py-2.5 backdrop-blur-xl border border-border overflow-hidden"
          style={{ backgroundColor: "color-mix(in srgb, var(--color-surface) 85%, transparent)" }}
        >
          <motion.span style={{ scaleX: progress }} className="absolute left-0 bottom-0 h-[2px] w-full bg-accent origin-left" />
          <span className="font-mono text-[10px] text-accent">{current.index}</span>
          <span className="w-px h-3 bg-border-hover" />
          <span className="relative h-4 overflow-hidden min-w-[110px] text-left">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={current.id}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block font-mono text-[10px] uppercase tracking-[0.2em] text-primary leading-4"
              >
                {current.label}
              </motion.span>
            </AnimatePresence>
          </span>
        </button>
      </motion.nav>
    </div>
  );
};

/* Page-wide ambient glow; colour is set by whichever exhibit is in view. */
export const AmbientGlow = ({ color }) => (
  <div
    aria-hidden="true"
    className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    style={{ opacity: "var(--ambient-opacity)" }}
  >
    <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[120vw] h-[90vh]">
      <motion.div
        initial={false}
        animate={{ backgroundColor: color ?? "#000000", opacity: color ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        className="w-full h-full rounded-full"
        style={{ filter: "blur(140px)" }}
      />
    </div>
  </div>
);

export default ChapterHUD;

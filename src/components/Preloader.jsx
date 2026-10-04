import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/content";

const SEEN_KEY = "ss-intro-seen";

/*
 * Curtain intro. The site renders underneath from the first frame, so
 * nothing is blocked; the curtain waits for fonts (so Devanagari never
 * flashes unstyled), then parts. Plays once per session.
 */
const Preloader = ({ onDone }) => {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SEEN_KEY));

  useEffect(() => {
    if (!visible) {
      onDone?.();
      return;
    }
    let cancelled = false;
    const minDelay = new Promise((r) => setTimeout(r, 1100));
    const maxDelay = new Promise((r) => setTimeout(r, 2600));
    const ready = Promise.all([document.fonts?.ready ?? Promise.resolve(), minDelay]);

    Promise.race([ready, maxDelay]).then(() => {
      if (cancelled) return;
      sessionStorage.setItem(SEEN_KEY, "1");
      setVisible(false);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[100] flex pointer-events-none"
          aria-hidden="true"
        >
          {[0, 1].map((side) => (
            <motion.div
              key={side}
              className="h-full w-1/2"
              style={{ backgroundColor: "var(--color-text)" }}
              exit={{ x: side === 0 ? "-100%" : "100%" }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            />
          ))}

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block font-nepali text-6xl md:text-8xl leading-[1.3]"
                style={{ color: "var(--color-bg)" }}
              >
                {profile.greeting}
              </motion.span>
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
              className="mt-6 h-px w-40 origin-left"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-5 font-mono text-[10px] uppercase tracking-[0.4em]"
              style={{ color: "var(--color-bg)" }}
            >
              A story in four acts
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

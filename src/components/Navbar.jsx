import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";
import { scrollToId } from "../lib/interaction";
import { Magnetic, RollText } from "./ui";

const navLinks = [
  { name: "Story", to: "convergence" },
  { name: "Work", to: "work" },
  { name: "Chronicle", to: "chronicle" },
  { name: "Contact", to: "contact" },
];

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 1.5v2M12 20.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1.5 12h2M20.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
);
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    className="relative w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:text-accent transition-colors overflow-hidden"
  >
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={isDark ? "sun" : "moon"}
        initial={{ y: 20, opacity: 0, rotate: -90 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -20, opacity: 0, rotate: 90 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </motion.span>
    </AnimatePresence>
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("ss-theme") === "dark");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("ss-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 240);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const go = (id) => {
    setIsOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !isOpen ? -100 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-[padding,background-color,border-color] duration-500 ${
          scrolled ? "py-3 backdrop-blur-xl" : "py-5 md:py-7"
        }`}
        style={{
          backgroundColor: scrolled && !isOpen ? "color-mix(in srgb, var(--color-bg) 80%, transparent)" : "transparent",
          borderBottom: `1px solid ${scrolled && !isOpen ? "var(--color-border)" : "transparent"}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <button onClick={() => go("hero")} className="relative z-50 group flex items-baseline gap-3" aria-label="Back to top">
            <span className="font-nepali text-2xl md:text-3xl text-primary group-hover:text-accent transition-colors">
              {profile.nameNepali}
            </span>
            <span className="hidden lg:inline font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              Creative Technologist
            </span>
          </button>

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link, i) => (
              <button
                key={link.name}
                onClick={() => go(link.to)}
                className="group flex items-baseline gap-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-secondary"
              >
                <span className="font-mono text-[9px] text-accent">0{i + 1}</span>
                <RollText>{link.name}</RollText>
              </button>
            ))}

            <Magnetic strength={0.25}>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-2.5 rounded-full text-[12px] font-medium uppercase tracking-[0.14em] border border-border-hover text-primary hover:bg-primary hover:text-bg transition-colors duration-300"
              >
                <RollText>Résumé ↗</RollText>
              </a>
            </Magnetic>

            <ThemeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
          </div>

          <div className="flex items-center gap-1 md:hidden relative z-50">
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 3.75 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1.5px] block bg-primary"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -3.75 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1.5px] block bg-primary"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-end px-6 pb-12 pt-28 bg-bg"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <span key={link.name} className="block overflow-hidden">
                  <motion.button
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => go(link.to)}
                    className="flex items-baseline gap-4 text-6xl font-serif text-primary"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {link.name}
                  </motion.button>
                </span>
              ))}
            </nav>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 font-mono text-sm uppercase tracking-[0.25em] text-accent"
            >
              Résumé ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

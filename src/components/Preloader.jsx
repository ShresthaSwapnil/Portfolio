import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        return prev + 4;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          {/* Nepali greeting */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-nepali text-5xl md:text-7xl mb-8"
            style={{ color: "var(--color-text)" }}
          >
            gd:t]
          </motion.span>

          {/* Progress bar */}
          <div className="w-48 h-[1px] bg-border overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              className="h-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </div>

          {/* Counter */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs mt-4 tracking-widest"
            style={{ color: "var(--color-text-muted)" }}
          >
            {count}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

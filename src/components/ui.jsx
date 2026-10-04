import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

/* Roll-up text: on hover the label slides up and an italic twin rises in. */
export const RollText = ({ children, className = "" }) => (
  <span className={`roll-text ${className}`}>
    <span className="roll-text__a">{children}</span>
    <span className="roll-text__b" aria-hidden="true">
      {children}
    </span>
  </span>
);

/* Magnetic wrapper: any button/link child gets a springy pull. */
export const Magnetic = ({ children, strength = 0.3, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onPointerMove = (e) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.span>
  );
};

/* Chapter label used at the top of each act. */
export const ChapterLabel = ({ index, label, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={`labeled-divider ${className}`}
  >
    <span className="font-mono text-[11px] uppercase tracking-[0.3em] whitespace-nowrap text-muted">
      <span className="text-accent">{index}</span> — {label}
    </span>
  </motion.div>
);

/* Line-by-line mask reveal for headlines. Pass an array of lines. */
export const MaskLines = ({ lines, className = "", delay = 0, as: Tag = "h2" }) => (
  <Tag className={className}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.08em]">
        <motion.span
          className="block"
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </Tag>
);

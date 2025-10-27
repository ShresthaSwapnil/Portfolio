import { motion } from "framer-motion";
import { useRef, useState } from "react";

const GlassCard = ({ children, className, ...props }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div
      {...props}
      ref={cardRef}
      className={`
        relative group overflow-hidden rounded-2xl
        bg-white/15 dark:bg-white/10
        backdrop-blur-xl saturate-150
        border border-white/25
        shadow-lg dark:shadow-black/20
        transition-all duration-300 ease-in-out
        hover:scale-[1.03] hover:shadow-2xl
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: -100, y: -100 })}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
    >
      {children}
      <div
        className="
          absolute inset-0 rounded-2xl z-0
          bg-radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),_rgba(255,255,255,0.2),_transparent_40%)
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default GlassCard;
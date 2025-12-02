// FILE: src/components/ProjectCard.jsx

import { motion, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index, total, scrollXProgress }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  // Calculate the start and end points for this card's animation
  const start = index / total;
  const end = (index + 1) / total;

  // Create transforms for 3D rotation and scale
  const rotateY = useTransform(scrollXProgress, [start, end], [30, -30]);
  const scale = useTransform(scrollXProgress, [start - 0.1, start, end, end + 0.1], [0.8, 1, 1, 0.8]);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <motion.div
      className="flex-shrink-0 w-full md:w-2/3 lg:w-1/2 h-[450px] px-4 snap-center"
      style={{ rotateY }}
    >
      <motion.div
        ref={cardRef}
        className="relative w-full h-full rounded-3xl overflow-hidden
                   bg-white/15 dark:bg-white/10 backdrop-blur-xl saturate-150
                   border border-white/25 shadow-lg dark:shadow-black/20
                   flex flex-col justify-between group"
        style={{ scale }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: -200, y: -200 })}
      >
        {/* The mouse-following glow */}
        <div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 40%)`,
          }}
          aria-hidden="true"
        />

        {/* Card Content */}
        <div className="relative z-10 p-6 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-green-100/80 dark:bg-green-900/50 text-green-800 dark:text-green-100 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Clickable Area and Image */}
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block relative z-10 w-full h-1/2 overflow-hidden mt-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-2 bg-white/30 rounded-full">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
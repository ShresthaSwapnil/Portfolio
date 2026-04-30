import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Aurora Jewel",
    category: "E-Commerce Platform",
    year: "2026",
    description:
      "A premium e-commerce platform for a luxury jewellery brand. Built with Next.js and MedusaJS, featuring 3D product showcases, scroll-driven animations, and a custom CMS.",
    image: "/images/projects/aurora.png",
    color: "#0D3B2E",
    tech: ["Next.js", "MedusaJS", "Three.js", "Tailwind"],
    link: "https://aurorajewelstudio.com/",
    featured: true,
  },
  {
    title: "Netra",
    category: "AI-Powered Platform",
    year: "2025",
    description:
      "AI-powered digital literacy platform created for UNESCO Youth Hackathon. Features intelligent content delivery, adaptive learning paths, and accessibility-first design.",
    image: "/images/projects/netra.png",
    color: "#2563EB",
    tech: ["Flutter", "FastAPI", "Gemini API", "Firebase"],
    link: "https://github.com/ShresthaSwapnil/Netra",
    featured: true,
  },
  {
    title: "QFX Cinemas",
    category: "UX Redesign",
    year: "2025",
    description:
      "Complete UX overhaul for Nepal's largest cinema chain mobile app. Redesigned the booking flow, onboarding experience, and user authentication — reducing friction by 60%.",
    image: "/images/projects/qfx.png",
    color: "#1A1A2E",
    tech: ["Figma", "Prototyping", "User Research", "UI Design"],
    link: "https://www.figma.com/design/iSzsgT6phHzACaZmPKTgLf/QFX-Cinemas-Redesign--Copy-?node-id=0-1&t=4jiAhW1RoH3shFzj-1",
    featured: true,
  },
  {
    title: "KhetAI",
    category: "AgriTech Solution",
    year: "2025",
    description:
      "Smart farming assistant with AI-powered crop disease detection, weather integration, and local market price tracking for Nepali farmers.",
    image: "/images/projects/khetai.png",
    color: "#166534",
    tech: ["Flutter", "TensorFlow Lite", "FastAPI", "OpenAI API"],
    link: "https://github.com/subaasw/khetai",
    featured: false,
  },
  {
    title: "Huba Nepal",
    category: "E-Commerce App",
    year: "2024",
    description:
      "Modern clothing app focused on user-centric shopping flows. Designed the complete user journey from discovery to checkout with a clean, minimal interface.",
    image: "/images/projects/huba.png",
    color: "#1A1A1A",
    tech: ["Figma", "UI Design", "Prototyping"],
    link: "https://www.figma.com/design/FY5da6hJFkPB5HPeQtH8m2/Huba-Nepal?node-id=0-1&t=TpxoxqA8zktd1STb-1",
    featured: false,
  },
  {
    title: "Pomodoro Sathi",
    category: "Productivity App",
    year: "2024",
    description:
      "Cross-platform timer app with personalized workflow management, session tracking, and focus analytics.",
    image: "/images/projects/pomodoro.png",
    color: "#9333EA",
    tech: ["Flutter", "Dart", "Local Storage"],
    link: "https://github.com/ShresthaSwapnil/PomodoroSathi",
    featured: false,
  },
];

const FeaturedProject = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 md:mb-32 last:mb-0"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isReversed ? "direction-rtl" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          style={{ y: imageY }}
          className={`lg:col-span-7 ${isReversed ? "lg:order-2" : ""}`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="block relative overflow-hidden rounded-sm group"
          >
            {/* Colored background */}
            <div
              className="aspect-[16/10] flex items-center justify-center p-8 md:p-12 transition-transform duration-700 ease-out-expo"
              style={{
                backgroundColor: project.color,
                transform: isHovered ? "scale(1.02)" : "scale(1)",
              }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out-expo"
                style={{
                  transform: isHovered
                    ? "scale(1.05) translateY(-8px)"
                    : "scale(1) translateY(0)",
                }}
              />
            </div>

            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
            >
              <span className="px-6 py-3 rounded-full text-white text-sm font-medium tracking-wider uppercase backdrop-blur-sm bg-white/10 border border-white/20">
                View Project ↗
              </span>
            </div>
          </a>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: contentY }}
          className={`lg:col-span-5 ${isReversed ? "lg:order-1 lg:text-right" : ""}`}
        >
          <div
            className="flex items-center gap-3 mb-4"
            style={{ justifyContent: isReversed ? "flex-end" : "flex-start" }}
          >
            <span
              className="font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "var(--color-accent)" }}
            >
              {project.category}
            </span>
            <span
              className="font-mono text-[11px]"
              style={{ color: "var(--color-text-muted)" }}
            >
              {project.year}
            </span>
          </div>

          <h3
            className="text-3xl md:text-4xl font-serif mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm md:text-[15px] font-light leading-[1.8] mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {project.description}
          </p>

          <div
            className="flex flex-wrap gap-2"
            style={{ justifyContent: isReversed ? "flex-end" : "flex-start" }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SmallProject = ({ project, index }) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group block p-6 md:p-8 rounded-sm transition-all duration-500 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-sm flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: project.color }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-6 h-6 object-contain"
            style={{ filter: "brightness(10)" }}
          />
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          style={{ color: "var(--color-text-muted)" }}
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      <h3
        className="text-lg font-serif mb-1 transition-colors duration-300 group-hover:text-accent"
        style={{ color: "var(--color-text)" }}
      >
        {project.title}
      </h3>

      <p
        className="text-xs font-mono uppercase tracking-wider mb-3"
        style={{ color: "var(--color-accent)" }}
      >
        {project.category}
      </p>

      <p
        className="text-sm font-light leading-relaxed line-clamp-2"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="font-mono text-[9px] uppercase tracking-wider"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t}
            {project.tech.indexOf(t) < Math.min(project.tech.length, 3) - 1 &&
              " · "}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding relative"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="labeled-divider mb-16 md:mb-24"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.3em] whitespace-nowrap"
            style={{ color: "var(--color-text-muted)" }}
          >
            03 — Selected Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24"
        >
          <h2
            className="text-headline font-serif max-w-xl"
            style={{ color: "var(--color-text)" }}
          >
            Projects that tell <span className="italic">a story.</span>
          </h2>
          <p
            className="text-sm md:text-base font-light max-w-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            A collection of apps, platforms, and design work — each crafted with
            precision and purpose.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="mb-20 md:mb-32">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-mono text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            Other Noteworthy Projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {other.map((project, i) => (
              <SmallProject key={project.title} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "Humming Web",
    role: "Content Designer",
    period: "2024 — Present",
    type: "Part-time",
    description:
      "Crafting digital content strategies and visual designs for international clients. Produced 500+ social media designs, brand assets, and campaign visuals.",
    highlights: [
      "Designed 500+ social media creatives",
      "Managed content for 10+ international brands",
      "Established visual design systems",
    ],
    tech: ["Figma", "Photoshop", "Canva", "CapCut"],
  },
  {
    company: "Sero Finance",
    role: "Flutter Developer",
    period: "2025 — 2026",
    type: "Part-Time",
    description:
      "Engineering intelligent mobile applications with integrated voice-control systems, secure multi-method authentication, and seamless internationalization.",
    highlights: [
      "Built multi-method auth (OAuth 2.0 & JWT)",
      "Engineered STT/TTS voice control navigation",
      "Developed complex UI & state management via Provider",
      "Integrated end-to-end i18n for 5 languages",
    ],
    tech: ["Flutter", "Dart", "NestJS", "REST APIs"],
  },
  {
    company: "Tech Titans",
    role: "President",
    period: "2024 — 2026",
    type: "Leadership",
    description:
      "Leading the college IT club - organizing hackathons, tech talks, and workshops. Building a community of aspiring developers and designers.",
    highlights: [
      "Organized hackathons and other tech events",
      "Arranged guest talks and sessions",
      "Mentored junior developers",
    ],
    tech: ["Leadership", "Event Management", "Community"],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="group cursor-pointer relative py-8 md:py-10 transition-all duration-500"
      style={{
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Main row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
        {/* Left: Role + Company */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "var(--color-text-muted)" }}
            >
              {exp.period}
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider"
              style={{
                backgroundColor: "var(--color-accent-soft)",
                color: "var(--color-accent)",
              }}
            >
              {exp.type}
            </span>
          </div>

          <h3
            className="text-xl md:text-2xl font-serif transition-colors duration-300 group-hover:text-accent"
            style={{ color: "var(--color-text)" }}
          >
            {exp.role}
          </h3>
          <p
            className="text-sm md:text-base mt-1"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {exp.company}
          </p>
        </div>

        {/* Right: Expand indicator */}
        <div className="flex items-center gap-3 self-start md:self-center">
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="pt-6 pb-2">
          <p
            className="text-sm md:text-[15px] font-light leading-[1.8] max-w-2xl mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {exp.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {exp.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <span
                  className="text-sm font-light"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  color: "var(--color-accent)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative"
      style={{ backgroundColor: "var(--color-bg)" }}
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
            02 — Experience
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-headline font-serif lg:sticky lg:top-32"
              style={{ color: "var(--color-text)" }}
            >
              The <span className="italic">journey</span> so far.
            </motion.h2>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-8 relative">
            {/* Animated vertical line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[1px] hidden lg:block"
              style={{ backgroundColor: "var(--color-border)" }}
            >
              <motion.div
                style={{ height: lineHeight }}
                className="w-full origin-top"
                initial={{ backgroundColor: "var(--color-accent)" }}
              />
            </div>

            <div className="lg:pl-10">
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

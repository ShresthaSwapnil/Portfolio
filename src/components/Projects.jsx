import { motion } from "framer-motion";

const projects = [
  {
    title: "Netra",
    category: "Mobile & AI",
    year: "2025",
    description:
      "AI-powered digital literacy platform created for UNESCO Youth Hackathon.",
    image: null, // Placeholder for now, implies clean text-based if no image
    link: "https://github.com/ShresthaSwapnil",
  },
  {
    title: "QFX Cinemas",
    category: "UX Redesign",
    year: "2025",
    description: "Enhanced mobile experience for Nepal's largest cinema chain.",
    image: null,
    link: "https://www.figma.com/@swapnilshrestha",
  },
  {
    title: "KhetAI",
    category: "AgriTech",
    year: "2024",
    description:
      "Smart farming assistant with disease detection and local market integration.",
    image: null,
    link: "https://github.com/ShresthaSwapnil",
  },
  {
    title: "Huba Nepal",
    category: "E-Commerce",
    year: "2024",
    description:
      "Modern clothing app design focusing on user-centric shopping flows.",
    image: null,
    link: "https://www.figma.com/@swapnilshrestha",
  },
  {
    title: "Pomodoro Sathi",
    category: "Productivity",
    year: "2024",
    description:
      "Cross-platform timer app with personalized workflow management.",
    image: null,
    link: "https://github.com/ShresthaSwapnil",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24"
        >
          <div>
            <span className="text-rose-500 font-serif italic text-lg mb-2 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Selected{" "}
              <span className="text-slate-400 dark:text-slate-600">Works</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mt-6 md:mt-0 text-lg font-light">
            A collection of mobile applications and user experiences crafted
            with precision and purpose.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0 border-t border-slate-200 dark:border-slate-800">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors px-4 md:px-8"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-sm font-mono text-slate-400 dark:text-slate-500">
                  0{index + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-medium text-slate-800 dark:text-slate-200 group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-col md:items-end mt-4 md:mt-0">
                <span className="text-sm font-medium uppercase tracking-wider text-rose-500 mb-1">
                  {project.category}
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-sm font-light mb-2">
                  {project.year}
                </span>

                <div className="max-w-xs md:text-right overflow-hidden h-0 group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-slate-600 dark:text-slate-400 pt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

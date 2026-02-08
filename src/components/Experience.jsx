import { motion } from "framer-motion";

const experiences = [
  {
    company: "Humming Web",
    role: "Content Designer",
    period: "2024 - Present",
    description:
      "Crafting digital content strategies and social media designs for international clients.",
  },
  {
    company: "Tech Titans",
    role: "President",
    period: "2024 - Present",
    description:
      "Leading the IT club initiatives, organizing hackathons, and fostering a tech community.",
  },
  {
    company: "Sero Finance",
    role: "Flutter Developer",
    period: "2025 - 2026",
    description:
      "Building secure financial applications with voice-control interfaces and multi-method authentication.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-rose-500 font-serif italic text-lg mb-2 block">
            Career
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-6 md:ml-0 md:pl-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-baseline">
                {/* Timeline visual for desktop */}
                <div className="hidden md:block col-span-1 text-right">
                  <span className="text-sm font-mono text-slate-400 dark:text-slate-500">
                    {exp.period}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute -left-[5px] top-2 md:relative md:left-auto md:top-auto md:w-3 md:h-3 md:rounded-full md:bg-rose-500 md:col-span-0 md:justify-self-center md:mx-auto ring-4 ring-white dark:ring-slate-900 bg-rose-500 w-2.5 h-2.5 rounded-full"></div>

                {/* Content */}
                <div className="col-span-3">
                  <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-slate-100">
                    {exp.role}
                  </h3>
                  <h4 className="text-md text-rose-600 mb-2">{exp.company}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Mobile date */}
                  <span className="md:hidden block mt-2 text-xs font-mono text-slate-400">
                    {exp.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

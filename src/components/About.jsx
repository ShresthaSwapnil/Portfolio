import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-rose-500 mb-4">
              The Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-8 leading-tight">
              Crafting digital narratives through code and design.
            </h3>

            <div className="prose prose-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              <p className="mb-6">
                I am a{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Mobile Developer
                </span>{" "}
                who believes that great code is invisible, it just works. My
                experience with{" "}
                <span className="underline decoration-rose-300 decoration-2 underline-offset-4">
                  React Native
                </span>{" "}
                and{" "}
                <span className="underline decoration-rose-300 decoration-2 underline-offset-4">
                  Flutter
                </span>{" "}
                allows me to build fluid, high-performance applications that
                feel native on any device.
              </p>
              <p>
                But code is only half the story. As a{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  UX Designer
                </span>
                , I obsess over the "why" and "how" of user interaction. I use
                standard tools like <span className="italic">Figma</span> to
                prototype, but my real tool is empathy, understanding the user's
                need before writing a single line of logic.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {[
                "Flutter",
                "React Native",
                "FastAPI",
                "React",
                "Figma",
                "Node.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-600 dark:text-slate-300 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                value: "3+",
                label: "Years of Craft",
                sub: "Designing & Engineering",
              },
              {
                value: "5+",
                label: "Apps Developed",
                sub: "Flutter & React Native",
              },
              {
                value: "20+",
                label: "Learning Streaks",
                sub: "Certifications & Courses",
              },
              {
                value: "100+",
                label: "Late Night Solves",
                sub: "Coffee to Logic ratio",
              },
              { value: "∞", label: "Curiosity", sub: "Always learning" },
              {
                value: "👀",
                label: "Next Project",
                sub: "Loading...",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-rose-300 dark:hover:border-rose-700 transition-colors group"
              >
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-rose-500 transition-colors">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

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

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden p-12"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 dark:bg-rose-900/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-100 dark:bg-slate-700 rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 text-center">
              <span className="font-nepali text-9xl text-slate-900 dark:text-white opacity-10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                कला
              </span>
              <div className="relative z-20">
                <h4 className="font-serif text-2xl text-slate-800 dark:text-slate-200 mb-2">
                  Design + Code
                </h4>
                <p className="text-rose-500 font-mono text-sm">Since 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

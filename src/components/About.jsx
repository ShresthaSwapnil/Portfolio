import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "Flutter",
    "FastAPI",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "Python",
    "Java",
    "Figma",
    "n8n",
  ];

  return (
    <section
      id="about"
      className="w-screen h-screen flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 max-sm:h-[160dvh] max-sm:items-start"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Image Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
            className="order-2 md:order-1"
          >
            <div className="relative w-full max-w-md mx-auto group">
              <div className="aspect-square rounded-2xl overflow-hidden bg-green-100 dark:bg-green-900">
                <img
                  src="/images/Swapnil.png"
                  alt="Profile Image"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all hover:scale-105"
                />
              </div>

              {/* Outline shapes (appear when hovering the .group) */}
              <svg
                viewBox="0 0 100 100"
                className="absolute top-3 left-3 w-12 h-12 opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:rotate-12 z-20 pointer-events-none"
                style={{ transitionDelay: "50ms" }}
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#000"
                  strokeWidth="6"
                  strokeOpacity="1"
                />
              </svg>

              <svg
                viewBox="0 0 100 100"
                className="absolute top-6 right-6 w-14 h-14 opacity-0 transform transition-all duration-600 group-hover:opacity-100 group-hover:translate-y-1 group-hover:-rotate-12 z-20 pointer-events-none"
                style={{ transitionDelay: "120ms" }}
                aria-hidden="true"
              >
                <polygon
                  points="50,10 90,85 10,85"
                  fill="none"
                  stroke="#000"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                viewBox="0 0 100 100"
                className="absolute bottom-4 left-8 w-10 h-10 opacity-0 transform transition-all duration-550 group-hover:opacity-100 group-hover:translate-y-2 group-hover:rotate-45 z-20 pointer-events-none"
                style={{ transitionDelay: "200ms" }}
                aria-hidden="true"
              >
                <rect
                  x="15"
                  y="15"
                  width="70"
                  height="70"
                  fill="none"
                  stroke="#000"
                  strokeWidth="6"
                  rx="8"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-green-500 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.4 },
              },
            }}
            className="order-1 md:order-2 space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
              Hi, I&apos;m{" "}
              <span className="font-bold text-green-700 dark:text-green-500">
                Swapnil Shrestha
              </span>
              , a{" "}
              <span className="font-semibold">
                balanced hybrid of Designer and Developer
              </span>{" "}
              exploring how creativity and technology can work in harmony.
              <br />
              <br />I build clean, scalable systems that combine intuitive UI
              with strong backend logic. My focus is on blending{" "}
              <span className="font-semibold">design precision</span> with{" "}
              <span className="font-semibold">AI automation</span> to make
              experiences that both look good and think smartly.
              <br />
              <br />
              As the{" "}
              <span className="font-bold text-green-700 dark:text-green-500">
                President of MVIC Tech Titan
              </span>
              , I lead a team of innovators hosting workshops and hackathons to
              foster creativity, collaboration, and future-ready skills.
              <br />
              <br />
              <span className="italic text-gray-800 dark:text-gray-300">
                “Design with intent. Build with clarity. Automate with purpose.”
              </span>
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm bg-white/30 dark:bg-white/10 text-gray-900 dark:text-gray-100 border border-white/20 shadow-sm"
                    style={{
                      backgroundColor: `hsla(${
                        (index * 35) % 360
                      }, 70%, 85%, 0.5)`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

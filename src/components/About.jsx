import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-screen h-screen flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 max-sm:mb-32 max-sm:h-[150dvh]"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-green-100 dark:bg-green-900">
                <img
                  src="/images/Swapnil.png"
                  alt="Profile Image"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all hover:scale-105"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-green-500 rounded-2xl" />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="font-bold text-green-600 dark:text-green-500">
                Swapnil Shrestha
              </span>
              , an
              <span className="font-bold"> Aspiring Developer</span> from Nepal
              skilled in
              <span className="font-bold"> React</span>,
              <span className="font-bold"> Tailwind CSS</span>, and
              <span className="font-bold"> Django</span>. I enjoy crafting
              intuitive interfaces and am expanding my expertise in
              <span className="font-bold"> React Native</span> and
              <span className="font-bold"> Machine Learning</span> through
              <span className="font-bold"> DataCamp</span>.
              <br />
              <br />
              As the <span className="font-bold">President</span> of
              <span className="font-bold text-green-600 dark:text-green-500">
                {" "}
                MVIC Tech Titan
              </span>
              , I lead workshops and hackathons to inspire innovation. I also
              design <span className="font-bold">impactful ads</span> using
              <span className="font-bold"> Canva</span>
              , blending creativity with strategy.
              <br />
              <br />
              <span className="font-bold text-green-600 dark:text-green-500">
                Let’s collaborate and bring ideas to life!
              </span>
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "MongoDB",
                  "React Native",
                  "Python",
                  "C#",
                  "Figma",
                  "Java",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-green-900 text-green-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

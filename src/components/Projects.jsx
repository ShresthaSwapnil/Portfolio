import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const GlassCard = ({ children, onClick, className = "" }) => (
  <motion.div
    onClick={onClick}
    className={`relative overflow-hidden rounded-2xl bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-2xl ${className}`}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "KhetAI",
      description:
        "Smart farming assistant with crop disease detection, real-time vegetable prices, and farmer marketplace. Built with TensorFlow Lite for mobile AI analysis.",
      tags: ["React Native", "MySQL", "TensorFlow"],
      image: "images/Projects/KhetAI.png",
      url: "https://github.com/subaasw/khetai",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Hackathon Website",
      description:
        "Mobile-first responsive website with modern animations and seamless user experience across all devices.",
      tags: ["React", "Tailwind CSS", "GSAP"],
      image: "images/Projects/Hackathon.jpg",
      url: "https://github.com/ShresthaSwapnil/MVIC_Hackathon",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Movie Recommendation",
      description:
        "Python-based recommendation system that suggests movies using machine learning algorithms and similarity analysis.",
      tags: ["Python", "Pandas", "scikit-learn"],
      image: "images/Projects/MovieRecommendation.png",
      url: "https://github.com/ShresthaSwapnil/MovieRecommendation",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Simple J.A.R.V.I.S",
      description:
        "AI assistant performing tasks like sending emails, WhatsApp messages, and Wikipedia searches with voice commands.",
      tags: ["Python", "AI"],
      image: "images/Projects/Jarvis.jpg",
      url: "https://github.com/ShresthaSwapnil/SimpleJARVIS",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Mobile UI/UX Design",
      description:
        "Redesigned QFX Cinemas and conceptualized Huba Nepal clothing app with modern e-commerce principles.",
      tags: ["Figma", "Canva", "UI/UX"],
      image: "images/Projects/Figma.png",
      url: "https://www.figma.com/files/project/273552780",
      gradient: "from-rose-500 to-orange-600",
    },
    {
      title: "Agar.io Clone",
      description:
        "Recreation of the popular multiplayer game using Pygame with smooth physics and engaging gameplay.",
      tags: ["Python", "PyGame"],
      image: "images/Projects/Agario.jpg",
      url: "https://github.com/ShresthaSwapnil/AgarioClone",
      gradient: "from-teal-500 to-green-600",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A collection of my best work and experiments
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleProjects.map((project, index) => (
                <GlassCard
                  key={startIndex + index}
                  onClick={() => window.open(project.url, "_blank")}
                  className="cursor-pointer group"
                  onHoverStart={() => setHoveredIndex(startIndex + index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredIndex === startIndex + index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                    />

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{
                        scale: hoveredIndex === startIndex + index ? 1 : 0,
                        rotate: hoveredIndex === startIndex + index ? 0 : -180,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-800 dark:text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 dark:group-hover:from-green-400 dark:group-hover:to-blue-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <Github className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.1 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/40 dark:to-blue-900/40 text-green-800 dark:text-green-300 rounded-full text-xs font-semibold border border-green-200/50 dark:border-green-700/50 hover:scale-110 transition-transform"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: hoveredIndex === startIndex + index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </GlassCard>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex justify-center items-center gap-6"
            >
              <motion.button
                onClick={prevPage}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg hover:shadow-xl transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex gap-3">
                {[...Array(totalPages)].map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                    aria-label={`Go to page ${i + 1}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === currentPage
                          ? "bg-gradient-to-r from-green-500 to-blue-500 scale-125 shadow-lg"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                    />
                    {i === currentPage && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 blur-md opacity-50"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={nextPage}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg hover:shadow-xl transition-all"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

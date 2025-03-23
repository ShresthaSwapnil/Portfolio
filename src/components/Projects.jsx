import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "KhetAI",
      description:
        "Developed KhetAI, a smart farming assistant app, using Expo React Native to provide crop disease detection, real-time vegetable price, and farmer-to-buyer marketplace. Integrated TensorFlowLite for mobile AI analysis and beautiful-soup for scrapping realtime vegetable prices, enhancing agricultural efficiency and sustainability.",
      tags: ["React Native", "TensorFlow Lite", "MySQL"],
      image: "/images/Projects/KhetAI.png",
      url: "https://github.com/subaasw/khetai",
    },
    {
      title: "Hackathon Website",
      description:
        "Mobile-first responsive website with modern animations. Implemented responsive design principles to ensure optimal user experience across devices",
      tags: ["React", "Tailwind CSS", "GSAP"],
      image: "/images/Projects/Hackathon.jpg",
      url: "https://github.com/ShresthaSwapnil/MVIC_Hackathon",
    },
    {
      title: "Simple J.A.R.V.I.S",
      description:
        "Created a Simple J.A.R.V.I.S using Python. It can perform various tasks like sending emails, sending WhatsApp Messages, searching on Wikipedia, etc.",
      tags: ["Python"],
      image: "/images/Projects/Jarvis.jpg",
      url: "https://github.com/ShresthaSwapnil/SimpleJARVIS",
    },
    {
      title: "Mobile App UI/UX Design Projects",
      description:
        "Redesigned QFX Cinemas mobile app interface to enhance user experience and functionality using Figma Conceptualized and designed Huba Nepal clothing app, focusing on modern e-commerce design principlesCreated high-fidelity prototypes and user flows using Figma and Canva",
      tags: ["Figma", "Canva"],
      image: "/images/Projects/Figma.png",
      url: "https://www.figma.com/files/project/273552780",
    },
    {
      title: "Agar.io Clone",
      description:
        "This project is a simple clone of the popular Agar.iogame, developed using the Pygame library.",
      tags: ["Python", "PyGames"],
      image: "/images/Projects/Agario.jpg",
      url: "https://github.com/ShresthaSwapnil/AgarioClone",
    },
    {
      title: "Simple Movie Recommendation System",
      description:
        "A Python-based recommendation system that suggests movies similar to a user's input.",
      tags: ["Python", "Pandas", "sckit-learn"],
      image: "/images/Projects/MovieRecommendation.png",
      url: "https://github.com/ShresthaSwapnil/MovieRecommendation",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="projects"
      className="w-screen h-screen flex items-center justify-center bg-white dark:bg-gray-900 max-sm:h-full max-sm:py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-100 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="mt-8">
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={prevPage}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-white" />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentPage
                          ? "bg-green-500 dark:bg-green-400 scale-125"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 dark:text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

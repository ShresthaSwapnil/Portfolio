import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Mobile App UI/UX Design Projects",
      description:
        "Redesigned QFX Cinemas mobile app interface to enhance user experience and functionality using Figma Conceptualized and designed Huba Nepal clothing app, focusing on modern e-commerce design principlesCreated high-fidelity prototypes and user flows using Figma and Canva",
      tags: ["Figma", "Canva"],
      image: "/images/image.png",
      url: "https://www.figma.com/files/project/273552780",
    },
    {
      title: "Hackathon Website",
      description:
        "Mobile-first responsive website with modern animations. Implemented responsive design principles to ensure optimal user experience across devices",
      tags: ["React", "Tailwind CSS", "GSAP"],
      image: "/images/Hackathon.jpg",
      url: "https://github.com/ShresthaSwapnil/MVIC_Hackathon",
    },
    {
      title: "Simple J.A.R.V.I.S",
      description:
        "Created a Simple J.A.R.V.I.S using Python. It can perform various tasks like sending emails, sending WhatsApp Messages, searching on Wikipedia, etc.",
      tags: ["Python"],
      image: "/images/jarvis.jpg",
      url: "https://github.com/ShresthaSwapnil/SimpleJARVIS",
    },
  ];

  return (
    <section
      id="projects"
      className="w-screen h-screen flex items-center justify-center p-8 bg-white dark:bg-gray-900 max-sm:h-[175dvh] max-sm:items-start"
    >
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => window.open(project.url, "_blank")}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-green-900 text-green-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

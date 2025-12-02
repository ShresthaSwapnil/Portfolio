import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      {/* This provides the solid base color for the entire page */}
      <div className="absolute inset-0 h-full w-full bg-white dark:bg-gray-900" />

      {/* Animated Blob 1 */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "30%", "-20%"],
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-green-500/20 opacity-50 blur-3xl filter md:h-[500px] md:w-[500px]"
      />

      {/* Animated Blob 2 */}
      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["30%", "-30%", "30%"],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/20 opacity-50 blur-3xl filter md:h-[400px] md:w-[400px]"
      />
    </div>
  );
};

export default Background;
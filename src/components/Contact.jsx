import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl text-slate-900 dark:text-slate-100 mb-8 tracking-tight">
            Let's work together.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light mb-12 max-w-2xl mx-auto">
            I am currently open to new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <a
            href="mailto:shresthaswapnil03@gmail.com"
            className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-medium text-lg hover:bg-rose-600 dark:hover:bg-rose-500 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
          >
            Say Hello
          </a>

          <div className="mt-20 flex justify-center gap-12 border-t border-slate-200 dark:border-slate-800 pt-12">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/swapnil-shrestha/",
              },
              { name: "GitHub", url: "https://github.com/ShresthaSwapnil" },
              {
                name: "DataCamp",
                url: "https://www.datacamp.com/profile/shresthaswapnil03",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 font-medium uppercase tracking-widest text-sm transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="mt-12 text-slate-400 dark:text-slate-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} Swapnil Shrestha. Kathmandu,
            Nepal.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

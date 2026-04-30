import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/swapnil-shrestha-b5792925b/",
    },
    {
      name: "GitHub",
      url: "https://github.com/ShresthaSwapnil",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/shresthaswapnil/",
    },
    {
      name: "DataCamp",
      url: "https://www.datacamp.com/profile/shresthaswapnil03",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Main contact area */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="labeled-divider mb-16 md:mb-24"
          >
            <span
              className="font-mono text-xs uppercase tracking-[0.3em] whitespace-nowrap"
              style={{ color: "var(--color-text-muted)" }}
            >
              04 — Contact
            </span>
          </motion.div>

          {/* Big CTA heading */}
          <div className="max-w-5xl">
            <motion.h2
              style={{ y: headingY, opacity: headingOpacity }}
              className="font-serif text-display leading-[0.95] mb-8"
            >
              <span style={{ color: "var(--color-text)" }}>Let's build</span>
              <br />
              <span className="italic" style={{ color: "var(--color-text)" }}>
                something{" "}
              </span>
              <span style={{ color: "var(--color-accent)" }}>together.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base md:text-lg font-light leading-relaxed max-w-xl mb-12"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Currently open to new opportunities — whether it's a full-stack
              project, a mobile app, or a creative collaboration. Let's talk.
            </motion.p>

            {/* Email CTA */}
            <motion.a
              href="mailto:shresthaswapnil03@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group inline-flex items-center gap-4 mb-20"
            >
              <span
                className="text-xl md:text-2xl font-serif italic transition-colors duration-300 group-hover:text-accent"
                style={{ color: "var(--color-text)" }}
              >
                shresthaswapnil03@gmail.com
              </span>
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </motion.a>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-12"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex flex-wrap gap-8 md:gap-12">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + i * 0.08,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-center gap-2 transition-colors duration-300 hover:text-accent"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span className="text-sm font-medium uppercase tracking-[0.15em]">
                      {social.name}
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#22C55E" }}
                />
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.15em]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Available for work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="py-8"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="font-mono text-[11px] tracking-wider"
            style={{ color: "var(--color-text-muted)" }}
          >
            © {new Date().getFullYear()} Swapnil Shrestha
          </span>

          <span
            className="font-mono text-[11px] tracking-wider"
            style={{ color: "var(--color-text-muted)" }}
          >
            Kathmandu, Nepal
          </span>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 transition-colors duration-300 hover:text-accent"
            style={{ color: "var(--color-text-muted)" }}
          >
            <span className="font-mono text-[11px] uppercase tracking-wider">
              Back to top
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Closing Nepali cultural touch — bookends the Namaste opening */}
      <div className="py-6 text-center">
        <span
          className="font-nepali text-2xl"
          style={{ color: "var(--color-accent)", opacity: 0.75 }}
        >
          wGojafb
        </span>
      </div>
    </section>
  );
};

export default Contact;

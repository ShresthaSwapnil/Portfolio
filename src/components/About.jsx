import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "React / Next.js", category: "Web" },
  { name: "Node.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Figma", category: "Design" },
  { name: "Canva", category: "Design" },
  { name: "Claude", category: "AI" },
  { name: "Gemini", category: "AI" },
  { name: "n8n", category: "Automation" },
  { name: "Claude Code", category: "Automation" },
];

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
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
            01 — About
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo column */}
          <motion.div style={{ y: imageY }} className="lg:col-span-5 relative">
            <div className="relative">
              {/* Photo frame */}
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] overflow-hidden rounded-sm"
              >
                <img
                  src="/images/swapnil-suit.jpg"
                  alt="Swapnil Shrestha"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                {/* Subtle overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--color-bg-alt) 0%, transparent 30%)",
                  }}
                />
              </motion.div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-6 -right-4 md:-right-8 px-5 py-4 rounded-sm backdrop-blur-xl"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Based in
                </p>
                <p
                  className="font-serif italic text-lg mt-0.5"
                  style={{ color: "var(--color-text)" }}
                >
                  Kathmandu, Nepal
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div style={{ y: textY }} className="lg:col-span-7 lg:pl-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-headline font-serif mb-8 md:mb-10"
              style={{ color: "var(--color-text)" }}
            >
              I engineer experiences across{" "}
              <span className="italic">screens,</span>{" "}
              <span style={{ color: "var(--color-accent)" }}>pixels</span> &
              prompts.
            </motion.h2>

            <div className="space-y-6">
              {[
                <>
                  I'm a{" "}
                  <strong style={{ color: "var(--color-text)" }}>
                    Full-Stack Developer
                  </strong>{" "}
                  who builds across the entire stack - from pixel-perfect mobile
                  apps in{" "}
                  <span className="underline decoration-accent/30 decoration-2 underline-offset-4">
                    Flutter
                  </span>{" "}
                  to robust web applications and backend systems. I believe
                  great software is invisible, it just works.
                </>,
                <>
                  But code is only half the equation. As a{" "}
                  <strong style={{ color: "var(--color-text)" }}>
                    Content Designer
                  </strong>
                  , I've crafted{" "}
                  <span style={{ color: "var(--color-accent)" }}>500+</span>{" "}
                  designs for international brands - shaping how products
                  communicate visually across social platforms and digital
                  touchpoints.
                </>,
                <>
                  I integrate{" "}
                  <strong style={{ color: "var(--color-text)" }}>
                    AI into everything I build
                  </strong>{" "}
                  - from intelligent features powered by Gemini to automated
                  workflows with n8n and Claude Code. The future isn't coming;
                  I'm building it.
                </>,
              ].map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base md:text-[17px] font-light leading-[1.8]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-12 md:mt-16"
            >
              <p
                className="font-mono text-[11px] uppercase tracking-[0.3em] mb-5"
                style={{ color: "var(--color-text-muted)" }}
              >
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-default hover:scale-105"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                      e.currentTarget.style.color = "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.color =
                        "var(--color-text-secondary)";
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Quick stats — meaningful ones only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "3+", label: "Years Building" },
                { value: "500+", label: "Designs Crafted" },
                { value: "7+", label: "Products Shipped" },
              ].map((stat, i) => (
                <div key={i}>
                  <p
                    className="text-3xl md:text-4xl font-serif"
                    style={{ color: "var(--color-text)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.2em] mt-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

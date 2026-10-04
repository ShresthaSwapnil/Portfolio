import { AnimatePresence, LayoutGroup, motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { chronicle, education } from "../data/content";
import { ChapterLabel, MaskLines } from "./ui";

const ease = [0.16, 1, 0.3, 1];
const FILTERS = ["All", ...Array.from(new Set(chronicle.map((c) => c.domain)))];

const Entry = ({ item, index }) => (
  <motion.li
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
    transition={{ duration: 0.6, delay: index * 0.05, ease }}
    className="group relative pl-10 md:pl-16 py-9 md:py-12 border-b border-border"
  >
    {/* Node on the line */}
    <span className="absolute left-0 top-12 md:top-[3.6rem] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-accent bg-bg transition-transform duration-500 group-hover:scale-150" />

    <div className="grid md:grid-cols-12 gap-4 md:gap-8">
      <div className="md:col-span-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] bg-accent-soft text-accent">
            {item.domain}
          </span>
          {item.period && (
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{item.period}</span>
          )}
        </div>
        <h3 className="text-3xl md:text-4xl text-primary transition-transform duration-500 ease-out-expo group-hover:translate-x-2">
          {item.role}
        </h3>
        <p className="mt-2 font-serif italic text-lg text-secondary">{item.org}</p>
      </div>

      <ul className="md:col-span-7 space-y-3 md:pt-9">
        {item.points.map((p) => (
          <li key={p} className="flex gap-3 text-[15px] font-light leading-relaxed text-secondary">
            <span className="mt-[0.7em] w-3 h-px bg-accent flex-shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  </motion.li>
);

const Chronicle = () => {
  const listRef = useRef(null);
  const [filter, setFilter] = useState("All");
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const items = filter === "All" ? chronicle : chronicle.filter((c) => c.domain === filter);

  return (
    <section id="chronicle" data-chapter="chronicle" className="section-padding relative bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ChapterLabel index="03" label="Chronicle" className="mb-16 md:mb-24" />

        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <MaskLines
            lines={["Agencies, studios,", "trails & clubs.", <em key="e">The journey so far.</em>]}
            className="lg:col-span-7 text-headline text-primary"
          />
          <div className="lg:col-span-5 lg:pt-4 flex flex-col justify-end">
            <p className="text-sm md:text-base font-light leading-relaxed text-secondary mb-6">
              Creative agencies, jewellery brands, sports media, digital products and technology communities. Filter
              the story by the hat I was wearing.
            </p>
            <LayoutGroup>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter experience by domain">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={`relative px-4 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
                      filter === f ? "text-bg" : "text-secondary hover:text-primary border border-border"
                    }`}
                  >
                    {filter === f && (
                      <motion.span
                        layoutId="chronicle-filter"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{f}</span>
                  </button>
                ))}
              </div>
            </LayoutGroup>
          </div>
        </div>

        <div ref={listRef} className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          <motion.div style={{ scaleY: line }} className="absolute left-0 top-0 bottom-0 w-px bg-accent origin-top" />

          <ul>
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <Entry key={item.org + item.role} item={item} index={i} />
              ))}
            </AnimatePresence>
          </ul>
        </div>

        {/* Education footnote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-20 grid md:grid-cols-12 gap-6 md:gap-8"
        >
          <p className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted pt-2">Education</p>
          <div className="md:col-span-9">
            <p className="text-2xl md:text-3xl font-serif text-primary">{education.degree}</p>
            <p className="mt-1 text-secondary font-light">{education.school}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {education.certs.map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-full text-xs border border-border text-secondary">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chronicle;

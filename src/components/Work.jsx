import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { caseStudies, moreWork } from "../data/content";
import { useAmbient } from "../lib/interaction";
import { ChapterLabel, Magnetic, MaskLines, RollText } from "./ui";

const ease = [0.16, 1, 0.3, 1];
const TABS = ["Challenge", "Build", "Craft", "Outcome"];

/* ---------- Tilt frame with a specular highlight that follows the pointer ---------- */

const TiltFrame = ({ children, color }) => {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16 });
  const sheen = useMotionTemplate`radial-gradient(600px circle at ${gx}% ${gy}%, rgba(255,255,255,0.22), transparent 45%)`;

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 8);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: srx, rotateY: sry, backgroundColor: color, transformStyle: "preserve-3d" }}
        className="relative aspect-[4/3] rounded-sm overflow-hidden"
      >
        {children}
        <motion.div style={{ background: sheen }} className="absolute inset-0 pointer-events-none mix-blend-soft-light" />
      </motion.div>
    </div>
  );
};

/* ---------- Visuals ---------- */

const ImageVisual = ({ study }) => (
  <div className="absolute inset-0 flex items-center justify-center p-10 md:p-16">
    <div
      className="absolute inset-0 opacity-60"
      style={{ background: `radial-gradient(circle at 30% 20%, ${study.accent}55, transparent 60%)` }}
    />
    <img
      src={study.image}
      alt={`${study.title} preview`}
      loading="lazy"
      className="relative max-h-full max-w-full object-contain drop-shadow-2xl"
      style={{ transform: "translateZ(40px)" }}
    />
  </div>
);

const TypeVisual = ({ study }) => (
  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-white">
    <div
      className="absolute inset-0"
      style={{ background: `radial-gradient(circle at 75% 25%, ${study.accent}66, transparent 55%), radial-gradient(circle at 10% 90%, #00000066, transparent 60%)` }}
    />
    <p className="relative font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">{study.context}</p>
    <p className="relative font-serif italic text-6xl md:text-8xl leading-none" style={{ transform: "translateZ(50px)" }}>
      {study.title}
    </p>
    <div className="relative flex flex-wrap gap-2" style={{ transform: "translateZ(30px)" }}>
      {study.stack.map((s, i) => (
        <motion.span
          key={s}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease }}
          className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/20 backdrop-blur-sm"
        >
          {s}
        </motion.span>
      ))}
    </div>
  </div>
);

const CraftVisual = ({ study }) => {
  const tiles = [
    { big: "700+", small: "creatives & reels" },
    { big: "10+", small: "client accounts" },
    { big: "AU ⇄ NP", small: "remote, two markets" },
    { big: "Trails", small: "race-day documentary" },
  ];
  return (
    <div className="absolute inset-0 p-6 md:p-10 grid grid-cols-2 gap-3 md:gap-4 text-white">
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 80% 10%, ${study.accent}55, transparent 55%)` }}
      />
      {tiles.map((t, i) => (
        <motion.div
          key={t.big}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease }}
          className="relative rounded-sm bg-black/20 border border-white/15 backdrop-blur-sm p-4 md:p-6 flex flex-col justify-end"
          style={{ transform: `translateZ(${20 + i * 10}px)` }}
        >
          <p className="font-serif text-3xl md:text-5xl leading-none">{t.big}</p>
          <p className="mt-2 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-75">{t.small}</p>
        </motion.div>
      ))}
    </div>
  );
};

const Visual = ({ study }) => {
  if (study.id === "craft") return <CraftVisual study={study} />;
  if (study.image) return <ImageVisual study={study} />;
  return <TypeVisual study={study} />;
};

/* ---------- One exhibit ---------- */

const Exhibit = ({ study, index }) => {
  const ref = useRef(null);
  const { setColor } = useAmbient();
  const inView = useInView(ref, { amount: 0.45 });
  const [tab, setTab] = useState(TABS[0]);
  const tabRefs = useRef([]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const numberY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  useEffect(() => {
    if (inView) setColor(study.ambient);
  }, [inView, study.ambient, setColor]);

  const onTabKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setTab(TABS[next]);
    tabRefs.current[next]?.focus();
  };

  const reversed = index % 2 === 1;

  return (
    <article ref={ref} className="relative py-16 md:py-28 border-t border-border">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Story column */}
        <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
          <div className="flex items-start gap-5">
            <motion.span
              style={{ y: numberY, WebkitTextStroke: `1px ${study.accent}` }}
              className="font-serif text-7xl md:text-8xl leading-none text-transparent select-none"
              aria-hidden="true"
            >
              {study.number}
            </motion.span>
            <div className="pt-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{study.kicker}</p>
            </div>
          </div>

          <MaskLines lines={[study.title]} as="h3" className="mt-6 text-display text-primary" />

          {/* Chapter tabs */}
          <div role="tablist" aria-label={`${study.title} story`} className="mt-10 flex gap-1 border-b border-border">
            {TABS.map((t, i) => (
              <button
                key={t}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`${study.id}-tab-${t}`}
                aria-selected={tab === t}
                aria-controls={`${study.id}-panel`}
                tabIndex={tab === t ? 0 : -1}
                onClick={() => setTab(t)}
                onKeyDown={(e) => onTabKey(e, i)}
                className={`relative px-3 py-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  tab === t ? "text-primary" : "text-muted hover:text-secondary"
                }`}
              >
                <span className="opacity-50 mr-1">0{i + 1}</span>
                {t}
                {tab === t && (
                  <motion.span
                    layoutId={`${study.id}-underline`}
                    className="absolute left-0 right-0 -bottom-px h-[2px]"
                    style={{ backgroundColor: study.accent }}
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div
            id={`${study.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${study.id}-tab-${tab}`}
            className="relative min-h-[170px] md:min-h-[150px] pt-6"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={tab}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease }}
                className="text-base md:text-[17px] font-light leading-[1.8] text-secondary"
              >
                {study.chapters[tab]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {study.link ? (
              <Magnetic strength={0.25}>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-border-hover px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-primary hover:border-transparent transition-colors"
                  style={{ "--hover": study.accent }}
                >
                  <RollText>{study.link.includes("github") ? "View source" : "Visit live site"}</RollText>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </Magnetic>
            ) : (
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Case study in progress</span>
            )}
          </div>
        </div>

        {/* Visual column */}
        <motion.div style={{ y: visualY }} className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
          <motion.div
            initial={{ clipPath: "inset(12% 12% 12% 12% round 4px)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 4px)", opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.3, ease }}
          >
            <TiltFrame color={study.ambient}>
              <Visual study={study} />
            </TiltFrame>
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
};

/* ---------- More work: list with a cursor-following preview ---------- */

const MoreWork = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 22 });
  const sy = useSpring(y, { stiffness: 200, damping: 22 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <div className="mt-24 md:mt-32">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted mb-6">Also in the archive</p>
      <div ref={ref} onPointerMove={onMove} onPointerLeave={() => setActive(null)} className="relative">
        {moreWork.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            onPointerEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6, ease }}
            className="group flex items-center justify-between gap-6 py-6 md:py-8 border-t border-border last:border-b"
          >
            <span className="flex items-baseline gap-5">
              <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
              <span className="text-3xl md:text-5xl font-serif text-primary transition-transform duration-500 ease-out-expo group-hover:translate-x-3">
                {p.title}
              </span>
            </span>
            <span className="flex items-center gap-4">
              <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{p.kind}</span>
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:-rotate-45">
                →
              </span>
            </span>
          </motion.a>
        ))}

        {/* Floating preview, mouse only */}
        <motion.div
          style={{ x: sx, y: sy }}
          className="pointer-events-none absolute top-0 left-0 z-20 hidden md:block"
          aria-hidden="true"
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
                transition={{ duration: 0.35, ease }}
                className="w-72 aspect-[4/3] rounded-sm overflow-hidden bg-surface shadow-2xl border border-border"
              >
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={moreWork[active].image}
                    src={moreWork[active].image}
                    alt=""
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-contain p-6"
                  />
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ---------- Act ---------- */

const Work = () => (
  <section id="work" data-chapter="work" className="section-padding relative">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <ChapterLabel index="02" label="Exhibits" className="mb-16 md:mb-24" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-16">
        <MaskLines lines={["Four exhibits,", <em key="e">each with a story.</em>]} className="text-headline text-primary" />
        <p className="max-w-sm text-sm md:text-base font-light leading-relaxed text-secondary">
          Every exhibit opens on the same four chapters: the challenge, what I built, how it was crafted, and what came of it.
        </p>
      </div>

      {caseStudies.map((s, i) => (
        <Exhibit key={s.id} study={s} index={i} />
      ))}

      <MoreWork />
    </div>
  </section>
);

export default Work;

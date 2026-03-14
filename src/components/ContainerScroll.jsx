import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [8, 0] : [20, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.88, 0.98] : [1.05, 1]
  );
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -30] : [0, -100]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <div
      className="h-[38rem] md:h-[70rem] flex items-center justify-center relative px-3 py-8 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-6 md:py-32 w-full relative"
        style={{ perspective: "1200px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} opacity={opacity}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center px-2"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({ rotate, scale, opacity, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        opacity,
      }}
      className="max-w-5xl -mt-6 md:-mt-12 mx-auto h-[20rem] md:h-[36rem] w-full relative rounded-2xl md:rounded-[32px] overflow-hidden"
    >
      {/* Liquid glass outer shell */}
      <div className="absolute inset-0 rounded-2xl md:rounded-[32px] bg-white/70 dark:bg-white/[0.06] backdrop-blur-2xl border border-slate-900/10 dark:border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.12),0_1px_4px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]" />

      {/* Shimmer / light refraction layer */}
      <div className="absolute inset-0 rounded-2xl md:rounded-[32px] overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.08)_60deg,transparent_120deg,rgba(244,63,94,0.04)_200deg,transparent_280deg,rgba(255,255,255,0.06)_340deg,transparent_360deg)] dark:bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.04)_60deg,transparent_120deg,rgba(244,63,94,0.06)_200deg,transparent_280deg,rgba(255,255,255,0.03)_340deg,transparent_360deg)] animate-spin-slow" />
      </div>

      {/* Top highlight / specular */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent" />

      {/* Inner content */}
      <div className="relative z-10 h-full w-full p-1.5 md:p-4">
        <div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default ContainerScroll;

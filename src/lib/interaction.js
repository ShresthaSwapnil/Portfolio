import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { chapters } from "../data/content";

/* ---------- Smooth scrolling ---------- */

let lenisInstance = null;
export const setLenis = (l) => {
  lenisInstance = l;
};

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: 0, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

/* ---------- Reduced motion ---------- */

export const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

/* ---------- Live Kathmandu clock (NPT, UTC+5:45) ---------- */

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kathmandu",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export const useKathmanduClock = () => {
  const read = () => {
    const time = formatter.format(new Date());
    const hour = Number(time.slice(0, 2));
    return { time, awake: hour >= 8 && hour < 23 };
  };
  const [state, setState] = useState(read);
  useEffect(() => {
    const id = setInterval(() => setState(read()), 15000);
    return () => clearInterval(id);
  }, []);
  return state;
};

/* ---------- Active Chapter Tracker ---------- */

export const useActiveChapter = () => {
  const [active, setActive] = useState(chapters[0].id);
  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
};

/* ---------- Ambient mood ---------- */

const AmbientContext = createContext({ color: null, setColor: () => {} });
export const AmbientProvider = AmbientContext.Provider;
export const useAmbient = () => useContext(AmbientContext);

/* ---------- Clipboard ---------- */

export const useCopy = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), timeout);
        return true;
      } catch {
        return false;
      }
    },
    [timeout]
  );
  return { copied, copy };
};

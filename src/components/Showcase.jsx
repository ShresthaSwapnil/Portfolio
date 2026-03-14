import { ContainerScroll } from "./ContainerScroll";

const capabilities = [
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Flutter & React Native",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Figma & Prototyping",
  },
  {
    icon: "⚡",
    title: "Backend",
    desc: "Python & Node.js",
  },
  {
    icon: "🧠",
    title: "AI Integration",
    desc: "Gemini & TensorFlow",
  },
  {
    icon: "🤖",
    title: "Automation",
    desc: "n8n & Workflow Ops",
  },
  {
    icon: "📸",
    title: "Content Design",
    desc: "Social Media & Graphics",
  },
];

const Showcase = () => {
  return (
    <section className="relative bg-[#FDFBF7] dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Ambient background blobs for the liquid glass feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-rose-200/30 dark:bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 bg-sky-200/20 dark:bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[30rem] h-80 md:h-[30rem] bg-violet-200/15 dark:bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <ContainerScroll
        titleComponent={
          <div className="mb-4 md:mb-8">
            <p className="text-rose-500 font-serif italic text-base md:text-lg mb-2 md:mb-4">
              What I Do
            </p>
            <h2 className="text-2xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              Turning ideas into
              <br />
              <span className="bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent">
                pixel-perfect
              </span>{" "}
              experiences
            </h2>
          </div>
        }
      >
        {/* Inner glass content */}
        <div className="h-full w-full flex flex-col items-center justify-center p-3 md:p-10 bg-white/50 dark:bg-slate-900/60 backdrop-blur-md rounded-xl md:rounded-2xl">
          <div className="grid grid-cols-3 gap-2 md:gap-5 w-full max-w-3xl">
            {capabilities.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/80 dark:bg-white/[0.06] backdrop-blur-lg rounded-xl md:rounded-2xl p-2.5 md:p-6 border border-slate-900/10 dark:border-white/10 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 dark:hover:shadow-rose-500/10 transition-all duration-300 text-center hover:-translate-y-1"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-rose-500/0 to-violet-500/0 group-hover:from-rose-500/5 group-hover:to-violet-500/5 dark:group-hover:from-rose-500/10 dark:group-hover:to-violet-500/10 transition-all duration-500 pointer-events-none" />

                <span className="relative text-xl md:text-4xl block mb-1 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <h3 className="relative font-semibold text-slate-800 dark:text-slate-200 text-[11px] md:text-base leading-tight">
                  {item.title}
                </h3>
                <p className="relative text-[9px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 md:mt-1.5 hidden md:block">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Showcase;

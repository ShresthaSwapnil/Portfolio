import { useState, useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef(null);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/SwapnilCV.pdf";
    link.download = "SwapnilCV.pdf";
    link.click();
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Create the observer
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      { threshold: 0.5 } // Set section as active when 50% is visible
    );

    // Observe each section
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border-b border-black/20 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1
              className="font-nepaliFont text-5xl font-bold text-gray-900 dark:text-white cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              :jlKgn
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {["home", "about", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "text-green-700 dark:text-green-500 font-bold"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <button
                onClick={handleDownloadCV}
                className="p-2 rounded-lg bg-green-700 text-white hover:bg-green-800"
              >
                Download CV
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

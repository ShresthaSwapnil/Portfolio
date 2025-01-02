import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const yValue = window.innerHeight;

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Swapnil CV.pdf"; // Replace with the actual path to your CV file
    link.download = "Swapnil CV.pdf"; // Replace with your desired file name
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
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const sectionIndex = Math.min(
        sections.length - 1,
        Math.floor(scrollPercent * sections.length)
      );
      setActiveSection(sections[sectionIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1
              className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Portfolio
            </h1>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={handleDownloadCV}
              className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Download CV
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {["home", "about", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  // href={`#${section}`}
                  onClick={() => {
                    if (section === "home") {
                      window.scrollTo(0, 0);
                    } else if (section === "about") {
                      window.scrollTo(0, yValue);
                    } else if (section === "projects") {
                      window.scrollTo(0, yValue * 2);
                    } else if (section === "contact") {
                      window.scrollTo(0, yValue * 3);
                    }
                  }}
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <button
                onClick={handleDownloadCV}
                className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                Download CV
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
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

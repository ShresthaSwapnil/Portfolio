import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socials = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/ShresthaSwapnil",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/swapnil-shrestha-b5792925b/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/shresthaswapnil/",
      label: "Instagram",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:shresthaswapnil03@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-100/70 dark:bg-gray-900/70 backdrop-blur-sm py-5 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Swapnil Shrestha. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  const navItems: NavItem[] = [
    { id: "overview", label: "Overview", icon: "🏠" },
    { id: "about", label: "About", icon: "👋" },
    { id: "stack", label: "Stack", icon: "⚡" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "testimonials", label: "Reviews", icon: "⭐" },
    { id: "certifications", label: "Certs", icon: "🎓" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  const y = useTransform(scrollY, [0, 100], [100, 0]);
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const progressScaleX = useTransform(scrollY, [0, document.documentElement.scrollHeight - window.innerHeight], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      setIsVisible(window.scrollY > 300);

      // Find the current active section
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
          };
        }
        return null;
      }).filter(Boolean);

      const currentSection = sections.find(section =>
        section && scrollPosition >= section.top && scrollPosition < section.bottom
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Navigation */}
      <motion.div
        style={{ y, opacity }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-300/50 dark:border-gray-700/50 rounded-2xl p-3 shadow-2xl">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300 ${activeSection === item.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{item.icon}</span>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  {item.label}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-700"></div>
                </motion.div>

                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-blue-500 rounded-xl"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 z-50 p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp size={20} />
      </motion.button>

      {/* Mobile Navigation Dots */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden"
      >
        <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-300/50 dark:border-gray-700/50 rounded-full px-4 py-3 shadow-xl">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === item.id
                ? "bg-blue-500 scale-125"
                : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400"
                }`}
              whileTap={{ scale: 0.8 }}
            >
              <span className="sr-only">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{
          scaleX: progressScaleX
        }}
      />
    </>
  );
};

export default FloatingNav; 
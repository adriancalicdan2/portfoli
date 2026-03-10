"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

const techIcons = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss, name: "CSS3", color: "#1572B6" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

export function TechStack() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 w-16 md:w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-16 md:w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
      
      {/* Scrolling container */}
      <motion.div
        animate={{
          x: [0, -1600],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        className="flex gap-6 md:gap-8 absolute whitespace-nowrap"
      >
        {/* Triple the icons for seamless loop */}
        {[...techIcons, ...techIcons, ...techIcons].map((tech, index) => (
          <motion.div
            key={index}
            className="inline-flex flex-col items-center gap-1 md:gap-2"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <tech.Icon 
              className="w-8 h-8 md:w-10 md:h-10" 
              style={{ color: tech.color }}
            />
            <span className="text-xs md:text-sm text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
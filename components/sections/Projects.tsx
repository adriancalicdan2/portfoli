"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { resumeData } from "@/lib/data/resume-data";
import { useState } from "react";

export function Projects() {
  const [filter, setFilter] = useState("all");
  
  const allTech = Array.from(
    new Set(resumeData.projects.flatMap(p => p.tech))
  );

  const filteredProjects = filter === "all" 
    ? resumeData.projects 
    : resumeData.projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full mb-6 md:mb-8" />
          
          {/* Filter buttons - scrollable on mobile */}
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 mt-4 md:mt-8 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0">
            <button
              onClick={() => setFilter("all")}
              className={`flex-shrink-0 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base ${
                filter === "all"
                  ? "bg-gradient-to-r from-indigo-600 to-emerald-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              All
            </button>
            {allTech.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`flex-shrink-0 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base ${
                  filter === tech
                    ? "bg-gradient-to-r from-indigo-600 to-emerald-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 md:px-0">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border border-gray-800 hover:border-indigo-500/50"
            >
              {/* Project image placeholder */}
              <div className="h-36 md:h-48 bg-gradient-to-br from-indigo-900/50 to-emerald-900/50 flex items-center justify-center">
                <Code2 className="h-12 w-12 md:h-16 md:w-16 text-indigo-500/30" />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-800 text-indigo-300 rounded-full text-xs md:text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 md:gap-4">
                  {project.title === "Employee Leave & Schedule Request System" && (
                    <>
                      <a
                        href="https://github.com/adriancalicdan2/requesttracker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                      >
                        <Github className="h-4 w-4 md:h-5 md:w-5" />
                        <span>Code</span>
                      </a>
                      <a
                        href="https://lcemployee.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                        <span>Live Demo</span>
                      </a>
                    </>
                  )}
                  
                  {project.title === "Employees Break Time Monitoring" && (
                    <a
                      href="https://lcbreak.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
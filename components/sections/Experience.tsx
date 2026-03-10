"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { resumeData } from "@/lib/data/resume-data";

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Work Experience & Education
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-600 to-emerald-600" />

          {/* Work Experience */}
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={`work-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-6 md:mb-12"
            >
              {/* Mobile timeline dot */}
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-indigo-600 to-emerald-600 md:hidden" />
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-gray-900 md:hidden" />

              {/* Content */}
              <div className="md:w-1/2 md:mx-auto pl-4 md:pl-0">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
                  <div className="flex items-center gap-2 text-indigo-400 mb-2">
                    <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base font-semibold">{exp.role}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                    {exp.company}
                  </h3>

                  <div className="flex items-center gap-4 text-gray-400 mb-3 md:mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="text-sm md:text-base">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 md:space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm md:text-base text-gray-300"
                      >
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={`edu-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mb-6 md:mb-12"
            >
              {/* Mobile timeline dot */}
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-emerald-600 to-indigo-600 md:hidden" />
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-gray-900 md:hidden" />
              
              {/* Content */}
              <div className="md:w-1/2 md:mx-auto pl-4 md:pl-0">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base font-semibold">Education</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-sm md:text-base text-gray-400 mb-2">{edu.school}</p>

                  <div className="flex items-center gap-1 text-gray-400 mb-3 md:mb-4">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="text-sm md:text-base">{edu.period}</span>
                  </div>

                  <ul className="space-y-1.5 md:space-y-2">
                    {edu.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm md:text-base text-gray-300"
                      >
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
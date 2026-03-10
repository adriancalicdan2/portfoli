"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data/resume-data";
import { 
  Network, 
  HardDrive, 
  Code2, 
  Wrench,
  Monitor,
  type LucideIcon
} from "lucide-react";
import { TechStack } from "./TechStack";

type SkillCategory = keyof typeof resumeData.skills;

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  "Operating Systems": Monitor,
  "Networking": Network,
  "Hardware": HardDrive,
  "Development": Code2,
  "Tools": Wrench,
};

export function Skills() {
  const getPercentage = (skill: string): number => {
    const hash = skill.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return 70 + (hash % 25);
  };

  return (
    <section id="skills" className="py-12 md:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">Technical Expertise</h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tech Stack - reduced margin */}
        <div className="mb-6 md:mb-8">
          <TechStack />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {(Object.entries(resumeData.skills) as [SkillCategory, string[]][]).map(([category, skills], categoryIndex) => {
            const Icon = categoryIcons[category] || Code2;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="p-2 md:p-2.5 bg-gray-900 rounded-lg border border-gray-700">
                    <Icon className="h-5 w-5 md:h-5 md:w-5 text-indigo-400" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white">{category}</h3>
                </div>

                <div className="space-y-2.5 md:space-y-3">
                  {skills.map((skill, index) => {
                    const percentage = getPercentage(skill);
                    
                    return (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs md:text-sm text-gray-300">{skill}</span>
                          <span className="text-xs md:text-xs text-indigo-400 font-semibold">
                            {percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-1.5 md:h-1.5 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages - reduced margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8 bg-gray-800/50 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all"
        >
          <h3 className="text-base md:text-lg font-bold mb-3 text-white">Languages</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {resumeData.languages.map((lang, index) => (
              <div
                key={index}
                className="px-3 py-1.5 md:px-3 md:py-1.5 bg-gray-900 text-indigo-300 rounded-lg border border-gray-700 text-xs md:text-sm"
              >
                {lang}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
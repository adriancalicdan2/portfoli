"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Phone, MapPin, X, ZoomIn } from "lucide-react";
import { resumeData } from "@/lib/data/resume-data";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-16 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900" />
      
      {/* Animated background elements - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      {/* Image Viewer Modal */}
      {isImageViewerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          onClick={() => setIsImageViewerOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsImageViewerOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white bg-gray-900/50 hover:bg-gray-900 rounded-full p-2 transition-all z-10"
          >
            <X className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full min-h-[50vh] md:min-h-[70vh]">
              <Image
                src="/images/avatar.jpg"
                alt={resumeData.personal.name}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            
            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
              <p className="text-white text-sm md:text-base">{resumeData.personal.name}</p>
              <p className="text-gray-300 text-xs md:text-sm">{resumeData.personal.title}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Avatar - Clickable */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 md:mb-8 relative group"
          >
            <div 
              className="relative w-24 h-24 md:w-32 md:h-32 mx-auto cursor-pointer"
              onClick={() => setIsImageViewerOpen(true)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-emerald-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              {/* Avatar image */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-600/50 ring-2 ring-emerald-600/50 group-hover:border-indigo-400 group-hover:ring-emerald-400 transition-all">
                <Image
                  src="/images/avatar.jpg"
                  alt={resumeData.personal.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Zoom indicator on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 px-2">
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              {resumeData.personal.name}
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 h-12 md:h-16 px-2">
            <TypeAnimation
              sequence={[
                'IT Specialist',
                2000,
                'System Administrator',
                2000,
                'Network Technician',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-300"
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
            {resumeData.personal.summary}
          </p>

          {/* Contact badges */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 max-w-full">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-gray-700 w-full sm:w-auto justify-center max-w-full">
              <Mail className="h-4 w-4 text-indigo-400 flex-shrink-0" />
              <span className="text-sm md:text-base text-gray-300 sm:truncate md:overflow-visible md:whitespace-normal md:max-w-none max-w-[180px] sm:max-w-[200px] md:max-w-full">
                {resumeData.personal.email}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-gray-700 w-full sm:w-auto justify-center max-w-full">
              <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span className="text-sm md:text-base text-gray-300">{resumeData.personal.phone}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-gray-700 w-full sm:w-auto justify-center max-w-full">
              <MapPin className="h-4 w-4 text-indigo-400 flex-shrink-0" />
              <span className="text-sm md:text-base text-gray-300">{resumeData.personal.location}</span>
            </div>
          </div>

          {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 px-4">
  <a
    href="#contact"
    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:from-indigo-700 hover:to-emerald-700 transition-all font-semibold text-base md:text-lg shadow-lg hover:shadow-xl text-center"
  >
    Hire Me
  </a>
  <a
    href="/AdrianCalicdan.pdf"
    download="AdrianCalicdan.pdf"
    className="w-full sm:w-auto bg-gray-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-700 transition-colors font-semibold text-base md:text-lg shadow-lg hover:shadow-xl border border-gray-700 flex items-center justify-center gap-2"
  >
    <Download className="h-5 w-5" />
    Download CV
  </a>
</div>

         
        </motion.div>
      </div>
    </section>
  );
}
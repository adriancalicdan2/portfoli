"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, CheckCircle } from "lucide-react";
import { resumeData } from "@/lib/data/resume-data";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full mb-6 md:mb-8" />
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind or want to discuss opportunities? Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 md:space-y-6">
              <div className="bg-gray-900 border border-gray-800 p-4 md:p-6 rounded-xl hover:border-indigo-500/50 transition-all">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Contact Information</h3>
                <div className="space-y-3 md:space-y-4">
                  <div 
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={handleCopyEmail}
                  >
                    <div className="p-2 md:p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm text-gray-400">Email</p>
                      <p className="text-sm md:text-base font-medium text-white flex items-center gap-2 truncate">
                        <span className="truncate">{resumeData.personal.email}</span>
                        {copied ? (
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-500 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 md:p-3 bg-gray-800 rounded-lg">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-400">Phone</p>
                      <p className="text-sm md:text-base font-medium text-white">{resumeData.personal.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 md:p-3 bg-gray-800 rounded-lg">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-400">Location</p>
                      <p className="text-sm md:text-base font-medium text-white">{resumeData.personal.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* References */}
              <div className="bg-gray-900 border border-gray-800 p-4 md:p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">References</h3>
                <div className="space-y-3 md:space-y-4">
                  {resumeData.references.map((ref, index) => (
                    <div key={index} className="border-b border-gray-800 last:border-0 pb-3 last:pb-0">
                      <p className="font-semibold text-white text-sm md:text-base">{ref.name}</p>
                      <p className="text-xs md:text-sm text-gray-400">{ref.position}</p>
                      <p className="text-xs text-gray-500 truncate">{ref.email}</p>
                      <p className="text-xs text-gray-500">{ref.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 p-4 md:p-8 rounded-xl hover:border-indigo-500/50 transition-all">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Send a Message</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-300">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 text-sm md:text-base resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg hover:from-indigo-700 hover:to-emerald-700 transition-all font-semibold text-sm md:text-base flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 md:h-5 md:w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
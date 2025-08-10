'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Code, 
  Brain, 
  Award, 
  Users, 
  ExternalLink, 
  X,
  Heart,
  Coffee,
  Zap,
  Target,
  TrendingUp,
  BookOpen
} from 'lucide-react'

const Footer = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState<{
    title: string
    content: any
    type: 'contact' | 'about' | 'services' | 'journey' | 'stats' | 'resources'
  } | null>(null)

  const contactInfo = {
    email: "abhinesh1455@gmail.com",
    phone: "+91-XXXXXXXXXX",
    location: "India",
    availability: "Available for freelance projects and full-time opportunities",
    response: "Usually responds within 24 hours",
    timezone: "IST (UTC+5:30)"
  }

  const aboutInfo = {
    mission: "To create intelligent AI solutions that solve real-world problems and make technology more accessible to everyone.",
    vision: "Building the future where AI augments human capabilities and drives positive change across industries.",
    values: ["Innovation", "Integrity", "Excellence", "Collaboration", "Continuous Learning"],
    passion: "Passionate about computer vision, machine learning, and creating systems that can understand and interact with the world intelligently."
  }

  const servicesInfo = {
    aiml: [
      "Custom AI Model Development",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "Machine Learning Consulting",
      "AI System Integration"
    ],
    web: [
      "Full-Stack Web Development",
      "API Development & Integration",
      "Database Design & Optimization",
      "Responsive UI/UX Design",
      "Performance Optimization"
    ],
    consulting: [
      "AI Strategy & Planning",
      "Technical Architecture Review",
      "Code Review & Optimization",
      "Team Training & Mentoring",
      "Project Management"
    ]
  }

  const journeyStats = {
    experience: "2+ Years",
    projects: "15+ Completed",
    technologies: "20+ Mastered",
    clients: "100% Satisfaction",
    contributions: "Open Source Active",
    learning: "Continuous Growth"
  }

  const resources = {
    portfolio: "Explore my complete project portfolio",
    github: "View source code and contributions",
    linkedin: "Professional network and updates",
    blog: "Technical articles and insights",
    resume: "Download detailed resume",
    contact: "Get in touch for opportunities"
  }

  const openModal = (type: 'contact' | 'about' | 'services' | 'journey' | 'stats' | 'resources', title: string, content: any) => {
    setModalContent({ title, content, type })
    setShowModal(true)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900/50 to-transparent py-16 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">About Abhinesh</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              AI Engineer & Data Scientist passionate about creating intelligent solutions that make a difference.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal('about', 'About Me', aboutInfo)}
              className="text-neon-blue hover:text-neon-purple transition-colors text-sm flex items-center gap-2"
            >
              Learn More <ExternalLink className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <div className="space-y-2">
              {['AI/ML Development', 'Web Development', 'Consulting'].map((service) => (
                <motion.button
                  key={service}
                  whileHover={{ x: 5 }}
                  onClick={() => openModal('services', 'My Services', servicesInfo)}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal('contact', 'Contact Information', contactInfo)}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 text-neon-blue group-hover:text-neon-purple transition-colors" />
                <span>abhinesh1455@gmail.com</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal('contact', 'Contact Information', contactInfo)}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <MapPin className="w-4 h-4 text-neon-green group-hover:text-neon-blue transition-colors" />
                <span>India</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal('contact', 'Contact Information', contactInfo)}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <Calendar className="w-4 h-4 text-neon-purple group-hover:text-neon-pink transition-colors" />
                <span>Available for Projects</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Stats & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <div className="space-y-2">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => openModal('stats', 'Journey Stats', journeyStats)}
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                My Journey Stats
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => openModal('resources', 'Useful Resources', resources)}
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Portfolio Resources
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          <motion.a
            href="https://github.com/Abh1neshSingh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abhinesh-singh-5857b8239/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors" />
          </motion.a>
          <motion.button
            onClick={() => openModal('contact', 'Contact Information', contactInfo)}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-white group-hover:text-neon-purple transition-colors" />
          </motion.button>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="text-white/60 text-sm mb-2">
            © {currentYear} Abhinesh Singh. All rights reserved.
          </p>
          <motion.p 
            className="text-white/40 text-xs flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> and <Coffee className="w-4 h-4 text-amber-400" /> using Next.js & AI
          </motion.p>
        </motion.div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {showModal && modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-card p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple">
                  {modalContent.type === 'contact' && <Mail className="w-8 h-8 text-white" />}
                  {modalContent.type === 'about' && <Users className="w-8 h-8 text-white" />}
                  {modalContent.type === 'services' && <Code className="w-8 h-8 text-white" />}
                  {modalContent.type === 'journey' && <Target className="w-8 h-8 text-white" />}
                  {modalContent.type === 'stats' && <TrendingUp className="w-8 h-8 text-white" />}
                  {modalContent.type === 'resources' && <BookOpen className="w-8 h-8 text-white" />}
                </div>
                <h2 className="text-3xl font-bold text-white">{modalContent.title}</h2>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {modalContent.type === 'contact' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Get In Touch</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <Mail className="w-5 h-5 text-neon-blue" />
                          <span className="text-white/80">{modalContent.content.email}</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <MapPin className="w-5 h-5 text-neon-green" />
                          <span className="text-white/80">{modalContent.content.location}</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <Calendar className="w-5 h-5 text-neon-purple" />
                          <span className="text-white/80">{modalContent.content.timezone}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Availability</h3>
                      <p className="text-white/80 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        {modalContent.content.availability}
                      </p>
                      <p className="text-white/70 text-sm">
                        {modalContent.content.response}
                      </p>
                    </div>
                  </div>
                )}

                {modalContent.type === 'about' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Mission</h3>
                        <p className="text-white/80 leading-relaxed">{modalContent.content.mission}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Vision</h3>
                        <p className="text-white/80 leading-relaxed">{modalContent.content.vision}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Core Values</h3>
                      <div className="flex flex-wrap gap-3">
                        {modalContent.content.values.map((value: string) => (
                          <span
                            key={value}
                            className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 
                                     border border-neon-blue/30 rounded-full text-white/80"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
                      <p className="text-white/80 leading-relaxed p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        {modalContent.content.passion}
                      </p>
                    </div>
                  </div>
                )}

                {modalContent.type === 'services' && (
                  <div className="space-y-6">
                    {Object.entries(modalContent.content).map(([category, services]) => (
                      <div key={category} className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-3 capitalize flex items-center gap-2">
                          {category === 'aiml' && <Brain className="w-5 h-5 text-neon-blue" />}
                          {category === 'web' && <Code className="w-5 h-5 text-neon-green" />}
                          {category === 'consulting' && <Users className="w-5 h-5 text-neon-purple" />}
                          {category === 'aiml' ? 'AI/ML Services' : category === 'web' ? 'Web Development' : 'Consulting'}
                        </h3>
                        <div className="grid gap-3">
                          {(services as string[]).map((service, index) => (
                            <motion.div
                              key={service}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
                              <span className="text-white/80">{service}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {modalContent.type === 'stats' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {Object.entries(modalContent.content).map(([key, value]) => (
                      <div key={key} className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">{value as string}</div>
                        <div className="text-sm text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                )}

                {modalContent.type === 'resources' && (
                  <div className="grid gap-4">
                    {Object.entries(modalContent.content).map(([key, description]) => (
                      <div key={key} className="glass-card p-4 hover:bg-white/5 transition-colors">
                        <h4 className="text-lg font-semibold text-white mb-2 capitalize">{key}</h4>
                        <p className="text-white/70 text-sm">{description as string}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="https://github.com/Abh1neshSingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/abhinesh-singh-5857b8239/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer

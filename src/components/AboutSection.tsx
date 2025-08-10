'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Briefcase, Award, Zap, X, Code, Brain, MapPin, Calendar, ExternalLink, Github, Mail, Target, TrendingUp, Linkedin } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const [mode, setMode] = useState<'professional' | 'creative'>('professional')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState<{
    title: string
    content: any
    type: 'story' | 'achievements' | 'goals' | 'philosophy' | 'stats'
  } | null>(null)

  const detailedStory = {
    background: "Started my journey in Computer Science Engineering with a fascination for artificial intelligence and machine learning. What began as curiosity about how machines could 'think' evolved into a deep passion for creating intelligent systems.",
    motivation: "Driven by the belief that AI should augment human capabilities rather than replace them. Every project I undertake aims to solve real-world problems and make technology more accessible and beneficial.",
    vision: "To become a leading AI researcher and engineer who bridges the gap between cutting-edge research and practical applications that improve people's lives.",
    currentFocus: "Specializing in computer vision and real-time AI systems, with particular expertise in surveillance technology, object detection, and natural language processing."
  }

  const achievements = {
    technical: [
      "Developed AI Guardian - Real-time surveillance system achieving 24+ FPS processing",
      "Built high-accuracy Spam Text Classifier using advanced NLP techniques",
      "Mastered YOLOv8 and OpenPose for computer vision applications",
      "Created responsive web applications with Flask and modern frontend technologies"
    ],
    professional: [
      "Currently working as AI Evaluator at Outlier AI",
      "Successfully deployed multiple ML models to production",
      "Collaborated on improving LLM performance and behavior",
      "Built comprehensive data analysis and visualization solutions"
    ],
    personal: [
      "Self-taught advanced AI/ML concepts through hands-on projects",
      "Continuously learning and adapting to new technologies",
      "Strong problem-solving mindset with attention to detail",
      "Passionate about sharing knowledge and helping others learn"
    ]
  }

  const goals = {
    shortTerm: [
      "Complete advanced certifications in AI/ML",
      "Contribute to open-source AI projects",
      "Build more sophisticated computer vision applications",
      "Expand expertise in generative AI and LLMs"
    ],
    longTerm: [
      "Lead AI research initiatives in computer vision",
      "Develop AI solutions for healthcare and education",
      "Mentor the next generation of AI engineers",
      "Establish a reputation as a thought leader in AI ethics"
    ]
  }

  const philosophy = {
    approach: "I believe in learning by doing. Every project is an opportunity to push boundaries and explore new possibilities in AI.",
    values: ["Innovation", "Integrity", "Continuous Learning", "Collaboration", "Impact"],
    principles: [
      "AI should be transparent and explainable",
      "Technology should serve humanity's best interests",
      "Continuous learning is essential in the rapidly evolving AI field",
      "Collaboration leads to better solutions than working in isolation"
    ]
  }

  const openModal = (type: 'story' | 'achievements' | 'goals' | 'philosophy' | 'stats', title: string, content: any) => {
    setModalContent({ title, content, type })
    setShowModal(true)
  }

  const professionalNarrative = `
    As a Data Scientist and AI Engineer, I specialize in developing intelligent systems that bridge the gap between 
    complex data and actionable insights. With expertise in computer vision, machine learning, and generative AI, 
    I've successfully delivered projects ranging from real-time object detection systems to advanced spam 
    classification models. My technical proficiency spans Python, YOLOv8, Flask, PowerBI, and modern AI frameworks, 
    enabling me to create scalable solutions that drive business value.
  `

  const creativeNarrative = `
    Picture this: a world where machines don't just compute—they understand, perceive, and adapt. That's the future 
    I'm building, one algorithm at a time. From training neural networks to recognize human poses in real-time to 
    crafting AI systems that can distinguish spam from genuine communication, I'm not just writing code—I'm teaching 
    machines to think. Every project is a new adventure in the realm of artificial intelligence, where creativity 
    meets cutting-edge technology to solve tomorrow's challenges today.
  `

  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, label: "Projects Completed", value: "15+" },
    { icon: <Award className="w-6 h-6" />, label: "AI Models Deployed", value: "8+" },
    { icon: <Zap className="w-6 h-6" />, label: "Fresher", value: "Fresher" },
    { icon: <User className="w-6 h-6" />, label: "Satisfied Clients", value: "20+" },
  ]

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Discover the story behind the code and the passion driving innovation
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* AI-Generated Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          {/* Mode Toggle */}
          <div className="flex justify-center mb-6">
            <div className="glass p-1 rounded-full">
              <button
                onClick={() => setMode('professional')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  mode === 'professional'
                    ? 'bg-neon-blue text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Professional
              </button>
              <button
                onClick={() => setMode('creative')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  mode === 'creative'
                    ? 'bg-neon-purple text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Creative
              </button>
            </div>
          </div>

          {/* Narrative Content */}
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/80 leading-relaxed text-lg cursor-pointer hover:text-white transition-all duration-300 p-4 rounded-lg hover:bg-white/5"
            whileHover={{ scale: 1.02 }}
            onClick={() => openModal('story', 'My Complete Story', detailedStory)}
          >
            {mode === 'professional' ? professionalNarrative : creativeNarrative}
            <div className="mt-4 text-sm text-neon-blue hover:text-neon-purple transition-colors">
              Click to read my complete story →
            </div>
          </motion.div>

          {/* AI Badge */}
          <div className="mt-6 flex items-center gap-2 text-sm text-neon-blue">
            <Zap className="w-4 h-4" />
            <span>AI-Enhanced Narrative</span>
          </div>
        </motion.div>

        {/* Stats & Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center group cursor-pointer"
                onClick={() => {
                  if (index === 0) openModal('achievements', 'My Achievements', achievements)
                  else if (index === 1) openModal('achievements', 'Technical Achievements', achievements)
                  else if (index === 2) openModal('goals', 'My Goals & Vision', goals)
                  else openModal('philosophy', 'My Philosophy', philosophy)
                }}
              >
                <div className="text-neon-blue mb-3 flex justify-center group-hover:text-neon-purple transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">{stat.value}</div>
                <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">{stat.label}</div>
                <div className="mt-2 text-xs text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click for details →
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Profile Section */}
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            className="glass-card p-8 text-center relative overflow-hidden"
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-shimmer"></div>
            
            {/* Profile Image with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative w-40 h-40 mx-auto mb-6 cursor-pointer"
              onClick={() => openModal('story', 'About Abhinesh Singh', detailedStory)}
            >
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow p-1">
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </div>
              
              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src="/Adobe Express - file.png"
                  alt="Abhinesh Singh - Data Scientist & AI Engineer"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-500 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
            </motion.div>
            
            {/* Enhanced Name and Title */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold text-white mb-2 holographic"
            >
              Abhinesh Singh
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gradient mb-4"
            >
              Data Scientist & AI Engineer
            </motion.p>
            
            {/* Status Indicator with Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center items-center space-x-3"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="text-sm text-white/80 font-medium">Available for projects</span>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 flex justify-center space-x-4"
            >
              <a 
                href="https://github.com/Abh1neshSingh?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 magnetic"
              >
                <span className="text-white text-sm">🐙</span>
              </a>
              <a 
                href="#contact" 
                className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 magnetic"
              >
                <span className="text-white text-sm">📧</span>
              </a>
            </motion.div>
          </motion.div>
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
                  {modalContent.type === 'story' && <User className="w-8 h-8 text-white" />}
                  {modalContent.type === 'achievements' && <Award className="w-8 h-8 text-white" />}
                  {modalContent.type === 'goals' && <Target className="w-8 h-8 text-white" />}
                  {modalContent.type === 'philosophy' && <Brain className="w-8 h-8 text-white" />}
                  {modalContent.type === 'stats' && <TrendingUp className="w-8 h-8 text-white" />}
                </div>
                <h2 className="text-3xl font-bold text-white">{modalContent.title}</h2>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {modalContent.type === 'story' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-3">Background</h3>
                        <p className="text-white/80 leading-relaxed">{modalContent.content.background}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-3">Current Focus</h3>
                        <p className="text-white/80 leading-relaxed">{modalContent.content.currentFocus}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-3">Motivation</h3>
                        <p className="text-white/80 leading-relaxed">{modalContent.content.motivation}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-3">Vision</h3>
                        <p className="text-white/80 leading-relaxed">{modalContent.content.vision}</p>
                      </div>
                    </div>
                  </div>
                )}

                {modalContent.type === 'achievements' && (
                  <div className="space-y-6">
                    {Object.entries(modalContent.content).map(([category, items]) => (
                      <div key={category} className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-3 capitalize flex items-center gap-2">
                          {category === 'technical' && <Code className="w-5 h-5 text-neon-blue" />}
                          {category === 'professional' && <Briefcase className="w-5 h-5 text-neon-purple" />}
                          {category === 'personal' && <User className="w-5 h-5 text-neon-green" />}
                          {category} Achievements
                        </h3>
                        <div className="grid gap-3">
                          {(items as string[]).map((achievement, index) => (
                            <motion.div
                              key={achievement}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
                              <span className="text-white/80">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {modalContent.type === 'goals' && (
                  <div className="space-y-6">
                    {Object.entries(modalContent.content).map(([timeframe, goals]) => (
                      <div key={timeframe} className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-3 capitalize flex items-center gap-2">
                          <Target className="w-5 h-5 text-neon-blue" />
                          {timeframe.replace(/([A-Z])/g, ' $1')} Goals
                        </h3>
                        <div className="grid gap-3">
                          {(goals as string[]).map((goal, index) => (
                            <motion.div
                              key={goal}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="glass-card p-4"
                            >
                              <span className="text-white/80">{goal}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {modalContent.type === 'philosophy' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">My Approach</h3>
                      <p className="text-white/80 leading-relaxed">{modalContent.content.approach}</p>
                    </div>
                    
                    <div className="space-y-4">
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

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Guiding Principles</h3>
                      <div className="grid gap-3">
                        {modalContent.content.principles.map((principle: string, index: number) => (
                          <motion.div
                            key={principle}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-green to-neon-blue" />
                            <span className="text-white/80">{principle}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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
    </section>
  )
}

export default AboutSection

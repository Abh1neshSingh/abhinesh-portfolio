'use client'

import { useState, useEffect, Suspense, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center, Stars, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import Image from 'next/image'
import { User, Code, Brain, Award, MapPin, Calendar, X, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import TechIcons3D from './TechIcons3D'
import AITaglineGenerator from './AITaglineGenerator'

// Animated Background Particles Component
function AnimatedParticles() {
  const meshRef = useRef<THREE.Points>(null)
  const particlesCount = 1000
  
  const positions = new Float32Array(particlesCount * 3)
  const colors = new Float32Array(particlesCount * 3)
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    
    colors[i * 3] = Math.random()
    colors[i * 3 + 1] = 0.5 + Math.random() * 0.5
    colors[i * 3 + 2] = 1
  }
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.8} />
    </points>
  )
}

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState<{
    title: string
    content: any
    type: 'profile' | 'skills' | 'journey' | 'contact'
  } | null>(null)

  const profileData = {
    name: "Abhinesh Singh",
    title: "AI Engineer & Data Scientist",
    location: "India",
    experience: "2+ Years",
    specialization: "Computer Vision & Machine Learning",
    currentRole: "AI Evaluator at Outlier AI",
    education: "Computer Science Engineering",
    achievements: [
      "Built AI Guardian - Real-time surveillance system with 24+ FPS",
      "Developed Spam Text Classifier with high accuracy",
      "Specialized in YOLOv8 and OpenPose implementations",
      "Expert in Python, ML, and AI model deployment"
    ],
    stats: {
      projectsCompleted: "10+",
      technologiesMastered: "15+",
      yearsExperience: "2+",
      clientSatisfaction: "100%"
    }
  }

  const skillsOverview = {
    categories: [
      {
        name: "AI/ML",
        skills: ["YOLOv8", "OpenPose", "Deep Learning", "LLMs", "Computer Vision"],
        proficiency: 90
      },
      {
        name: "Programming",
        skills: ["Python", "SQL", "JavaScript", "Flask", "API Development"],
        proficiency: 88
      },
      {
        name: "Data Science",
        skills: ["Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Visualization"],
        proficiency: 92
      },
      {
        name: "Tools & Frameworks",
        skills: ["PowerBI", "Git", "Docker", "Cloud Platforms", "Database Management"],
        proficiency: 85
      }
    ]
  }

  const journeyData = {
    timeline: [
      {
        year: "2024-Present",
        title: "AI Evaluator - Outlier AI",
        description: "Evaluating AI-generated responses, prompt engineering, and improving LLM performance",
        achievements: ["Quality assessment of AI models", "Prompt optimization", "Model behavior analysis"]
      },
      {
        year: "2024",
        title: "AI Guardian Project",
        description: "Developed next-generation surveillance system with real-time processing",
        achievements: ["24+ FPS processing", "Multi-camera integration", "Real-time alerts"]
      },
      {
        year: "2024",
        title: "Spam Text Classifier",
        description: "Built ML model for SMS classification with web interface",
        achievements: ["High accuracy classification", "Responsive web app", "Real-time predictions"]
      },
      {
        year: "2023-2024",
        title: "AI/ML Specialization",
        description: "Intensive learning and hands-on projects in artificial intelligence",
        achievements: ["Computer Vision expertise", "Deep Learning mastery", "Production deployment"]
      }
    ]
  }

  const openModal = (type: 'profile' | 'skills' | 'journey' | 'contact', title: string, content: any) => {
    setModalContent({ title, content, type })
    setShowModal(true)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="animate-pulse text-neon-blue">Loading...</div>
      </section>
    )
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spectacular Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-shift"></div>
        </div>

        {/* Floating Orbs with Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-lg animate-float-medium"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-pink-500/35 to-purple-500/35 rounded-full blur-xl animate-float-slow"></div>
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="matrix-rain"></div>
        </div>

        {/* Enhanced 3D Background Scene */}
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.2} color="#00d4ff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
            <pointLight position={[0, 10, -10]} intensity={0.8} color="#f472b6" />
            <pointLight position={[5, -5, 5]} intensity={0.6} color="#10b981" />
            
            {/* Enhanced Animated Particle System */}
            <AnimatedParticles />
            
            {/* Multiple Floating Geometric Shapes */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <Sphere args={[0.5, 32, 32]} position={[-8, 2, -5]}>
                <meshStandardMaterial color="#00d4ff" transparent opacity={0.4} emissive="#00d4ff" emissiveIntensity={0.2} />
              </Sphere>
            </Float>
            
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
              <Sphere args={[0.3, 32, 32]} position={[8, -2, -3]}>
                <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} emissive="#8b5cf6" emissiveIntensity={0.3} />
              </Sphere>
            </Float>
            
            <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
              <Sphere args={[0.4, 32, 32]} position={[0, 4, -8]}>
                <meshStandardMaterial color="#f472b6" transparent opacity={0.3} emissive="#f472b6" emissiveIntensity={0.2} />
              </Sphere>
            </Float>

            <Float speed={2.2} rotationIntensity={3} floatIntensity={2.5}>
              <Sphere args={[0.25, 32, 32]} position={[-6, -4, -6]}>
                <meshStandardMaterial color="#10b981" transparent opacity={0.6} emissive="#10b981" emissiveIntensity={0.4} />
              </Sphere>
            </Float>

            <Float speed={1.3} rotationIntensity={0.8} floatIntensity={1.8}>
              <Sphere args={[0.35, 32, 32]} position={[6, 3, -4]}>
                <meshStandardMaterial color="#f59e0b" transparent opacity={0.4} emissive="#f59e0b" emissiveIntensity={0.3} />
              </Sphere>
            </Float>
            
            {/* Tech Icons */}
            <TechIcons3D />
            
            {/* Enhanced Stars Background */}
            <Stars radius={150} depth={80} count={8000} factor={6} saturation={0} fade speed={1.5} />
            
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>

        {/* Animated Neural Network Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-20">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <g className="animate-pulse-slow">
              <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-draw-line" />
              <line x1="20%" y1="80%" x2="80%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-draw-line-reverse" />
              <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-draw-line-vertical" />
              <circle cx="20%" cy="30%" r="3" fill="#00d4ff" className="animate-pulse-node" />
              <circle cx="80%" cy="70%" r="3" fill="#8b5cf6" className="animate-pulse-node" />
              <circle cx="50%" cy="50%" r="4" fill="#f472b6" className="animate-pulse-node" />
            </g>
          </svg>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-16 text-neon-blue/20 font-mono text-sm animate-float-code">
            {'{ "ai": "intelligence" }'}
          </div>
          <div className="absolute top-64 right-24 text-neon-purple/20 font-mono text-sm animate-float-code-reverse">
            {'import tensorflow as tf'}
          </div>
          <div className="absolute bottom-48 left-32 text-neon-green/20 font-mono text-sm animate-float-code">
            {'model.predict(data)'}
          </div>
          <div className="absolute bottom-32 right-40 text-neon-pink/20 font-mono text-sm animate-float-code-reverse">
            {'neural_network.train()'}
          </div>
        </div>

        {/* Pulsing Energy Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-96 h-96 border border-neon-blue/20 rounded-full animate-ping-slow"></div>
          <div className="absolute w-80 h-80 border border-neon-purple/30 rounded-full animate-ping-medium"></div>
          <div className="absolute w-64 h-64 border border-neon-pink/20 rounded-full animate-ping-fast"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 cursor-pointer group"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => openModal('profile', 'About Abhinesh Singh', profileData)}
          >
            <span className="text-white group-hover:text-gradient transition-all duration-300">Abhinesh</span>{' '}
            <span className="text-gradient group-hover:glow-text">Singh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 cursor-pointer hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal('skills', 'Skills Overview', skillsOverview)}
          >
            <span className="hover:text-gradient transition-all duration-300">Data Scientist</span> | 
            <span className="hover:text-gradient transition-all duration-300"> AI Engineer</span> | 
            <span className="hover:text-gradient transition-all duration-300"> Innovator</span>
          </motion.div>

          {/* AI-Generated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mb-12 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => openModal('journey', 'My AI Journey', journeyData)}
          >
            <div className="hover:glow-text transition-all duration-300">
              <AITaglineGenerator />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold text-lg neon-glow transition-all duration-300"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass-card text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-neon-blue rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

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
                  {modalContent.type === 'profile' && <User className="w-8 h-8 text-white" />}
                  {modalContent.type === 'skills' && <Code className="w-8 h-8 text-white" />}
                  {modalContent.type === 'journey' && <Brain className="w-8 h-8 text-white" />}
                  {modalContent.type === 'contact' && <Mail className="w-8 h-8 text-white" />}
                </div>
                <h2 className="text-3xl font-bold text-white">{modalContent.title}</h2>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {modalContent.type === 'profile' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Profile Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-neon-blue" />
                        <span className="text-white/80">{modalContent.content.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-neon-purple" />
                        <span className="text-white/80">{modalContent.content.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-neon-green" />
                        <span className="text-white/80">{modalContent.content.currentRole}</span>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">Specialization</h3>
                        <p className="text-white/80">{modalContent.content.specialization}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Stats</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(modalContent.content.stats).map(([key, value]) => (
                          <div key={key} className="glass-card p-4 text-center">
                            <div className="text-2xl font-bold text-gradient">{value as string}</div>
                            <div className="text-sm text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                      <div className="grid gap-3">
                        {modalContent.content.achievements.map((achievement: string, index: number) => (
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
                  </div>
                )}

                {modalContent.type === 'skills' && (
                  <div className="space-y-6">
                    {modalContent.content.categories.map((category: any, index: number) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-6"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                          <span className="text-neon-blue font-bold">{category.proficiency}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${category.proficiency}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill: string) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {modalContent.type === 'journey' && (
                  <div className="space-y-6">
                    {modalContent.content.timeline.map((item: any, index: number) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 relative"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{item.year.split('-')[0]}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-white/70 mb-4">{item.description}</p>
                            <div className="space-y-2">
                              {item.achievements.map((achievement: string, achIndex: number) => (
                                <div key={achIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                  <span className="text-white/60 text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
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
                    onClick={() => openModal('contact', 'Contact Information', {})}
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

export default HeroSection

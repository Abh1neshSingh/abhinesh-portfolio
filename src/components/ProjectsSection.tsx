'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { X, Github, ExternalLink, Calendar, Code, Zap, Target, Award, Users, Clock, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: "AI Guardian",
    description: "Next-generation real-time surveillance system integrating YOLOv8, OpenPose, and DeepSORT for precise object detection, pose estimation, and human activity tracking. Features automated suspicious activity detection with real-time voice alerts, email notifications, and snapshot capture.",
    image: "/projects/ai-guardian.jpg",
    technologies: ["Python", "Flask", "YOLOv8", "OpenPose", "DeepSORT", "OpenCV"],
    github: "https://github.com/Abh1neshSingh/ai-guardian",
    demo: "#",
    category: "AI/ML",
    year: "2025",
    features: ["24+ FPS processing", "Multi-camera integration", "Zone-based alerts", "IoT device controls"],
    detailedInfo: {
      overview: "AI Guardian represents the cutting-edge of surveillance technology, combining multiple AI models to create an intelligent monitoring system that can detect, track, and analyze human activities in real-time.",
      challenges: [
        "Achieving real-time processing at 24+ FPS with multiple AI models",
        "Integrating YOLOv8 object detection with OpenPose human pose estimation",
        "Implementing efficient multi-camera support and zone-based monitoring",
        "Creating reliable alert systems with voice notifications and email integration"
      ],
      solutions: [
        "Optimized model inference pipeline using GPU acceleration",
        "Efficient memory management and frame buffering techniques",
        "Modular architecture allowing easy addition of new camera sources",
        "Real-time communication system with WebSocket integration"
      ],
      impact: "Successfully deployed in multiple test environments, achieving 99.2% accuracy in object detection and 95% accuracy in activity recognition, with zero false positives in critical alert scenarios.",
      learnings: [
        "Advanced computer vision techniques and model optimization",
        "Real-time system architecture and performance tuning",
        "Integration of multiple AI models in production environment",
        "User experience design for security applications"
      ],
      metrics: {
        performance: "24+ FPS",
        accuracy: "99.2%",
        responseTime: "<100ms",
        uptime: "99.9%"
      }
    }
  },
  {
    title: "Spam Text Classifier",
    description: "Machine learning model using Naive Bayes and Scikit-learn to classify SMS messages as spam or non-spam with high accuracy. Features text preprocessing with tokenization, stopword removal, and stemming using NLTK for optimized feature extraction.",
    image: "/projects/spam-classifier.jpg",
    technologies: ["Python", "Flask", "Scikit-learn", "NLTK", "Pickle", "HTML", "CSS"],
    github: "https://github.com/Abh1neshSingh/Spam_Not-Spam_text_Classifier",
    demo: "#",
    category: "Machine Learning",
    year: "2024",
    features: ["Real-time predictions", "Responsive web app", "Intuitive UI", "Model deployment"],
    detailedInfo: {
      overview: "A comprehensive spam detection system that leverages natural language processing and machine learning to accurately classify SMS messages, protecting users from unwanted communications.",
      challenges: [
        "Handling diverse text patterns and languages in SMS messages",
        "Achieving high accuracy while minimizing false positives",
        "Creating an intuitive web interface for real-time predictions",
        "Optimizing model size for fast inference and deployment"
      ],
      solutions: [
        "Advanced text preprocessing pipeline with NLTK tokenization and stemming",
        "Feature engineering using TF-IDF vectorization for optimal text representation",
        "Naive Bayes algorithm selection for balanced accuracy and speed",
        "Flask web application with responsive design for cross-platform compatibility"
      ],
      impact: "Achieved 97.8% accuracy on test dataset with less than 1% false positive rate, successfully deployed as a web application serving real-time predictions.",
      learnings: [
        "Natural language processing techniques and text preprocessing",
        "Machine learning model selection and hyperparameter tuning",
        "Web application development and model deployment strategies",
        "User interface design for machine learning applications"
      ],
      metrics: {
        accuracy: "97.8%",
        precision: "98.1%",
        recall: "96.5%",
        f1Score: "97.3%"
      }
    }
  }
]

const categories = ["All", "AI/ML", "Machine Learning"]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing innovative AI solutions and full-stack applications that push the boundaries of technology.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'glass border border-blue-500/30 text-blue-300 hover:border-blue-400/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => {
                setSelectedProject(project)
                setShowModal(true)
              }}
              className="glass-card overflow-hidden hover:neon-glow transition-all duration-500 group relative cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.title.includes('AI Guardian') ? '🛡️' : '📧'}
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/80 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                  {project.year && (
                    <span className="px-3 py-1 bg-purple-500/80 text-white text-sm rounded-full">
                      {project.year}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                             rounded-lg text-center text-white font-medium
                             hover:from-blue-600 hover:to-purple-600 hover:scale-105
                             transition-all duration-300 flex items-center gap-2"
                  >
                    <span>🐙</span>
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
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
              className="glass-card p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
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
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-neon-blue" />
                      <span className="text-neon-blue font-semibold">{selectedProject.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-neon-purple" />
                      <span className="text-neon-purple font-semibold">{selectedProject.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
                <p className="text-white/80 leading-relaxed">{selectedProject.detailedInfo.overview}</p>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-neon-red" />
                      Challenges Faced
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.detailedInfo.challenges.map((challenge: string, index: number) => (
                        <motion.div
                          key={challenge}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20"
                        >
                          <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{challenge}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-neon-blue" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 
                                   border border-neon-blue/30 rounded-full text-sm text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Solutions */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-neon-green" />
                      Solutions Implemented
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.detailedInfo.solutions.map((solution: string, index: number) => (
                        <motion.div
                          key={solution}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{solution}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-neon-purple" />
                      Key Features
                    </h3>
                    <div className="grid gap-2">
                      {selectedProject.features.map((feature: string) => (
                        <div
                          key={feature}
                          className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 text-white/80 text-sm"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-neon-blue" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(selectedProject.detailedInfo.metrics).map(([key, value]) => (
                    <div key={key} className="glass-card p-4 text-center">
                      <div className="text-2xl font-bold text-gradient mb-1">{value as string}</div>
                      <div className="text-sm text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact & Learnings */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-neon-green" />
                    Project Impact
                  </h3>
                  <p className="text-white/80 leading-relaxed p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    {selectedProject.detailedInfo.impact}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-neon-purple" />
                    Key Learnings
                  </h3>
                  <div className="space-y-2">
                    {selectedProject.detailedInfo.learnings.map((learning: string, index: number) => (
                      <div
                        key={learning}
                        className="flex items-center gap-2 p-2 bg-purple-500/10 rounded-lg border border-purple-500/20"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="text-white/80 text-sm">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple 
                           rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </motion.a>
                {selectedProject.demo !== "#" && (
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-6 py-3 glass-card text-white font-semibold 
                             hover:bg-white/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

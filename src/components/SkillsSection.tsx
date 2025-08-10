'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Brain, Wrench, BookOpen, Zap, Star, Award, TrendingUp, X, ExternalLink, Clock, Users } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
  description: string
  projects: string[]
  detailedInfo: {
    experience: string
    keyFeatures: string[]
    realWorldUse: string
    learningPath: string
    certifications?: string[]
    relatedSkills: string[]
  }
}

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [showModal, setShowModal] = useState(false)

  const skills: Skill[] = [
    // Languages
    { 
      name: 'Python', 
      level: 95, 
      category: 'languages', 
      description: 'Advanced proficiency in Python for data science, ML, and web development', 
      projects: ['AI Guardian', 'Spam Classifier'],
      detailedInfo: {
        experience: '2+ years of intensive Python development for AI/ML projects',
        keyFeatures: ['Object Detection', 'Web APIs', 'Data Analysis', 'Machine Learning', 'Computer Vision'],
        realWorldUse: 'Built AI Guardian surveillance system and spam classification models using Python as the core language',
        learningPath: 'Started with basics → Data Science libraries → AI/ML frameworks → Production deployment',
        relatedSkills: ['Flask', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV']
      }
    },
    { 
      name: 'SQL', 
      level: 88, 
      category: 'languages', 
      description: 'Database querying and optimization for data analysis', 
      projects: ['BI Dashboard', 'Data Pipeline'],
      detailedInfo: {
        experience: '1+ years working with databases for data analysis and business intelligence',
        keyFeatures: ['Complex Queries', 'Data Aggregation', 'Performance Optimization', 'Database Design'],
        realWorldUse: 'Created efficient queries for data analysis and built BI dashboards with optimized data retrieval',
        learningPath: 'Basic queries → Joins & Subqueries → Advanced analytics → Performance tuning',
        relatedSkills: ['PowerBI', 'DBMS', 'Data Analysis', 'Excel']
      }
    },
    
    // AI/ML
    { 
      name: 'YOLOv8', 
      level: 92, 
      category: 'ai-ml', 
      description: 'Real-time object detection and computer vision applications', 
      projects: ['AI Guardian'],
      detailedInfo: {
        experience: 'Implemented YOLOv8 for real-time surveillance system achieving 24+ FPS',
        keyFeatures: ['Real-time Detection', 'Multi-object Tracking', 'Custom Training', 'Performance Optimization'],
        realWorldUse: 'Core component of AI Guardian system for detecting and tracking objects in surveillance footage',
        learningPath: 'Computer Vision basics → YOLO architecture → YOLOv8 implementation → Production optimization',
        relatedSkills: ['OpenCV', 'Python', 'Deep Learning', 'Computer Vision']
      }
    },
    { 
      name: 'OpenPose', 
      level: 85, 
      category: 'ai-ml', 
      description: 'Human pose estimation and motion analysis', 
      projects: ['AI Guardian'],
      detailedInfo: {
        experience: 'Integrated OpenPose for human activity recognition in surveillance applications',
        keyFeatures: ['Pose Detection', 'Activity Recognition', 'Real-time Processing', 'Multi-person Tracking'],
        realWorldUse: 'Used in AI Guardian to analyze human poses and detect suspicious activities',
        learningPath: 'Human pose basics → OpenPose architecture → Integration with detection systems',
        relatedSkills: ['YOLOv8', 'Computer Vision', 'Deep Learning', 'Python']
      }
    },
    { 
      name: 'Deep Learning', 
      level: 90, 
      category: 'ai-ml', 
      description: 'Neural networks, CNNs, RNNs for complex AI solutions', 
      projects: ['Multiple Projects'],
      detailedInfo: {
        experience: 'Applied deep learning across computer vision and NLP projects',
        keyFeatures: ['Neural Networks', 'CNNs', 'Transfer Learning', 'Model Optimization'],
        realWorldUse: 'Foundation for AI Guardian object detection and spam classification models',
        learningPath: 'ML basics → Neural networks → Deep architectures → Specialized applications',
        relatedSkills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision']
      }
    },
    { 
      name: 'LLMs', 
      level: 87, 
      category: 'ai-ml', 
      description: 'Large Language Models and prompt engineering', 
      projects: ['AI Resume Chat'],
      detailedInfo: {
        experience: 'Working with LLMs for conversational AI and prompt engineering',
        keyFeatures: ['Prompt Engineering', 'Fine-tuning', 'API Integration', 'Conversational AI'],
        realWorldUse: 'Built AI Resume Chat feature for portfolio with intelligent responses',
        learningPath: 'NLP basics → Transformer architecture → LLM APIs → Prompt optimization',
        relatedSkills: ['NLP', 'Python', 'API Integration', 'Conversational AI']
      }
    },
    { 
      name: 'Generative AI', 
      level: 89, 
      category: 'ai-ml', 
      description: 'AI content generation and creative applications', 
      projects: ['Portfolio Features'],
      detailedInfo: {
        experience: 'Implementing generative AI for creative and practical applications',
        keyFeatures: ['Content Generation', 'Creative AI', 'Model Integration', 'User Interaction'],
        realWorldUse: 'Enhanced portfolio with AI-generated content and interactive features',
        learningPath: 'AI basics → Generative models → Creative applications → User experience',
        relatedSkills: ['LLMs', 'Python', 'API Integration', 'Creative Design']
      }
    },
    
    // Frameworks/Tools
    { 
      name: 'Flask', 
      level: 85, 
      category: 'frameworks', 
      description: 'Web application development and API creation', 
      projects: ['Multiple APIs'],
      detailedInfo: {
        experience: 'Built web applications and APIs for AI/ML model deployment',
        keyFeatures: ['RESTful APIs', 'Web Applications', 'Database Integration', 'Authentication'],
        realWorldUse: 'Created web interfaces for AI Guardian and spam classifier projects',
        learningPath: 'Web basics → Flask fundamentals → API development → Production deployment',
        relatedSkills: ['Python', 'HTML/CSS', 'JavaScript', 'Database Integration']
      }
    },
    { 
      name: 'PowerBI', 
      level: 82, 
      category: 'frameworks', 
      description: 'Business intelligence and data visualization', 
      projects: ['BI Dashboard'],
      detailedInfo: {
        experience: 'Created interactive dashboards and business intelligence reports',
        keyFeatures: ['Interactive Dashboards', 'Data Modeling', 'DAX Formulas', 'Report Automation'],
        realWorldUse: 'Built comprehensive BI dashboards for data-driven decision making',
        learningPath: 'Data visualization → PowerBI basics → Advanced features → Dashboard design',
        relatedSkills: ['SQL', 'Data Analysis', 'Excel', 'Business Intelligence']
      }
    },
    { 
      name: 'Pandas', 
      level: 93, 
      category: 'frameworks', 
      description: 'Data manipulation and analysis', 
      projects: ['All Data Projects'],
      detailedInfo: {
        experience: 'Extensive use in all data science projects for data preprocessing and analysis',
        keyFeatures: ['Data Cleaning', 'Data Transformation', 'Statistical Analysis', 'Time Series'],
        realWorldUse: 'Core tool for data preprocessing in spam classifier and data analysis projects',
        learningPath: 'Python basics → Pandas fundamentals → Advanced operations → Performance optimization',
        relatedSkills: ['Python', 'NumPy', 'Data Analysis', 'Statistics']
      }
    },
    { 
      name: 'NumPy', 
      level: 91, 
      category: 'frameworks', 
      description: 'Numerical computing and array operations', 
      projects: ['ML Models'],
      detailedInfo: {
        experience: 'Foundation for all numerical computations in ML projects',
        keyFeatures: ['Array Operations', 'Mathematical Functions', 'Linear Algebra', 'Performance Computing'],
        realWorldUse: 'Underlying computational engine for all machine learning model implementations',
        learningPath: 'Python basics → Array concepts → Mathematical operations → ML integration',
        relatedSkills: ['Python', 'Pandas', 'Scikit-learn', 'Mathematics']
      }
    },
    { 
      name: 'Scikit-learn', 
      level: 88, 
      category: 'frameworks', 
      description: 'Machine learning algorithms and model building', 
      projects: ['Spam Classifier'],
      detailedInfo: {
        experience: 'Built classification models with high accuracy using various algorithms',
        keyFeatures: ['Classification', 'Regression', 'Clustering', 'Model Evaluation', 'Preprocessing'],
        realWorldUse: 'Implemented Naive Bayes classifier for spam detection with excellent results',
        learningPath: 'ML theory → Scikit-learn basics → Algorithm selection → Model optimization',
        relatedSkills: ['Python', 'Pandas', 'NumPy', 'Machine Learning']
      }
    },
    { 
      name: 'Seaborn', 
      level: 84, 
      category: 'frameworks', 
      description: 'Statistical data visualization', 
      projects: ['Data Analysis'],
      detailedInfo: {
        experience: 'Created insightful statistical visualizations for data exploration',
        keyFeatures: ['Statistical Plots', 'Data Distribution', 'Correlation Analysis', 'Aesthetic Styling'],
        realWorldUse: 'Generated comprehensive data analysis reports with professional visualizations',
        learningPath: 'Data visualization → Matplotlib → Seaborn features → Statistical analysis',
        relatedSkills: ['Python', 'Matplotlib', 'Pandas', 'Statistics']
      }
    },
    { 
      name: 'Matplotlib', 
      level: 86, 
      category: 'frameworks', 
      description: 'Data plotting and visualization', 
      projects: ['All Analytics'],
      detailedInfo: {
        experience: 'Created custom plots and visualizations for all data analysis projects',
        keyFeatures: ['Custom Plots', 'Interactive Visualizations', 'Publication Quality', 'Animation'],
        realWorldUse: 'Foundation for all data visualization needs across projects',
        learningPath: 'Plotting basics → Customization → Advanced features → Interactive plots',
        relatedSkills: ['Python', 'Seaborn', 'Data Analysis', 'Visualization Design']
      }
    },
    
    // Core CS
    { 
      name: 'DSA', 
      level: 83, 
      category: 'core-cs', 
      description: 'Data Structures and Algorithms optimization', 
      projects: ['System Design'],
      detailedInfo: {
        experience: 'Applied DSA concepts for optimizing AI system performance',
        keyFeatures: ['Algorithm Design', 'Time Complexity', 'Space Optimization', 'Problem Solving'],
        realWorldUse: 'Optimized AI Guardian processing pipeline for real-time performance',
        learningPath: 'Programming basics → Data structures → Algorithms → Optimization techniques',
        relatedSkills: ['Python', 'System Design', 'Performance Optimization']
      }
    },
    { 
      name: 'OOPS', 
      level: 87, 
      category: 'core-cs', 
      description: 'Object-Oriented Programming principles', 
      projects: ['All Projects'],
      detailedInfo: {
        experience: 'Applied OOP principles across all software development projects',
        keyFeatures: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Design Patterns'],
        realWorldUse: 'Structured all projects with clean, maintainable object-oriented code',
        learningPath: 'Programming basics → OOP concepts → Design patterns → Best practices',
        relatedSkills: ['Python', 'Software Engineering', 'Design Patterns']
      }
    },
    { 
      name: 'OS', 
      level: 80, 
      category: 'core-cs', 
      description: 'Operating Systems and system programming', 
      projects: ['Backend Systems'],
      detailedInfo: {
        experience: 'Understanding of OS concepts for system-level programming',
        keyFeatures: ['Process Management', 'Memory Management', 'File Systems', 'Concurrency'],
        realWorldUse: 'Optimized system resources for AI Guardian real-time processing',
        learningPath: 'Computer basics → OS concepts → System programming → Performance tuning',
        relatedSkills: ['System Design', 'Performance Optimization', 'Backend Development']
      }
    },
    { 
      name: 'DBMS', 
      level: 85, 
      category: 'core-cs', 
      description: 'Database Management Systems design', 
      projects: ['Data Architecture'],
      detailedInfo: {
        experience: 'Designed efficient database schemas for data storage and retrieval',
        keyFeatures: ['Database Design', 'Normalization', 'Query Optimization', 'Indexing'],
        realWorldUse: 'Architected data storage solutions for analytics and reporting systems',
        learningPath: 'Database basics → Design principles → Optimization → Advanced concepts',
        relatedSkills: ['SQL', 'Database Design', 'Data Architecture']
      }
    },
    { 
      name: 'Software Engineering', 
      level: 88, 
      category: 'core-cs', 
      description: 'Best practices and development lifecycle', 
      projects: ['All Projects'],
      detailedInfo: {
        experience: 'Applied software engineering principles across all development projects',
        keyFeatures: ['SDLC', 'Version Control', 'Testing', 'Documentation', 'Code Quality'],
        realWorldUse: 'Maintained high code quality and followed best practices in all projects',
        learningPath: 'Programming → Development practices → Team collaboration → Project management',
        relatedSkills: ['Git', 'Testing', 'Documentation', 'Project Management']
      }
    },
  ]

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Zap className="w-5 h-5" />, color: 'from-neon-blue to-neon-purple' },
    { id: 'languages', name: 'Languages', icon: <Code className="w-5 h-5" />, color: 'from-neon-blue to-blue-400' },
    { id: 'ai-ml', name: 'AI/ML', icon: <Brain className="w-5 h-5" />, color: 'from-neon-purple to-pink-400' },
    { id: 'frameworks', name: 'Frameworks', icon: <Wrench className="w-5 h-5" />, color: 'from-neon-green to-green-400' },
    { id: 'core-cs', name: 'Core CS', icon: <BookOpen className="w-5 h-5" />, color: 'from-neon-pink to-red-400' },
  ]

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Comprehensive expertise across the AI and data science technology stack
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              selectedCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'glass text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {category.icon}
            <span className="font-medium">{category.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            onClick={() => {
              setSelectedSkill(skill)
              setShowModal(true)
            }}
            className="glass-card p-6 group cursor-pointer relative overflow-hidden"
          >
            {/* Skill Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-gradient transition-all duration-300">
                {skill.name}
              </h3>
              <span className="text-neon-blue font-bold">{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="relative mb-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm mb-3 leading-relaxed">
              {skill.description}
            </p>

            {/* Projects */}
            <div className="flex flex-wrap gap-1">
              {skill.projects.map((project) => (
                <span
                  key={project}
                  className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/60"
                >
                  {project}
                </span>
              ))}
            </div>

            {/* Hover Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 pointer-events-none"
            />

            {/* AI Enhancement Badge */}
            {hoveredSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 flex items-center gap-1 text-xs text-neon-blue"
              >
                <Brain className="w-3 h-3" />
                <span>AI Enhanced</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Skill <span className="text-gradient">Highlights</span>
          </h3>
          <p className="text-white/80 leading-relaxed">
            My expertise spans the entire AI development lifecycle, from data preprocessing and model training 
            to deployment and monitoring. I specialize in computer vision applications, natural language processing, 
            and building scalable AI systems that deliver real-world impact. Each skill is continuously refined 
            through hands-on projects and staying current with the latest AI research and industry best practices.
          </p>
        </div>
      </motion.div>

      {/* Detailed Skill Modal */}
      <AnimatePresence>
        {showModal && selectedSkill && (
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
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedSkill.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-neon-blue" />
                      <span className="text-neon-blue font-semibold">{selectedSkill.level}% Proficiency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-neon-purple" />
                      <span className="text-neon-purple font-semibold">{selectedSkill.category.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-3 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
                  />
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-neon-blue" />
                      Experience
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {selectedSkill.detailedInfo.experience}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-neon-purple" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedSkill.detailedInfo.keyFeatures.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-white/70"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Real World Use */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-neon-green" />
                      Real-World Application
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {selectedSkill.detailedInfo.realWorldUse}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Learning Path */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-neon-pink" />
                      Learning Journey
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {selectedSkill.detailedInfo.learningPath}
                    </p>
                  </div>

                  {/* Related Skills */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-neon-blue" />
                      Related Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.detailedInfo.relatedSkills.map((relatedSkill) => (
                        <span
                          key={relatedSkill}
                          className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 
                                   border border-neon-blue/30 rounded-full text-sm text-white/80 
                                   hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all cursor-pointer"
                        >
                          {relatedSkill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-neon-green" />
                      Featured Projects
                    </h3>
                    <div className="space-y-2">
                      {selectedSkill.projects.map((project) => (
                        <div
                          key={project}
                          className="p-3 bg-white/5 rounded-lg border border-white/10 
                                   hover:border-neon-blue/30 transition-all cursor-pointer group"
                        >
                          <span className="text-white/80 group-hover:text-white transition-colors">
                            {project}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications (if available) */}
                  {selectedSkill.detailedInfo.certifications && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-neon-purple" />
                        Certifications
                      </h3>
                      <div className="space-y-2">
                        {selectedSkill.detailedInfo.certifications.map((cert) => (
                          <div
                            key={cert}
                            className="p-2 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 
                                     rounded-lg border border-neon-purple/20 text-white/80"
                          >
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-white/60 text-sm">
                  Click anywhere outside this modal to close, or use the X button above
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default SkillsSection

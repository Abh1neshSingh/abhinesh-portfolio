'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: "AI Evaluator",
    company: "Outlier AI (Freelance)",
    period: "December 2024 - Present",
    description: "Evaluated and rated AI-generated responses for quality, coherence, and relevance across multiple domains. Conducted prompt engineering and tested large language model (LLM) behavior under varying input conditions. Collaborated on diverse AI use cases to help improve model performance and overall user experience.",
    technologies: ["AI Evaluation", "Prompt Engineering", "LLM Testing", "Quality Assessment", "Model Performance"]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Spectacular Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-violet-900/20 to-purple-900/20 animate-gradient-shift"></div>
        </div>

        {/* Floating Orbs with Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-24 w-30 h-30 bg-gradient-to-r from-indigo-500/25 to-violet-500/25 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-48 right-32 w-26 h-26 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-lg animate-float-medium"></div>
          <div className="absolute bottom-36 left-36 w-34 h-34 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-fuchsia-500/35 to-indigo-500/35 rounded-full blur-xl animate-float-medium"></div>
        </div>

        {/* Animated Neural Network Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-15">
            <defs>
              <linearGradient id="experienceLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <g className="animate-pulse-slow">
              <line x1="16%" y1="28%" x2="84%" y2="72%" stroke="url(#experienceLineGradient)" strokeWidth="1" className="animate-draw-line" />
              <line x1="24%" y1="72%" x2="76%" y2="28%" stroke="url(#experienceLineGradient)" strokeWidth="1" className="animate-draw-line-reverse" />
              <circle cx="26%" cy="38%" r="3" fill="#6366f1" className="animate-pulse-node" />
              <circle cx="74%" cy="62%" r="3" fill="#8b5cf6" className="animate-pulse-node" />
              <circle cx="50%" cy="40%" r="4" fill="#a855f7" className="animate-pulse-node" />
            </g>
          </svg>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-28 text-indigo-400/20 font-mono text-sm animate-float-code">
            {'experience.build()'}
          </div>
          <div className="absolute top-64 right-36 text-violet-400/20 font-mono text-sm animate-float-code-reverse">
            {'career.advance()'}
          </div>
          <div className="absolute bottom-52 left-44 text-purple-400/20 font-mono text-sm animate-float-code">
            {'skills.develop()'}
          </div>
        </div>

        {/* Pulsing Energy Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-76 h-76 border border-indigo-500/15 rounded-full animate-ping-slow"></div>
          <div className="absolute w-60 h-60 border border-violet-500/20 rounded-full animate-ping-medium"></div>
          <div className="absolute w-44 h-44 border border-purple-500/15 rounded-full animate-ping-fast"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in AI and data science, building innovative solutions and driving technological advancement.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover:neon-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-400 font-semibold">{exp.company}</h4>
                </div>
                <div className="text-gray-400 font-medium mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                             border border-blue-500/30 rounded-full text-sm text-blue-300
                             hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

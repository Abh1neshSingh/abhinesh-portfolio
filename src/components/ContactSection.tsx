'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using Formspree service to handle form submissions
      const response = await fetch('https://formspree.io/f/mqalwgln', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'abhinesh1455@gmail.com',
      link: 'mailto:abhinesh1455@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/abhinesh-singh-5857b8239/',
      link: 'https://www.linkedin.com/in/abhinesh-singh-5857b8239/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'https://github.com/Abh1neshSingh',
      link: 'https://github.com/Abh1neshSingh'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 7905838674',
      link: 'tel:+917905838674'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Spectacular Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-teal-900/20 to-green-900/20 animate-gradient-shift"></div>
        </div>

        {/* Floating Orbs with Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-28 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/25 to-teal-500/25 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-52 right-28 w-28 h-28 bg-gradient-to-r from-teal-500/30 to-green-500/30 rounded-full blur-lg animate-float-medium"></div>
          <div className="absolute bottom-40 left-40 w-36 h-36 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute bottom-24 right-24 w-24 h-24 bg-gradient-to-r from-emerald-500/35 to-cyan-500/35 rounded-full blur-xl animate-float-medium"></div>
        </div>

        {/* Animated Neural Network Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-15">
            <defs>
              <linearGradient id="contactLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <g className="animate-pulse-slow">
              <line x1="18%" y1="25%" x2="82%" y2="75%" stroke="url(#contactLineGradient)" strokeWidth="1" className="animate-draw-line" />
              <line x1="22%" y1="75%" x2="78%" y2="25%" stroke="url(#contactLineGradient)" strokeWidth="1" className="animate-draw-line-reverse" />
              <line x1="50%" y1="12%" x2="50%" y2="88%" stroke="url(#contactLineGradient)" strokeWidth="1" className="animate-draw-line-vertical" />
              <circle cx="28%" cy="35%" r="3" fill="#06b6d4" className="animate-pulse-node" />
              <circle cx="72%" cy="65%" r="3" fill="#14b8a6" className="animate-pulse-node" />
              <circle cx="50%" cy="50%" r="4" fill="#10b981" className="animate-pulse-node" />
            </g>
          </svg>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-36 left-32 text-cyan-400/20 font-mono text-sm animate-float-code">
            {'connect.establish()'}
          </div>
          <div className="absolute top-68 right-40 text-teal-400/20 font-mono text-sm animate-float-code-reverse">
            {'message.send()'}
          </div>
          <div className="absolute bottom-56 left-48 text-green-400/20 font-mono text-sm animate-float-code">
            {'collaboration.start()'}
          </div>
        </div>

        {/* Pulsing Energy Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-84 h-84 border border-cyan-500/15 rounded-full animate-ping-slow"></div>
          <div className="absolute w-64 h-64 border border-teal-500/20 rounded-full animate-ping-medium"></div>
          <div className="absolute w-48 h-48 border border-green-500/15 rounded-full animate-ping-fast"></div>
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
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative AI projects? Let's discuss how we can build the future together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                and potential collaborations in AI and data science. Whether you're 
                looking for technical expertise or want to explore cutting-edge solutions, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 glass rounded-lg hover:neon-glow transition-all duration-300 group"
                >
                  <div className="text-2xl mr-4">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </div>
                    <div className="text-white group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none 
                           transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none 
                           transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none 
                           transition-colors duration-300 resize-vertical"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                } text-white`}
              >
                {isSubmitting ? 'Sending...' : 
                 submitStatus === 'success' ? 'Message Sent!' :
                 submitStatus === 'error' ? 'Try Again' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

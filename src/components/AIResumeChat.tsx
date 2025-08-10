'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AIResumeChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Abhinesh Singh's AI assistant. Ask me about his AI/ML expertise, real-world projects like AI Guardian, or his data science journey!",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) {
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work')) {
      return "Abhinesh is currently working as an AI Evaluator at Outlier AI (Freelance) since December 2024. He evaluates AI-generated responses for quality, coherence, and relevance across multiple domains, conducts prompt engineering, and tests LLM behavior under varying conditions."
    }
    
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology')) {
      return "His core skills include Python, Flask, YOLOv8, OpenPose, DeepSORT, OpenCV, Scikit-learn, NLTK, and web technologies. He specializes in computer vision, surveillance systems, machine learning classification, and AI evaluation."
    }
    
    if (lowerQuestion.includes('project') || lowerQuestion.includes('ai guardian')) {
      return "His flagship project is AI Guardian (2025) - a next-generation real-time surveillance system with YOLOv8, OpenPose, and DeepSORT achieving 24+ FPS processing. He also built a Spam Text Classifier (2024) using Naive Bayes with high accuracy. Check out his GitHub: https://github.com/Abh1neshSingh"
    }
    
    if (lowerQuestion.includes('github') || lowerQuestion.includes('repository')) {
      return "You can explore all of Abhinesh's projects and his data science journey on GitHub: https://github.com/Abh1neshSingh?tab=repositories. He has developed innovative AI/ML solutions including surveillance systems and text classification models."
    }
    
    if (lowerQuestion.includes('surveillance') || lowerQuestion.includes('security')) {
      return "AI Guardian is Abhinesh's advanced surveillance system featuring automated suspicious activity detection, real-time voice alerts, email notifications, snapshot capture, multi-camera integration, and zone-based alerts with IoT device controls."
    }
    
    if (lowerQuestion.includes('spam') || lowerQuestion.includes('classifier')) {
      return "The Spam Text Classifier uses Naive Bayes and Scikit-learn for SMS classification with text preprocessing (tokenization, stopword removal, stemming). It features a responsive Flask web app with real-time predictions and intuitive UI."
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('hire') || lowerQuestion.includes('available')) {
      return "Abhinesh is open to new AI/ML opportunities! You can reach him through his portfolio contact form or visit his GitHub profile. He's particularly interested in computer vision, surveillance systems, and AI evaluation roles."
    }
    
    return "That's a great question! Abhinesh specializes in AI/ML with real-world applications like surveillance systems and text classification. Feel free to ask about AI Guardian, his spam classifier, GitHub projects, or his experience at Outlier AI!"
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full 
                   bg-gradient-to-r from-blue-500 to-purple-500 
                   flex items-center justify-center text-white text-2xl
                   hover:from-blue-600 hover:to-purple-600 
                   transition-all duration-300 shadow-lg hover:shadow-xl
                   ${isOpen ? 'rotate-45' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : 100, 
          scale: isOpen ? 1 : 0.8 
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-24 right-6 z-40 w-96 h-96 glass-card overflow-hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm">
              🤖
            </div>
            <div>
              <h3 className="font-semibold text-white">AI Resume Assistant</h3>
              <p className="text-xs text-gray-400">Ask about Abhinesh's background</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-64">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-800/50 border border-gray-700 text-gray-100'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-gray-800/50 border border-gray-700 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about skills, experience..."
              className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
                       text-white placeholder-gray-400 text-sm
                       focus:border-blue-500 focus:outline-none transition-colors"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !inputMessage.trim()}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 
                       text-white rounded-lg hover:from-blue-600 hover:to-purple-600 
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300 text-sm"
            >
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </>
  )
}

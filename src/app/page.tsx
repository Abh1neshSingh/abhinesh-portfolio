'use client'

import { useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import AIResumeChat from '@/components/AIResumeChat'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Initialize particles.js or other background effects
    const initParticles = () => {
      // This will be implemented with a particles library
    }
    
    initParticles()
  }, [])

  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <AIResumeChat />
      <Footer />
    </main>
  )
}

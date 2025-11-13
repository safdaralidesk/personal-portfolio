'use client'

import { useEffect, useState } from 'react'
import { FiDownload, FiArrowDown } from 'react-icons/fi'

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Creative Thinker',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentRole = roles[roleIndex]
        if (!isDeleting && text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && text === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        } else {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          )
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500"
    >
      <div className="max-w-6xl mx-auto text-center text-white">
        <div className="inline-block px-6 py-2 mb-6 border-2 border-white/30 rounded-full backdrop-blur-sm">
          Welcome to my Portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="block mt-2">Your Name</span>
        </h1>

        <div className="text-2xl md:text-3xl font-semibold mb-6 h-12">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
          I'm a passionate full-stack developer specializing in building
          exceptional digital experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            View My Work
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all flex items-center gap-2"
          >
            <FiDownload /> Download CV
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { FiDownload, FiPlay, FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

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
    <section id="home" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 dark:bg-primary-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-200 dark:bg-secondary-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-6 py-2 mb-6 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
              Welcome to my Portfolio
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>

            <div className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300 min-h-[40px]">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="animate-pulse text-primary-600">|</span>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              I'm a passionate developer specializing in building exceptional digital experiences.
              Currently focused on creating responsive web applications with modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                <FiDownload className="group-hover:animate-bounce" />
                Get Resume
              </button>
              <button className="group px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white -ml-2">
                  <FiPlay className="ml-0.5" />
                </div>
                Watch Video
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
                Follow me:
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaDribbble size={18} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="aspect-square rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 flex items-center justify-center text-white">
                      <div className="text-9xl">👨‍💻</div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-8 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        5+
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Years of</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <a
            href="#about"
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown size={24} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

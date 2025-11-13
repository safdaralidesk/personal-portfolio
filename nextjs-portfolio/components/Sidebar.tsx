'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FiHome, FiUser, FiBriefcase, FiCode, FiFolder, FiMessageSquare, FiMail, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { href: '#home', icon: FiHome, label: 'Home' },
  { href: '#about', icon: FiUser, label: 'About' },
  { href: '#services', icon: FiBriefcase, label: 'Services' },
  { href: '#skills', icon: FiCode, label: 'Skills' },
  { href: '#portfolio', icon: FiFolder, label: 'Portfolio' },
  { href: '#testimonials', icon: FiMessageSquare, label: 'Testimonials' },
  { href: '#contact', icon: FiMail, label: 'Contact' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-24 bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col items-center py-8 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mb-8 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        <nav className="flex-1 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative p-3 rounded-lg hover:bg-primary-500 hover:text-white transition-all"
              title={item.label}
            >
              <item.icon size={20} />
              <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

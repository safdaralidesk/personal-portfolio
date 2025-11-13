'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiBriefcase, FiCode, FiUsers, FiMessageSquare, FiMail, FiSettings } from 'react-icons/fi'

const menuItems = [
  { href: '/admin', icon: FiHome, label: 'Dashboard' },
  { href: '/admin/projects', icon: FiBriefcase, label: 'Projects' },
  { href: '/admin/skills', icon: FiCode, label: 'Skills' },
  { href: '/admin/testimonials', icon: FiUsers, label: 'Testimonials' },
  { href: '/admin/services', icon: FiMessageSquare, label: 'Services' },
  { href: '/admin/messages', icon: FiMail, label: 'Messages' },
  { href: '/admin/settings', icon: FiSettings, label: 'Settings' },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
          Admin Panel
        </h2>
      </div>
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

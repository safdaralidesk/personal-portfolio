import { FiUsers, FiBriefcase, FiMail, FiEye } from 'react-icons/fi'
import StatsCard from '@/components/admin/StatsCard'
import RecentContacts from '@/components/admin/RecentContacts'
import dbConnect from '@/lib/mongodb'
import Project from '@/models/Project'
import Contact from '@/models/Contact'
import Skill from '@/models/Skill'

export default async function AdminDashboard() {
  await dbConnect()

  const [projectsCount, contactsCount, skillsCount, unreadContacts] = await Promise.all([
    Project.countDocuments(),
    Contact.countDocuments(),
    Skill.countDocuments(),
    Contact.countDocuments({ read: false }),
  ])

  const stats = [
    {
      title: 'Total Projects',
      value: projectsCount.toString(),
      icon: FiBriefcase,
      color: 'blue',
    },
    {
      title: 'Skills',
      value: skillsCount.toString(),
      icon: FiUsers,
      color: 'green',
    },
    {
      title: 'Messages',
      value: contactsCount.toString(),
      icon: FiMail,
      color: 'purple',
    },
    {
      title: 'Unread',
      value: unreadContacts.toString(),
      icon: FiEye,
      color: 'red',
    },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentContacts />
        {/* Add more dashboard widgets here */}
      </div>
    </div>
  )
}

'use client'

import { signOut, useSession } from 'next-auth/react'
import { FiLogOut, FiUser } from 'react-icons/fi'

export default function AdminHeader() {
  const { data: session } = useSession()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Manage your portfolio content
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white">
              <FiUser />
            </div>
            <div>
              <div className="font-semibold">{session?.user?.name}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {session?.user?.email}
              </div>
            </div>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
    </header>
  )
}

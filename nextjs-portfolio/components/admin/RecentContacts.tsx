import dbConnect from '@/lib/mongodb'
import Contact from '@/models/Contact'
import { FiMail } from 'react-icons/fi'

export default async function RecentContacts() {
  await dbConnect()
  const contacts = await Contact.find().sort({ createdAt: -1 }).limit(5).lean()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Recent Messages</h3>
      <div className="space-y-4">
        {contacts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center py-4">
            No messages yet
          </p>
        ) : (
          contacts.map((contact: any) => (
            <div
              key={contact._id.toString()}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                <FiMail className="text-primary-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold truncate">{contact.name}</h4>
                  {!contact.read && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {contact.subject}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

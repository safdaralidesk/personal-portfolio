import { FiUser } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-semibold uppercase tracking-wide">
            Get to know me
          </span>
          <h2 className="text-4xl font-bold mt-2">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-64 h-80 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white">
              <FiUser size={120} />
            </div>
            <div className="absolute top-4 left-4 w-64 h-80 border-4 border-primary-500 rounded-2xl -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              I'm a Full Stack Developer with 5+ years of experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm quietly confident, naturally curious, and perpetually working
              on improving my development skills, one problem at a time.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="font-semibold">Name:</span> Your Name
              </div>
              <div>
                <span className="font-semibold">Email:</span> your@email.com
              </div>
              <div>
                <span className="font-semibold">Phone:</span> +1 555 123 4567
              </div>
              <div>
                <span className="font-semibold">Location:</span> Your City
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                <div className="text-3xl font-bold text-primary-500">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                <div className="text-3xl font-bold text-primary-500">35+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Clients
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                <div className="text-3xl font-bold text-primary-500">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

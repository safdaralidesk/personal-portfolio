import { FiCode, FiSmartphone, FiLayout, FiServer, FiDatabase, FiSettings } from 'react-icons/fi'

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Building responsive and dynamic websites using modern frameworks and best practices.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Apps',
    description: 'Creating native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Designing beautiful and intuitive user interfaces with great user experience.',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description: 'Building robust server-side applications and RESTful APIs.',
  },
  {
    icon: FiDatabase,
    title: 'Database Design',
    description: 'Designing efficient database schemas and optimizing queries for performance.',
  },
  {
    icon: FiSettings,
    title: 'DevOps & Cloud',
    description: 'Setting up CI/CD pipelines and managing cloud infrastructure.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-semibold uppercase tracking-wide">
            What I Do
          </span>
          <h2 className="text-4xl font-bold mt-2">My Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white mb-4">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

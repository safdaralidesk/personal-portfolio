export default function Skills() {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React/Next.js', level: 88 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Python/Django', level: 80 },
    { name: 'Database (SQL/NoSQL)', level: 82 },
  ]

  const professionalSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Team Work', level: 85 },
    { name: 'Problem Solving', level: 92 },
    { name: 'Creativity', level: 88 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-semibold uppercase tracking-wide">
            My Expertise
          </span>
          <h2 className="text-4xl font-bold mt-2">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-primary-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-8">
              {professionalSkills.map((skill) => (
                <div key={skill.name} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 56}
                        strokeDashoffset={
                          2 * Math.PI * 56 * (1 - skill.level / 100)
                        }
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="gradient">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-600 dark:text-gray-400">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

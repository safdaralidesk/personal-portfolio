export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-semibold uppercase tracking-wide">My Work</span>
          <h2 className="text-4xl font-bold mt-2">Featured Projects</h2>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Projects will be loaded from the database</p>
          <p className="mt-2">Add projects through the admin dashboard at /admin</p>
        </div>
      </div>
    </section>
  )
}

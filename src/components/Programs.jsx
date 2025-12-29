function Programs() {
  return (
    <section id="programs" className="bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Programs
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">Weight Training</h3>
          <p className="text-gray-600">
            Build muscle and increase strength with expert guidance.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">Cardio</h3>
          <p className="text-gray-600">
            Improve endurance and burn calories efficiently.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">Yoga</h3>
          <p className="text-gray-600">
            Increase flexibility, balance, and mental wellness.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Programs

function Pricing() {
  return (
    <section id="pricing" className="bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Membership Plans
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

        {/* BASIC */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Basic</h3>
          <p className="text-4xl font-bold mb-4">₹999<span className="text-lg">/month</span></p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ Gym Access</li>
            <li>✔ Cardio Equipment</li>
            <li>✖ Personal Trainer</li>
          </ul>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Choose Plan
          </button>
        </div>

        {/* PRO (HIGHLIGHT) */}
        <div className="bg-red-600 text-white rounded-xl shadow-xl p-8 text-center scale-105">
          <h3 className="text-2xl font-bold mb-4">Pro</h3>
          <p className="text-4xl font-bold mb-4">₹1499<span className="text-lg">/month</span></p>
          <ul className="mb-6 space-y-2">
            <li>✔ Gym + Cardio</li>
            <li>✔ Personal Trainer</li>
            <li>✔ Diet Plan</li>
          </ul>
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
            Most Popular
          </button>
        </div>

        {/* ELITE */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Elite</h3>
          <p className="text-4xl font-bold mb-4">₹2499<span className="text-lg">/month</span></p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ All Facilities</li>
            <li>✔ Personal Trainer</li>
            <li>✔ Nutrition & Yoga</li>
          </ul>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Choose Plan
          </button>
        </div>

      </div>
    </section>
  )
}

export default Pricing

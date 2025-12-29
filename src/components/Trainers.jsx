import trainer1 from "../assets/trainer1.avif"
import trainer2 from "../assets/trainer2.jpg"
import trainer3 from "../assets/trainer3.jpg"
function Trainers() {
  return (
    <section id="about" className="bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Trainers
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        
        {/* Trainer 1 */}
        <div className="text-center shadow-lg rounded-xl p-6 hover:scale-105 transition">
          <img
            src={trainer1}
            alt="Trainer"
            className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-bold">John Carter</h3>
          <p className="text-gray-600">Strength Coach</p>
        </div>

        {/* Trainer 2 */}
        <div className="text-center shadow-lg rounded-xl p-6 hover:scale-105 transition">
          <img
            src={trainer2}
            alt="Trainer"
            className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-bold">Mike Johnson</h3>
          <p className="text-gray-600">Yoga Instructor</p>
        </div>

        {/* Trainer 3 */}
        <div className="text-center shadow-lg rounded-xl p-6 hover:scale-105 transition">
          <img
            src={trainer3}
            alt="Trainer"
            className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-bold">Sarah Lee</h3>
          <p className="text-gray-600">Cardio Expert</p>
        </div>

      </div>
    </section>
  )
}

export default Trainers

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import Tilt from "react-parallax-tilt" // install: npm install react-parallax-tilt

const reviews = [
  {
    name: "Hrithik Roshan",
    image: "https://i.imgur.com/0Clfnu7.jpg",
    review: "Best transformation experience. Elite trainers.",
    rating: 5,
  },
  {
    name: "Tiger Shroff",
    image: "https://i.imgur.com/8Km9tLL.jpg",
    review: "Strength, agility and discipline in one place.",
    rating: 5,
  },
  {
    name: "Disha Patani",
    image: "https://i.imgur.com/f8p1KQn.jpg",
    review: "Amazing vibe and high-energy workouts.",
    rating: 4,
  },
  {
    name: "John Abraham",
    image: "https://i.imgur.com/Z7AzH2c.jpg",
    review: "Serious training. Serious results.",
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex justify-center mt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < count ? "text-yellow-400" : "text-gray-600"}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewsSlider() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    })
  }, [controls])

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Celebrity Reviews
      </h2>

      {/* Gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black z-10" />

      {/* Horizontal scrolling reviews */}
      <motion.div
        className="flex gap-6 cursor-grab active:cursor-grabbing px-32"
        animate={controls}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() =>
          controls.start({
            x: ["0%", "-100%"],
            transition: {
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            },
          })
        }
      >
        {[...reviews, ...reviews].map((item, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={400}
            className="min-w-[320px] backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-white">
              {item.name}
            </h3>
            <Stars count={item.rating} />
            <p className="text-gray-300 text-sm text-center mt-3">
              “{item.review}”
            </p>
          </Tilt>
        ))}
      </motion.div>
    </section>
  )
}

export default ReviewsSlider

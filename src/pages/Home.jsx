import gymBg from "../assets/photo-1589166928514-b67a63af0235.avif"
import Programs from "../components/Programs"
import Trainers from "../components/Trainers"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import ReviewsSlider from "../components/ReviewSlider"
import { motion } from "framer-motion"

function Home() {
  return (
    <>
      {/* HERO SECTION */}
  <section
  id="home"
  style={{ backgroundImage: `url(${gymBg})` }}
  className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
>
  {/* overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

  {/* floating side image / animation */}
  {/* <motion.img
    src="" // placeholder
    alt="fitness animation"
    className="absolute right-10 top-10 w-64 md:w-96 opacity-50"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  /> */}

  <motion.div
    className="relative z-10 max-w-3xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  >
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400 animate-pulse">
      Build Your Perfect Body
    </h1>

    <p className="text-xl md:text-2xl mb-6 text-gray-200">
      Join the best gym in your city
    </p>

    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,0,0,0.6)" }}
      whileTap={{ scale: 0.95 }}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300"
    >
      Join Now
    </motion.button>
  </motion.div>
</section>


      {/* PROGRAMS SECTION */}
      <section id="programs" data-aos="fade-up">
        <Programs />
      </section>
          {/* REVIEWS SLIDER */}
      <section data-aos="fade-up">
        <ReviewsSlider />
      </section>

      {/* TRAINERS SECTION */}
      <section id="trainers" data-aos="fade-right">
        <Trainers />
      </section>
  

      {/* PRICING SECTION */}
      <section id="pricing" data-aos="zoom-in">
        <Pricing />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" data-aos="fade-left">
        <Contact />
      </section>
    </>
  )
}

export default Home

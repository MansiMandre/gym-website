function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact Us
      </h2>

      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            Have questions? Ready to start your fitness journey?
            Reach out to us today.
          </p>

          <p className="mb-2"><strong>📍 Address:</strong> Mumbai, India</p>
          <p className="mb-2"><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p className="mb-2"><strong>✉ Email:</strong> gym@email.com</p>
        </div>

        {/* CONTACT FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact

import gymLogo from "../assets/gym-logo-vector-44247915.webp"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"


function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 text-center md:text-left">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={gymLogo}
            alt="Gym Logo"
            className="w-20 mb-3"
          />
          <p className="text-gray-400">
            Build strength. Build confidence.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#home" className="hover:text-red-500">Home</a></li>
            <li><a href="#programs" className="hover:text-red-500">Programs</a></li>
            <li><a href="#pricing" className="hover:text-red-500">Pricing</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL ICONS */}
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-5 text-gray-400 text-2xl">
            <a href="#" className="hover:text-red-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} Gym Website. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer


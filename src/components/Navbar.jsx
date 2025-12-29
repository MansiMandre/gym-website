import logo from '../assets/gym-logo-vector-44247915.webp'
function Navbar() {
  return (
    <div className="bg-black text-white p-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Gym Logo"
          className="w-12 h-12 object-cover rounded-full"
        />
        <h1 className="text-2xl font-bold"></h1>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        <a href="#home" className="hover:text-red-500">Home</a>
        <a href="#programs" className="hover:text-red-500">Programs</a>
        <a href="#about" className="hover:text-red-500">About</a>
        <a href="#contact" className="hover:text-red-500">Contact</a>
      </div>
    </div>
  )
}

export default Navbar

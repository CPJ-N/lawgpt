
import Link from "next/link";

export default function Header() {
  return (
    <header>
    <nav className="absolute top-0 left-0 w-full bg-transparent z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl text-white">
            {/* Website Logo */}
            <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-white-500 t/e text-lg">LawGPT</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Navbar items */}
            <Link href="/" className="text-white hover:text-gray-300 hover:font-bold hover:text-lg transition duration-300">Home</Link>
            <Link href="/chatbot" className="text-white hover:text-gray-300 hover:font-bold hover:text-lg transition duration-300">Chatbot</Link>
            <a href="#" className="text-white hover:text-orange-500 transition duration-300">About Us</a>
            <a href="/contact" className="text-white hover:text-orange-500 transition duration-300">Contact Us</a>
            <div className="flex items-center space-x-2">
              {/* Icons or additional links */}
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <Link href="/signin" className="py-2 px-3 bg-black text-white rounded hover:bg-gray-800 transition duration-300">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </header>
  )
}

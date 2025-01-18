import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <header>
      <nav className="absolute top-0 left-0 w-full bg-transparent z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo section - unchanged */}
            <div className="font-bold text-xl text-white">
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-white text-lg">LawGPT</span>
              </Link>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="bg-transparent">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-gray-300 hover:font-bold transition duration-300 px-4 py-2">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-gray-300 hover:bg-transparent focus:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px] bg-white/90 backdrop-blur-sm">
                      <Link href="/chatbot" className="text-gray-800 hover:text-orange-500 transition-colors">
                        Chatbot
                      </Link>
                      <Link href="#" className="text-gray-800 hover:text-orange-500 transition-colors">
                        Legal Consultation
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-gray-300 hover:bg-transparent focus:bg-transparent">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px] bg-white/90 backdrop-blur-sm">
                      <Link href="#" className="text-gray-800 hover:text-orange-500 transition-colors">
                        About Us
                      </Link>
                      <Link href="/contact" className="text-gray-800 hover:text-orange-500 transition-colors">
                        Contact Us
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/signin" legacyBehavior passHref>
                    <NavigationMenuLink className="py-2 px-3 bg-black text-white rounded hover:bg-gray-800 transition duration-300">
                      Sign in
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  )
}

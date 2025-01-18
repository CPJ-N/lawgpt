import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="bg-brand-darkblue shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="font-semibold text-brand-white text-xl hover:text-brand-skyblue transition-colors">
                  LawGPT
                </span>
              </Link>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="bg-transparent">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-brand-white hover:text-brand-skyblue transition-colors px-4 py-2">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-brand-white hover:text-brand-skyblue data-[state=open]:text-brand-skyblue hover:bg-transparent focus:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[200px] bg-white rounded-lg shadow-lg">
                      <Link href="/chatbot" 
                        className="px-3 py-2 rounded-md text-brand-darkblue hover:bg-brand-skyblue/10 hover:text-brand-blue transition-colors">
                        Chatbot
                      </Link>
                      <Link href="#" 
                        className="px-3 py-2 rounded-md text-brand-darkblue hover:bg-brand-skyblue/10 hover:text-brand-blue transition-colors">
                        Legal Consultation
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-brand-white hover:text-brand-skyblue data-[state=open]:text-brand-skyblue hover:bg-transparent focus:bg-transparent">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[200px] bg-white rounded-lg shadow-lg">
                      <Link href="#" 
                        className="px-3 py-2 rounded-md text-brand-darkblue hover:bg-brand-skyblue/10 hover:text-brand-blue transition-colors">
                        About Us
                      </Link>
                      <Link href="/contact" 
                        className="px-3 py-2 rounded-md text-brand-darkblue hover:bg-brand-skyblue/10 hover:text-brand-blue transition-colors">
                        Contact Us
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/signin" legacyBehavior passHref>
                    <NavigationMenuLink className="ml-4 px-4 py-2 bg-brand-white text-brand-darkblue rounded-md hover:bg-brand-white/90 transition-colors font-medium">
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

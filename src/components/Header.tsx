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
import { Button } from "@/components/ui/button"
import { FileText, BookOpen, Video } from "lucide-react"

const legalServices: { title: string; href: string; description: string }[] = [
  {
    title: "Contract Management",
    href: "/services/contract-management",
    description: "Streamline contract lifecycle with AI-powered drafting and review.",
  },
  {
    title: "Legal Research",
    href: "/services/legal-research",
    description: "Advanced legal research tools with comprehensive case law analysis.",
  },
  {
    title: "Document Automation",
    href: "/services/document-automation",
    description: "Automate legal document creation with intelligent templates.",
  },
  {
    title: "Case Management",
    href: "/services/case-management",
    description: "End-to-end case management solution for modern law practices.",
  },
  {
    title: "Compliance Solutions",
    href: "/services/compliance",
    description: "Stay compliant with automated regulatory tracking and updates.",
  },
  {
    title: "Legal Analytics",
    href: "/services/analytics",
    description: "Data-driven insights for better legal decision making.",
  },
]

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Icons.logo className="h-8 w-8 text-brand-darkblue" />
                <span className="font-bold text-brand-darkblue text-xl tracking-tight hover:text-brand-skyblue transition-colors">
                  Attorneia
                </span>
              </Link>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="bg-transparent">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 font-medium hover:text-brand-skyblue transition-colors px-4 py-2">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-gray-700 font-medium hover:text-brand-skyblue data-[state=open]:text-brand-skyblue hover:bg-transparent focus:bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                      {legalServices.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-700 font-medium hover:text-brand-skyblue data-[state=open]:text-brand-skyblue hover:bg-transparent focus:bg-transparent">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-6 w-[300px] bg-white rounded-lg shadow-lg">
                      <div className="grid gap-3">
                        <Link href="/blog" 
                          className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors">
                          <FileText className="h-4 w-4" />
                          <span>Blog</span>
                        </Link>
                        <Link href="/case-studies" 
                          className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors">
                          <BookOpen className="h-4 w-4" />
                          <span>Case Studies</span>
                        </Link>
                        <Link href="/webinars" 
                          className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors">
                          <Video className="h-4 w-4" />
                          <span>Webinars</span>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 font-medium hover:text-brand-skyblue transition-colors px-4 py-2">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 font-medium hover:text-brand-skyblue transition-colors px-4 py-2">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <div className="flex items-center gap-2 ml-4">
                    <Link href="/login" legacyBehavior passHref>
                      <Button variant="ghost" className="text-gray-700 hover:text-brand-skyblue">
                        Sign in
                      </Button>
                    </Link>
                    <Link href="/register" legacyBehavior passHref>
                      <Button className="bg-brand-darkblue text-white hover:bg-brand-skyblue">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-brand-blue focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
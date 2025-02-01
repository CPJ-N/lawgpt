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
      <nav className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="border-b border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link 
                  href="/" 
                  className="flex items-center space-x-3 group"
                >
                  <Icons.logo className="h-8 w-8 text-brand-darkblue group-hover:text-brand-skyblue transition-colors duration-200" />
                  <span className="font-bold text-brand-darkblue text-xl tracking-tight group-hover:text-brand-skyblue transition-colors duration-200">
                    Attorneia
                  </span>
                </Link>
              </div>

              <NavigationMenu>
                <NavigationMenuList className="bg-transparent hidden md:flex">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="text-gray-600 font-medium hover:text-brand-skyblue transition-all duration-200 px-4 py-2 rounded-md hover:bg-gray-50">
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="bg-transparent text-gray-600 font-medium hover:text-brand-skyblue data-[state=open]:text-brand-skyblue hover:bg-gray-50 data-[state=open]:bg-gray-50 transition-all duration-200">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] md:w-[600px] lg:w-[700px] p-6 bg-white rounded-lg shadow-lg border border-gray-100">
                        <ul className="grid gap-4 md:grid-cols-2">
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
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="bg-transparent text-gray-600 font-medium hover:text-brand-skyblue data-[state=open]:text-brand-skyblue hover:bg-gray-50 data-[state=open]:bg-gray-50 transition-all duration-200">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] p-4 bg-white rounded-lg shadow-lg border border-gray-100">
                        <div className="space-y-2">
                          <Link href="/blog" 
                            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-gray-600 hover:text-brand-skyblue hover:bg-gray-50 transition-all duration-200 group">
                            <FileText className="h-4 w-4 group-hover:text-brand-skyblue transition-colors" />
                            <span className="font-medium">Blog</span>
                          </Link>
                          <Link href="/case-studies" 
                            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-gray-600 hover:text-brand-skyblue hover:bg-gray-50 transition-all duration-200 group">
                            <BookOpen className="h-4 w-4 group-hover:text-brand-skyblue transition-colors" />
                            <span className="font-medium">Case Studies</span>
                          </Link>
                          <Link href="/webinars" 
                            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-gray-600 hover:text-brand-skyblue hover:bg-gray-50 transition-all duration-200 group">
                            <Video className="h-4 w-4 group-hover:text-brand-skyblue transition-colors" />
                            <span className="font-medium">Webinars</span>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                      <NavigationMenuLink className="text-gray-600 font-medium hover:text-brand-skyblue transition-all duration-200 px-4 py-2 rounded-md hover:bg-gray-50">
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="text-gray-600 font-medium hover:text-brand-skyblue transition-all duration-200 px-4 py-2 rounded-md hover:bg-gray-50">
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <div className="flex items-center gap-3 ml-6 border-l border-gray-200 pl-6">
                      <Link href="/login" legacyBehavior passHref>
                        <Button 
                          variant="ghost" 
                          className="text-gray-600 font-medium hover:text-brand-skyblue hover:bg-gray-50"
                        >
                          Sign in
                        </Button>
                      </Link>
                      <Link href="/register" legacyBehavior passHref>
                        <Button 
                          className="bg-brand-darkblue text-white hover:bg-brand-skyblue font-medium shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
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
          className="block space-y-2 rounded-md p-4 no-underline outline-none transition-all duration-200 hover:bg-gray-50 border border-transparent hover:border-gray-100"
          {...props}
        >
          <div className="text-sm font-semibold text-gray-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
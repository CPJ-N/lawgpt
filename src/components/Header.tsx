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
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex h-20 items-center justify-between px-6">
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center space-x-2"
              >
                <Icons.logo className="h-9 w-9 text-brand-darkblue" />
                <span className="font-bold text-brand-darkblue text-2xl">
                  Attorneia
                </span>
              </Link>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex items-center">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-5 py-2 text-[15px] font-medium text-gray-700 hover:text-brand-darkblue transition-colors">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="px-5 py-2 text-[15px] font-medium text-gray-700 hover:text-brand-darkblue transition-colors">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6 bg-white rounded-xl shadow-xl">
                      <ul className="grid grid-cols-2 gap-6">
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
                    className="px-5 py-2 text-[15px] font-medium text-gray-700 hover:text-brand-darkblue transition-colors">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] p-3 bg-white rounded-xl shadow-xl">
                      <div className="space-y-1">
                        <Link href="/blog" 
                          className="flex items-center gap-2.5 px-3 py-2.5 text-[15px] font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-brand-darkblue transition-colors">
                          <FileText className="h-[18px] w-[18px]" />
                          <span>Blog</span>
                        </Link>
                        <Link href="/case-studies" 
                          className="flex items-center gap-2.5 px-3 py-2.5 text-[15px] font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-brand-darkblue transition-colors">
                          <BookOpen className="h-[18px] w-[18px]" />
                          <span>Case Studies</span>
                        </Link>
                        <Link href="/webinars" 
                          className="flex items-center gap-2.5 px-3 py-2.5 text-[15px] font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-brand-darkblue transition-colors">
                          <Video className="h-[18px] w-[18px]" />
                          <span>Webinars</span>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="px-5 py-2 text-[15px] font-medium text-gray-700 hover:text-brand-darkblue transition-colors">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-5 py-2 text-[15px] font-medium text-gray-700 hover:text-brand-darkblue transition-colors">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <div className="flex items-center gap-2 ml-4">
                    <Link href="/login" legacyBehavior passHref>
                      <Button 
                        variant="ghost"
                        className="font-medium text-[15px] text-gray-700 hover:text-brand-darkblue hover:bg-gray-50/80"
                      >
                        Sign in
                      </Button>
                    </Link>
                    <Link href="/register" legacyBehavior passHref>
                      <Button 
                        className="font-medium text-[15px] bg-brand-darkblue text-white hover:bg-brand-darkblue/90 shadow-sm"
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
          className="block p-4 rounded-lg hover:bg-gray-50 transition-colors"
          {...props}
        >
          <div className="text-[15px] font-semibold text-gray-900 mb-1">{title}</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
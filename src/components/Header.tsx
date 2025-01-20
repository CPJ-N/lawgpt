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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Contract Lifcycle Management",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Enterpise Legal Management",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Legal Collection Management",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="bg-brand-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="font-semibold text-brand-darkblue text-xl hover:text-brand-skyblue transition-colors">
                  Attorneia
                </span>
              </Link>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="bg-transparent">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-brand-darkblue hover:text-brand-skyblue transition-colors px-4 py-2">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-brand-darkblue hover:text-brand-skyblue data-[state=open]:text-brand-skyblue hover:bg-transparent focus:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[200px] bg-brand-white rounded-lg shadow-lg">
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
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Icons.logo className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Attorneia
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Comprehensive legal practice management software designed for modern law firms. 
                              Enhanced efficiency, seamless workflow integration, and advanced legal document automation.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/about" title="About Us">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="/contact" title="Contact">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/blogs" title="Blogs">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Legal Professionals</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Icons.logo className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Attorneia
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Advanced legal practice management platform designed for modern law firms. 
                              Streamline your workflow, manage cases efficiently, and enhance client service delivery.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Solo Practitioners">
                        Manage your cases & causelist in one place
                      </ListItem>
                      <ListItem href="/docs/installation" title="Small & Medium Chambers">
                        Automate Admin tasks and streamline your legal practice
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="Large Law Firms">
                        <p>For Team & Client management</p>
                        <p>Control end-to-end operations</p>
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>For In-house Counsels</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/login" legacyBehavior passHref>
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
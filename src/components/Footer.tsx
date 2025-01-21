import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-darkblue via-brand-mediumblue to-brand-skyblue">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-white">Subscribe to Our Newsletter</h2>
            <p className="text-brand-white/80">
              Stay updated with legal insights and expert advice.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-brand-darkblue/20 border-brand-skyblue/20 text-brand-white placeholder:text-brand-white/50"
              />
              <Button variant="secondary" className="px-6 hover:bg-brand-skyblue">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-white">Connect With Us</h2>
            <div className="flex space-x-6">
              {[
                { icon: FaFacebook, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaTwitter, href: '#' },
                { icon: FaYoutube, href: '#' },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-brand-white/80 hover:text-brand-skyblue transform hover:scale-110 transition-all"
                >
                  <social.icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          {[
            {
              title: "Our Firm",
              links: ["About Us", "Contact", "Practice Areas", "Lawyers", "Lawyers Single"]
            },
            {
              title: "Resources",
              links: ["Case Results", "Packages", "Package Single", "Blog", "Blog Single"]
            }
          ].map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-bold text-brand-white">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href="#" 
                      className="text-brand-white/80 hover:text-brand-white transition-colors duration-200 block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-brand-skyblue/10">
        <div className="container px-4 py-6 mx-auto text-center text-sm text-brand-white/60">
          <p>© {new Date().getFullYear()} Legal Firm. All Rights Reserved. Built by Charles Nischal</p>
        </div>
      </div>
    </footer>
  )
}

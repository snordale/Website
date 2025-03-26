"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ExternalLink } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const mainLinks = [
    { href: "/", label: "Home", number: "1" },
    { href: "/about", label: "About", number: "2" },
    { href: "/projects", label: "Projects", number: "3" },
    { href: "/writing", label: "Writing", number: "4" },
    { href: "/investments", label: "Investments", number: "5" },
    { href: "/boutique", label: "Boutique", number: "6" },
  ]

  const resourceLinks = [
    { href: "/reading-list", label: "Reading List", number: "7" },
    { href: "/aesthetic-goods", label: "Aesthetic Goods", number: "8" },
    { href: "/talent", label: "Talent", number: "9" },
    { href: "/newsletters", label: "Newsletters", number: "0" },
    { href: "/podcasts", label: "Podcasts", number: "↵" },
  ]

  const contactLinks = [
    { href: "/contact", label: "Contact", number: "/" },
    { href: "https://twitter.com/yourusername", label: "Twitter", number: "↗", external: true },
  ]

  return (
    <aside className="w-64 border-r border-border bg-background p-6 hidden md:block">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <Link href="/" className="text-xl font-medium italic">
            Your Name
          </Link>
        </div>

        <nav className="space-y-8 flex-1">
          <div className="space-y-2">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-1 group ${
                  pathname === link.href ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{link.label}</span>
                </span>
                <span className="text-xs text-muted-foreground">{link.number}</span>
              </Link>
            ))}
          </div>

          <div>
            <div className="text-xs uppercase text-muted-foreground mb-2">Resources</div>
            <div className="space-y-2">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-1 group ${
                    pathname === link.href ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs text-muted-foreground">{link.number}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase text-muted-foreground mb-2">Stay in touch</div>
            <div className="space-y-2">
              {contactLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-between py-1 group ${
                    pathname === link.href ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{link.label}</span>
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </span>
                  <span className="text-xs text-muted-foreground">{link.number}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
          <div className="flex space-x-2">
            <button className="px-2 py-1 text-xs rounded-md border border-border">Light</button>
            <button className="px-2 py-1 text-xs rounded-md border border-border">Dark</button>
            <button className="px-2 py-1 text-xs rounded-md border border-border">Auto</button>
          </div>
        </div>
      </div>
    </aside>
  )
}


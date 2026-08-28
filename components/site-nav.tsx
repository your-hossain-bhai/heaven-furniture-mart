'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Bespoke', href: '#bespoke' },
  { label: 'About', href: '#about' },
  { label: 'Showroom', href: '#showroom' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#top"
          className="font-serif text-lg tracking-tight text-foreground"
        >
          Heaven Furniture Mart
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-foreground px-5 py-2 text-sm tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 border border-foreground px-5 py-3 text-center text-sm tracking-wide text-foreground"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl">Heaven Furniture Mart</p>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Bespoke furniture and interior styling, designed and crafted by
              hand in Chattogram since 2020.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
              Visit Us
            </h3>
            <address className="mt-4 flex items-start gap-3 text-sm not-italic leading-relaxed text-background/60">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              Chattogram, Bangladesh
            </address>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/60">
              <li>
                <a
                  href="tel:+8801960481983"
                  className="flex items-center gap-3 transition-colors hover:text-background"
                >
                  <Phone size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  +880 1960-481983
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@heavenfurnituremart.com"
                  className="flex items-center gap-3 transition-colors hover:text-background"
                >
                  <Mail size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  hello@heavenfurnituremart.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
              Follow
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/60">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  Facebook
                  <ArrowUpRight size={14} className="text-accent" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  Instagram
                  <ArrowUpRight size={14} className="text-accent" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  YouTube
                  <ArrowUpRight size={14} className="text-accent" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-background/10 pt-6 text-xs text-background/40">
          <p>
            &copy; {new Date().getFullYear()} Heaven Furniture Mart. All rights
            reserved. Founded by Abul Kalam Bhuiyan.
          </p>
        </div>
      </div>
    </footer>
  )
}

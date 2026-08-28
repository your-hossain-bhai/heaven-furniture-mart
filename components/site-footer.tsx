import { MapPin, Phone, Mail, ArrowUpRight, Clock, MessageCircle } from 'lucide-react'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com/HeavenFurnitureMart' },
  { label: 'Instagram', href: 'https://instagram.com/heaven_furniture_ltd' },
  { label: 'YouTube', href: 'https://youtube.com/@HeavenFurnitureMart' },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA band */}
      <div className="border-b border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-serif text-2xl leading-tight text-balance md:text-3xl">
              Let&apos;s design something worth keeping.
            </p>
            <p className="mt-2 text-sm text-background/60">
              Free consultation. Delivery and installation included.
            </p>
          </div>
          <a
            href="https://wa.me/8801960481983"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Info columns */}
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-4">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold tracking-[0.12em]">
                HE<span className="text-accent">A</span>VEN
              </span>
              <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-background/50">
                Furniture Mart
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-background/60 text-pretty">
              Bespoke furniture and interior styling, designed and crafted by
              hand in Chattogram since 2020.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
              Visit Us
            </h3>
            <address className="mt-5 flex items-start gap-3 text-sm not-italic leading-relaxed text-background/60">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                Agrabad Access Road,
                <br />
                Chattogram, Bangladesh
              </span>
            </address>
            <div className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-background/60">
              <Clock size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                Sat–Thu: 10:00 AM – 9:00 PM
                <br />
                Friday: 3:00 PM – 9:00 PM
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-background/60">
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
                  href="mailto:heavenfurnituremart@gmail.com"
                  className="flex items-start gap-3 transition-colors hover:text-background"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="break-all">heavenfurnituremart@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
              Follow
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-background/60">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-background"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={14}
                      className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-background/10 pt-6 text-xs text-background/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Heaven Furniture Mart. All rights
            reserved.
          </p>
          <p>Founded by Abul Kalam Bhuiyan, Managing Director.</p>
        </div>
      </div>
    </footer>
  )
}

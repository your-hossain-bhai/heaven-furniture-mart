import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const WHATSAPP_URL = 'https://wa.me/8801960481983'

export function FinalCta() {
  return (
    <section id="contact" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32 lg:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Start Your Commission
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl">
            Tell us about your space. We&apos;ll craft the rest.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Message us on WhatsApp with your room, your idea, or even just a
            photo — and receive a free design consultation.
          </p>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-sm uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp +880 1960-481983
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

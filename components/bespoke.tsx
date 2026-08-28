import { PencilRuler, Hammer, Gem } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: PencilRuler,
    title: 'Free Design Consultation',
    description:
      'Sit with our designers, share your space and vision, and receive a tailored proposal at no cost.',
  },
  {
    icon: Hammer,
    title: 'Skilled In-House Craftsmanship',
    description:
      'Every piece is shaped, joined, and finished by our own master craftsmen — never outsourced.',
  },
  {
    icon: Gem,
    title: 'Premium Hand-Picked Materials',
    description:
      'Seasoned hardwoods, quality boards, and fittings selected by hand for beauty and longevity.',
  },
]

export function Bespoke() {
  return (
    <section id="bespoke" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
        <Reveal>
          <div className="mb-14 max-w-xl md:mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              The Bespoke Difference
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-balance md:text-4xl">
              From your idea to your interior, in three commitments.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.12}>
              <div className="border-t border-accent/40 pt-6">
                <pillar.icon
                  size={24}
                  className="text-accent"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-serif text-xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

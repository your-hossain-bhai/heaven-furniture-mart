import { Reveal } from '@/components/reveal'

export function BrandIntro() {
  return (
    <section id="about" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground text-balance md:text-4xl">
              A house of craft, founded on trust.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-8">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:columns-2 lg:gap-12 lg:space-y-0">
              <p className="lg:mb-6">
                Heaven Furniture Mart was founded in 2020 by Managing Director
                Abul Kalam Bhuiyan with a simple conviction: furniture should
                be made for the home it lives in, not the other way around.
                What began as a small workshop in Chattogram has grown into a
                full bespoke studio serving families and businesses across the
                region.
              </p>
              <p>
                Every piece begins with a conversation — your space, your
                measurements, your way of living. Our craftsmen then shape
                hand-picked timber and premium materials into furniture that
                is measured to the millimetre and finished to last
                generations. No catalogues. No compromises. Just work we are
                proud to put our name on.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

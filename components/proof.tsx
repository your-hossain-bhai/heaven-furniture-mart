import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const gallery = [
  {
    src: '/images/proof-workshop.png',
    alt: 'Craftsman carving detail into solid wood in the workshop',
    tall: true,
  },
  {
    src: '/images/proof-detail.png',
    alt: 'Hand-polished walnut joint with brass inlay detail',
    tall: false,
  },
  {
    src: '/images/proof-delivery.png',
    alt: 'Completed bespoke interior styled with handcrafted furniture',
    tall: false,
  },
  {
    src: '/images/proof-showroom.png',
    alt: 'Heaven Furniture Mart showroom floor in Chattogram',
    tall: true,
  },
]

const milestones = [
  {
    year: '2020',
    title: 'The First Workshop',
    description:
      'Abul Kalam Bhuiyan founds Heaven Furniture Mart in Chattogram with a small team of craftsmen and a bespoke-first promise.',
  },
  {
    year: '2021',
    title: 'Full Interior Styling',
    description:
      'We expand beyond individual pieces into complete room and interior styling projects for homes and offices.',
  },
  {
    year: '2023',
    title: 'The Showroom Opens',
    description:
      'Our dedicated showroom opens its doors, letting clients see, touch, and sit with our craftsmanship in person.',
  },
  {
    year: 'Today',
    title: 'Hundreds of Homes',
    description:
      'From single armchairs to whole-home commissions, our work now lives in hundreds of spaces across the region.',
  },
]

export function Proof() {
  return (
    <section id="showroom" className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
      <Reveal>
        <div className="mb-12 max-w-xl md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Proof in the Making
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground text-balance md:text-4xl">
            The workshop, the showroom, the years between.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="columns-2 gap-4 [&>*]:mb-4">
            {gallery.map((item, i) => (
              <Reveal key={item.src} delay={i * 0.08}>
                <div
                  className={`relative w-full overflow-hidden border border-border ${
                    item.tall ? 'aspect-[3/4]' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={item.src || '/placeholder.svg'}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <ol className="relative border-l border-accent/40 pl-8">
            {milestones.map((milestone, i) => (
              <Reveal key={milestone.year} delay={i * 0.1}>
                <li className="relative pb-10 last:pb-0">
                  <span
                    className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">
                    {milestone.year}
                  </p>
                  <h3 className="mt-2 font-serif text-lg text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

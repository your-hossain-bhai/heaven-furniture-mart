import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const gallery = [
  {
    src: '/images/real/showroom-teal-sofas.jpg',
    alt: 'Teal velvet sofa sets on the Heaven Furniture Mart showroom floor',
    tall: true,
  },
  {
    src: '/images/real/cabinet-black-gold.jpg',
    alt: 'Handcrafted black cabinet with gold hardware and open shelving',
    tall: false,
  },
  {
    src: '/images/real/sofa-grey-velvet.jpg',
    alt: 'Grey velvet sofa with hand-carved gold frame and embroidered cushions',
    tall: false,
  },
  {
    src: '/images/real/showroom-dining-hall.jpg',
    alt: 'Dining hall display inside the Heaven Furniture Mart showroom in Chattogram',
    tall: true,
  },
  {
    src: '/images/real/sofa-royal-blue.jpg',
    alt: 'Royal blue tufted sofa set with gold-finished carved coffee table',
    tall: true,
  },
  {
    src: '/images/real/dining-marble-leather.jpg',
    alt: 'Marble-top dining table with hand-carved leather-upholstered chairs',
    tall: false,
  },
]

const milestones = [
  {
    year: '2020',
    title: 'Founded in Chattogram',
    description:
      'Heaven Furniture Mart is founded by Managing Director Abul Kalam Bhuiyan with a bespoke-first promise.',
  },
  {
    year: '2021',
    title: 'The Agrabad Showroom Opens',
    description:
      'Our showroom on Agrabad Access Road opens its doors, letting clients see, touch, and sit with our craftsmanship in person.',
  },
  {
    year: '2024–2025',
    title: 'International Furniture Fair',
    description:
      'We exhibit at the International Furniture Fair, Chattogram, presenting our bespoke work to a wider audience.',
  },
  {
    year: '2025',
    title: 'Chamber of Commerce Member',
    description:
      'Heaven Furniture Mart becomes a member of the Chamber of Commerce.',
  },
  {
    year: '2026',
    title: 'Nationwide BFIOA Recognition',
    description:
      'Our craftsmanship receives nationwide recognition from the BFIOA.',
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
          <Reveal>
            <figure className="mb-12 border-l-2 border-accent pl-6">
              <blockquote className="font-serif text-xl leading-relaxed text-foreground text-pretty">
                {'"At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients."'}
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="text-accent">—</span> Abul Kalam Bhuiyan,
                Managing Director
              </figcaption>
            </figure>
          </Reveal>
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

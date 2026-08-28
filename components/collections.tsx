'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const collections = [
  {
    title: 'Living Room',
    description: 'Sofas, lounge chairs, and centre tables shaped for gathering.',
    image: '/images/real/living-wooden-sofa.jpg',
  },
  {
    title: 'Bedroom',
    description: 'Beds, wardrobes, and dressers built for rest and calm.',
    image: '/images/real/bedroom-green-bed.jpg',
  },
  {
    title: 'Dining',
    description: 'Tables and seating made for long meals and long memories.',
    image: '/images/real/dining-cream-set.jpg',
  },
  {
    title: 'Office & Study',
    description: 'Desks, shelving, and workspaces that focus the mind.',
    image: '/images/real/office-workspace.jpg',
  },
]

export function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              The Collections
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground text-balance md:text-4xl">
              Every room, made to measure.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Four categories, endless configurations. Each piece is customized
            to your exact space and finish preferences.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection, i) => (
          <Reveal key={collection.title} delay={i * 0.1}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group block border border-border bg-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={collection.image || '/placeholder.svg'}
                  alt={`${collection.title} collection`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-2 p-5">
                <div>
                  <h3 className="font-serif text-lg text-foreground">
                    {collection.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {collection.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

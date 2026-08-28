'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const products = [
  {
    name: 'Classic Gold Sofa Set',
    category: 'Living Room',
    image: '/images/real/hero-gold-sofa.jpg',
  },
  {
    name: 'Wooden Frame Sofa Set',
    category: 'Living Room',
    image: '/images/real/living-wooden-sofa.jpg',
  },
  {
    name: 'Royal Blue Tufted Sofa',
    category: 'Living Room',
    image: '/images/real/sofa-royal-blue.jpg',
  },
  {
    name: 'Grey Velvet Sofa',
    category: 'Living Room',
    image: '/images/real/sofa-grey-velvet.jpg',
  },
  {
    name: 'Carved Tea Chair Set',
    category: 'Living Room',
    image: '/images/real/living-carved-chairs.jpg',
  },
  {
    name: 'Emerald Platform Bed',
    category: 'Bedroom',
    image: '/images/real/bedroom-green-bed.jpg',
  },
  {
    name: 'Blue Poster Bed Set',
    category: 'Bedroom',
    image: '/images/real/bed-blue-poster.jpg',
  },
  {
    name: 'White & Gold Bedroom Set',
    category: 'Bedroom',
    image: '/images/real/bedroom-white-gold.jpg',
  },
  {
    name: 'Wooden Bed & Wardrobe',
    category: 'Bedroom',
    image: '/images/real/bedroom-wooden-set.jpg',
  },
  {
    name: 'Cream Carved Dining Set',
    category: 'Dining',
    image: '/images/real/dining-cream-set.jpg',
  },
  {
    name: 'Marble-Top Dining Table',
    category: 'Dining',
    image: '/images/real/dining-marble-leather.jpg',
  },
  {
    name: 'Gold Ornate Dining Set',
    category: 'Dining',
    image: '/images/real/dining-gold-ornate.jpg',
  },
  {
    name: 'Terracotta Dining Set',
    category: 'Dining',
    image: '/images/real/dining-terracotta.jpg',
  },
  {
    name: 'Black & Gold Cabinet',
    category: 'Storage',
    image: '/images/real/cabinet-black-gold.jpg',
  },
  {
    name: 'Gold Display Showcase',
    category: 'Storage',
    image: '/images/real/cabinet-gold-showcase.jpg',
  },
]

export function Collections() {
  return (
    <section
      id="collections"
      className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8"
    >
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              The Collections
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground text-balance md:text-4xl">
              A closer look at our craft.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Living room, bedroom, dining, and storage — a selection of real
            pieces from our showroom. Every design is customized to your exact
            space and finish.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.name} delay={(i % 3) * 0.08}>
            <motion.a
              href="#contact"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group flex h-full flex-col overflow-hidden border border-border bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={`${product.name} — ${product.category} furniture by Heaven Furniture Mart`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-background/85 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
                  {product.category}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <h3 className="font-serif text-base leading-snug text-foreground text-pretty">
                  {product.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-foreground px-7 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Request a custom piece
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/8801960481983'

export function Hero() {
  return (
    <section id="top" className="pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs uppercase tracking-[0.3em] text-accent"
          >
            Bespoke Furniture · Chattogram
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl leading-[1.08] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl"
          >
            Furniture, Crafted Around You.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty"
          >
            Bespoke furniture and interior styling tailored to your space,
            size, and lifestyle. Designed, crafted, and customized by hand in
            Chattogram.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-accent/40 p-3 md:p-4">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/hero-showroom.png"
                alt="Luxury living room showroom by Heaven Furniture Mart"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { BrandIntro } from '@/components/brand-intro'
import { Collections } from '@/components/collections'
import { Bespoke } from '@/components/bespoke'
import { Proof } from '@/components/proof'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <BrandIntro />
        <Collections />
        <Bespoke />
        <Proof />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}

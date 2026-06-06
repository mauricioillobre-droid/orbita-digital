import type { Metadata } from 'next'
import HeroAnimated from '@/components/home/HeroAnimated'
import ServicesGrid from '@/components/home/ServicesGrid'
import HowWeWork from '@/components/home/HowWeWork'
import WorksPreview from '@/components/home/WorksPreview'
import Testimonials from '@/components/home/Testimonials'
import TeamCTA from '@/components/home/TeamCTA'

export const metadata: Metadata = {
  title: 'Agencia Web y Automatización para Pymes en Argentina | Órbita Digital',
  description:
    'Diseño web profesional, automatización con WhatsApp e inteligencia artificial para pymes en Buenos Aires. Respondemos en menos de 24hs. Contactanos hoy.',
  keywords:
    'agencia web argentina, diseño web para pymes, automatización whatsapp, desarrollo web buenos aires, agencia digital pymes',
}

export default function Home() {
  return (
    <>
      <HeroAnimated />
      <ServicesGrid />
      <HowWeWork />
      <WorksPreview />
      <Testimonials />
      <TeamCTA />
    </>
  )
}

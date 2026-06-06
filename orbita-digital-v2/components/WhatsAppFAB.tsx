'use client'

import { motion } from 'framer-motion'
import { IconBrandWhatsapp } from '@tabler/icons-react'

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/5491122355689"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="md:hidden fixed bottom-6 right-4 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.4, ease: 'easeOut' }}
      whileTap={{ scale: 0.95 }}
    >
      <IconBrandWhatsapp size={20} aria-hidden="true" />
      <span className="text-sm font-dm font-medium">Escribinos</span>
    </motion.a>
  )
}

'use client'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/34603768714"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp — Escríbenos"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)] hover:bg-[#20c45e] transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp official SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="20"
        height="20"
        fill="white"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.469 2.027 7.77L0 32l8.43-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.856l-.486-.29-5.003 1.191 1.26-4.872-.32-.5A13.239 13.239 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.927c-.398-.2-2.355-1.162-2.72-1.295-.365-.133-.63-.2-.896.2-.266.398-1.03 1.295-1.263 1.56-.232.266-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.975-1.182-1.055-1.98-2.358-2.213-2.756-.232-.398-.025-.613.175-.812.179-.178.398-.465.597-.697.2-.232.266-.398.398-.664.133-.265.067-.497-.033-.697-.1-.2-.896-2.158-1.228-2.956-.323-.776-.65-.671-.896-.683l-.764-.013c-.266 0-.697.1-1.063.497-.365.398-1.394 1.362-1.394 3.32s1.428 3.85 1.627 4.116c.2.265 2.81 4.29 6.81 6.018.952.412 1.695.658 2.274.842.955.304 1.824.261 2.512.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.266-.763-.465z" />
      </svg>
      Escríbenos
    </motion.a>
  )
}

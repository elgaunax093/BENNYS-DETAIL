import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import StatsBar from '@/components/sections/StatsBar'
import MarcasBar from '@/components/sections/MarcasBar'
import ServiciosSection from '@/components/sections/ServiciosSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import NosotrosSection from '@/components/sections/NosotrosSection'
import ResenasSection from '@/components/sections/ResenasSection'
import ComparativaSection from '@/components/sections/ComparativaSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactoSection from '@/components/sections/ContactoSection'
import Footer from '@/components/sections/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <MarcasBar />
      <ServiciosSection />
      <PortfolioSection />
      <NosotrosSection />
      <ResenasSection />
      <ComparativaSection />
      <FAQSection />
      <ContactoSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

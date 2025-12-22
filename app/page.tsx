import CTABanner from "@/components/cta-banner"
import FAQ from "@/components/faq"
import Features from "@/components/features"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar/navbar"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Testimonials />
        <CTABanner />
        <Footer />
      </main>
    </>
  )
}

import { SiteHeader } from "@/components/site-header";
import { CartDrawer } from "@/components/cart-drawer";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProductGrid } from "@/components/product-grid";
import { VisionSection } from "@/components/vision-section";
import { Testimonials } from "@/components/testimonials";
import { NewsletterBand } from "@/components/newsletter-band";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ProductGrid products={PRODUCTS} />
        <VisionSection />
        <Testimonials />
        <NewsletterBand />
        <ContactSection />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  );
}

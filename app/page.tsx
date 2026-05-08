import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import ArmadaPreview from "@/components/home/ArmadaPreview";
import Differentiation from "@/components/home/Differentiation";
import Testimonials from "@/components/home/Testimonials";
import Location from "@/components/home/Location";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <ArmadaPreview />
        <Differentiation />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

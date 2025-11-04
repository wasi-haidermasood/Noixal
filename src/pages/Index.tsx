import Navigation from "@/components/Navigation";
import { HeroSection } from '@/components/hero-section-5'; // The hero component
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
<HeroSection />
        <Services />
        <Portfolio />
        <Testimonials />
        <CtaBanner />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
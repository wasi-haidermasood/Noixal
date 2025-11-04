import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
const heroImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
import { useCountUp } from "@/hooks/useCountUp";

const Hero = () => {
  const { count: clientsCount, ref: clientsRef } = useCountUp({ end: 500 });
  const { count: roiCount, ref: roiRef } = useCountUp({ end: 300 });
  const { count: yearsCount, ref: yearsRef } = useCountUp({ end: 5 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 85, 204, 0.75), rgba(126, 34, 206, 0.75)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Animated gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
          Transform Your
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Online Presence
          </span>
        </h1>

        <p className="text-lg md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Noixal Marketing Solutions drives measurable growth through{" "}
          <span className="font-semibold text-blue-200">
            cutting-edge strategies
          </span>
          , SEO optimization, and{" "}
          <span className="font-semibold text-pink-200">
            innovative web solutions
          </span>{" "}
          that turn visitors into loyal customers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("#contact")}
            className="text-lg px-8 py-4 rounded-full bg-gradient-to-r text-white from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Growing Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("#portfolio")}
            className="text-lg px-8 py-4 rounded-full border text-white border-white/40 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            View Our Work
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 pt-16 border-t border-white/20">
          <div
            className="text-center transform hover:scale-105 transition duration-300"
            ref={clientsRef}
          >
            <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
              {clientsCount}+
            </div>
            <div className="text-white/80">Clients Served</div>
          </div>
          <div
            className="text-center transform hover:scale-105 transition duration-300"
            ref={roiRef}
          >
            <div className="text-4xl md:text-5xl font-bold text-purple-300 mb-2">
              {roiCount}%
            </div>
            <div className="text-white/80">Avg ROI Increase</div>
          </div>
          <div className="text-center transform hover:scale-105 transition duration-300">
            <div className="text-4xl md:text-5xl font-bold text-pink-300 mb-2">
              24/7
            </div>
            <div className="text-white/80">Support Available</div>
          </div>
          <div
            className="text-center transform hover:scale-105 transition duration-300"
            ref={yearsRef}
          >
            <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">
              {yearsCount}+
            </div>
            <div className="text-white/80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

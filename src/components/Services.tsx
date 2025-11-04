import { Button } from "@/components/ui/button";
import { 
  Search, 
  Smartphone, 
  Globe, 
  Target, 
  BarChart3, 
  Palette,
  ArrowRight
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const Services = () => {
  const services = [
    {
      Icon: Search,
      name: "Search Engine Optimization",
      description: "Dominate search results with our proven SEO strategies. We optimize your website to rank higher, drive organic traffic, and increase visibility for targeted keywords.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
      href: "#contact",
      cta: "Get Started",
      className: "md:col-span-2",
    },
    {
      Icon: Smartphone,
      name: "Social Media Marketing",
      description: "Build engaged communities and drive conversions across all major social platforms. From content creation to paid advertising, we maximize your social presence.",
      features: ["Content Strategy", "Paid Advertising", "Community Management"],
      href: "#contact",
      cta: "Get Started",
      className: "md:col-span-1",
    },
    {
      Icon: Globe,
      name: "Web Development",
      description: "Create stunning, high-performance websites that convert visitors into customers. Mobile-responsive, SEO-optimized, and built for speed and user experience.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration"],
      href: "#contact",
      cta: "Get Started",
      className: "md:col-span-1",
    },
    {
      Icon: Target,
      name: "Pay-Per-Click Advertising",
      description: "Maximize ROI with targeted PPC campaigns across Google Ads, Facebook, and other platforms. Drive immediate traffic and qualified leads to your business.",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
      href: "#contact",
      cta: "Get Started",
      className: "md:col-span-2",
    },
    {
      Icon: BarChart3,
      name: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and reporting. Track performance, measure ROI, and optimize strategies for continuous growth.",
      features: ["Performance Tracking", "ROI Analysis", "Custom Dashboards"],
      href: "#contact",
      cta: "Get Started",
      className: "md:col-span-1",
    },
    {
      Icon: Palette,
      name: "Brand Strategy & Design",
      description: "Develop a compelling brand identity that resonates with your target audience. From logo design to complete brand guidelines and marketing materials.",
      features: ["Brand Identity", "Logo Design", "Marketing Materials"],
      href: "#contact",
      cta: "Get Started",
      className: "md:col-span-2",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="bg-black bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth 
            and establish your dominant online presence.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="mb-12 lg:mb-16">
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-blue-600 rounded-full"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
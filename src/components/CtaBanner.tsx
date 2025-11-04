"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Rocket, TrendingUp, DollarSign } from "lucide-react";
import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/ui/cta-section-with-gallery";

const CTA_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Analytics/Dashboard
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Growth charts
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop", // Team success
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Strategy meeting
];

const CtaBanner = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* Left Content */}
          <ContainerStagger>
            {/* Icon Badge */}
           

            {/* Badge Text */}
            <ContainerAnimated className="mb-4 inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              Limited Time Offer
            </ContainerAnimated>

            {/* Main Heading */}
            <ContainerAnimated className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dominate
              </span>{" "}
              Your Market?
            </ContainerAnimated>

            {/* Description */}
            <ContainerAnimated className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
              Stop watching competitors grow while you fall behind. Join the
              businesses winning with{" "}
              <span className="font-semibold text-blue-600">proven strategies</span>{" "}
              and ROI-focused campaigns.
            </ContainerAnimated>

            {/* Feature Cards */}
            <ContainerAnimated className="mb-8">
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 shadow-sm">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center group cursor-pointer">
                    <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Rocket className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-black text-sm font-semibold">Fast Results</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="text-black text-sm font-semibold">Guaranteed Growth</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-12 h-12 mx-auto mb-2 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                      <DollarSign className="h-6 w-6 text-pink-600" />
                    </div>
                    <div className="text-black text-sm font-semibold">ROI-Focused</div>
                  </div>
                </div>
              </div>
            </ContainerAnimated>

            {/* CTA Button */}
            <ContainerAnimated className="mb-6">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ContainerAnimated>

            {/* Benefits List */}
            <ContainerAnimated className="space-y-2 text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">Free consultation + $500 strategy blueprint</span>
              </div>
            </ContainerAnimated>

            {/* Urgency Badge */}
            <ContainerAnimated className="mt-6">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-sm font-semibold text-white shadow-lg">
                ⏰ Only 3 spots left this month!
              </div>
            </ContainerAnimated>
          </ContainerStagger>

          {/* Right Gallery */}
          <GalleryGrid>
            {CTA_IMAGES.map((imageUrl, index) => (
              <GalleryGridCell index={index} key={index}>
                <div className="relative size-full overflow-hidden rounded-xl border border-neutral-200 shadow-lg">
                  <img
                    className="size-full object-cover object-center hover:scale-110 transition-transform duration-500"
                    width="100%"
                    height="100%"
                    src={imageUrl}
                    alt={`Success story ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </GalleryGridCell>
            ))}
          </GalleryGrid>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
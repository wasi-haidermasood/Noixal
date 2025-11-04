import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

const Portfolio = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-6">
            <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-200">
              SEO & PPC
            </Badge>
            <div className="flex items-center text-blue-600 font-bold text-lg md:text-xl mb-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              450% ROI Increase
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 mb-3">
              E-commerce Growth Strategy
            </h3>
            <p className="text-neutral-600 text-sm md:text-base mb-6 leading-relaxed">
              Transformed an online retailer's digital presence through comprehensive SEO optimization 
              and targeted PPC campaigns, resulting in 300% increase in organic traffic.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-blue-700">300%</div>
              <div className="text-xs text-neutral-500">Organic Traffic</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-blue-700">450%</div>
              <div className="text-xs text-neutral-500">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-blue-700">85%</div>
              <div className="text-xs text-neutral-500">Lead Quality</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="text-xs">SEO</Badge>
            <Badge variant="outline" className="text-xs">Google Ads</Badge>
            <Badge variant="outline" className="text-xs">Conversion Optimization</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop"
              alt="SEO Analytics Dashboard"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
              alt="Growth Chart"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-6">
            <Badge className="mb-3 bg-purple-100 text-purple-700 hover:bg-purple-200">
              Content Marketing
            </Badge>
            <div className="flex items-center text-purple-600 font-bold text-lg md:text-xl mb-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              5x Lead Generation
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 mb-3">
              SaaS Lead Generation
            </h3>
            <p className="text-neutral-600 text-sm md:text-base mb-6 leading-relaxed">
              Developed and executed a content marketing strategy for B2B SaaS company, generating qualified 
              leads through thought leadership and SEO-optimized content.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 p-3 md:p-4 bg-purple-50 rounded-lg border border-purple-100">
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-purple-700">500%</div>
              <div className="text-xs text-neutral-500">Lead Increase</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-purple-700">40%</div>
              <div className="text-xs text-neutral-500">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-purple-700">200k+</div>
              <div className="text-xs text-neutral-500">Impressions</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="text-xs">Content Strategy</Badge>
            <Badge variant="outline" className="text-xs">Lead Generation</Badge>
            <Badge variant="outline" className="text-xs">B2B Marketing</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
              alt="Team Collaboration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=500&fit=crop"
              alt="Content Creation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-6">
            <Badge className="mb-3 bg-green-100 text-green-700 hover:bg-green-200">
              Local SEO
            </Badge>
            <div className="flex items-center text-green-600 font-bold text-lg md:text-xl mb-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              #1 Local Rankings
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 mb-3">
              Local Business Domination
            </h3>
            <p className="text-neutral-600 text-sm md:text-base mb-6 leading-relaxed">
              Achieved #1 local search rankings for multiple keywords, increased foot traffic by 200%, 
              and established dominant local online presence.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 p-3 md:p-4 bg-green-50 rounded-lg border border-green-100">
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-green-700">#1</div>
              <div className="text-xs text-neutral-500">Local Rankings</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-green-700">200%</div>
              <div className="text-xs text-neutral-500">Foot Traffic</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-green-700">50+</div>
              <div className="text-xs text-neutral-500">Reviews</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="text-xs">Local SEO</Badge>
            <Badge variant="outline" className="text-xs">Google My Business</Badge>
            <Badge variant="outline" className="text-xs">Reputation Management</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=500&fit=crop"
              alt="Local Business"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=500&fit=crop"
              alt="Customer Reviews"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-6">
            <Badge className="mb-3 bg-pink-100 text-pink-700 hover:bg-pink-200">
              Social Media
            </Badge>
            <div className="flex items-center text-pink-600 font-bold text-lg md:text-xl mb-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              1M+ Engagement
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 mb-3">
              Social Media Revolution
            </h3>
            <p className="text-neutral-600 text-sm md:text-base mb-6 leading-relaxed">
              Built engaged community of 100k+ followers, generated viral content campaigns, and drove 
              significant brand awareness and sales through social platforms.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 p-3 md:p-4 bg-pink-50 rounded-lg border border-pink-100">
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-pink-700">100k+</div>
              <div className="text-xs text-neutral-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-pink-700">1M+</div>
              <div className="text-xs text-neutral-500">Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-pink-700">25%</div>
              <div className="text-xs text-neutral-500">Sales Increase</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="text-xs">Social Media</Badge>
            <Badge variant="outline" className="text-xs">Community Building</Badge>
            <Badge variant="outline" className="text-xs">Viral Marketing</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=500&fit=crop"
              alt="Social Media Marketing"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=500&fit=crop"
              alt="Social Engagement"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="portfolio" className="bg-white">
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
            Success <span className="bg-black  bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped companies achieve 
            breakthrough growth and dominate their markets.
          </p>
        </div>
      </div>

      <Timeline data={timelineData} showHeader={false} />

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-20">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-base md:text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses that have transformed their digital presence 
            and achieved remarkable growth with our proven strategies.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white text-blue-600 hover:bg-gray-100 rounded-full"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
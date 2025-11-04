import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Shield,
  Heart,
  Zap,
  X,
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is designed with one goal: measurable results that grow your business."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of digital trends and leverage cutting-edge technologies to give you a competitive advantage."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust, transparency, and results."
    },
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "Years of experience across industries, backed by certifications and a track record of success."
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Noixal Haider",
      designation: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      expertise: "Digital Strategy & Growth",
      bio: "Leading digital transformation for 5+ years with expertise in scaling businesses from startup to enterprise.",
      achievements: [
        "10+ years in digital marketing",
        "Scaled 50+ businesses to 7-figures",
        "Google & Facebook Certified",
        "Featured in Forbes & Entrepreneur"
      ],
      specialties: ["Growth Strategy", "Team Leadership", "Business Development", "ROI Optimization"],
      email: "Noixal@noixal.com",
      linkedin: "linkedin.com/in/Noixalhaider",
      twitter: "@Noixalhaider"
    },
    {
      id: 2,
      name: "Usman Asif",
      designation: "SEO Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      expertise: "Search Engine Optimization",
      bio: "SEO specialist with proven track record of achieving #1 rankings and driving organic growth for Fortune 500 companies.",
      achievements: [
        "8+ years SEO experience",
        "Achieved #1 rankings for 500+ keywords",
        "Moz & SEMrush Certified",
        "Generated $10M+ in organic revenue"
      ],
      specialties: ["Technical SEO", "Link Building", "Content Strategy", "Local SEO"],
      email: "usman@noixal.com",
      linkedin: "linkedin.com/in/usmanasif",
      twitter: "@usmanasif"
    },
    {
      id: 3,
      name: "Saim Gohar",
      designation: "Creative Director",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      expertise: "Brand & Design",
      bio: "Award-winning designer creating compelling visual identities that resonate with target audiences and drive conversions.",
      achievements: [
        "12+ years in design",
        "Winner of 15+ design awards",
        "Worked with Nike, Adidas, Samsung",
        "Led rebranding for 100+ companies"
      ],
      specialties: ["Brand Identity", "UI/UX Design", "Visual Strategy", "Creative Direction"],
      email: "saim@noixal.com",
      linkedin: "linkedin.com/in/saimgohar",
      twitter: "@saimgohar"
    },
    {
      id: 4,
      name: "Ali Haider",
      designation: "Analytics Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      expertise: "Data & Performance",
      bio: "Data scientist turning complex analytics into actionable insights that drive strategic decisions and maximize ROI.",
      achievements: [
        "7+ years in data analytics",
        "Google Analytics Certified",
        "Improved ROI by 300% on average",
        "Built 50+ custom dashboards"
      ],
      specialties: ["Data Analysis", "Performance Tracking", "Conversion Optimization", "Marketing Attribution"],
      email: "ali@noixal.com",
      linkedin: "linkedin.com/in/alihaider",
      twitter: "@alihaider"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      designation: "Content Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      expertise: "Content Marketing",
      bio: "Content marketing expert crafting compelling narratives that engage audiences and drive conversions across all platforms.",
      achievements: [
        "9+ years in content marketing",
        "Created 1000+ viral campaigns",
        "HubSpot & Content Marketing Certified",
        "Generated 50M+ impressions"
      ],
      specialties: ["Content Strategy", "Copywriting", "SEO Content", "Editorial Direction"],
      email: "sarah@noixal.com",
      linkedin: "linkedin.com/in/sarahjohnson",
      twitter: "@sarahjohnson"
    },
    {
      id: 6,
      name: "Michael Chen",
      designation: "PPC Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      expertise: "Paid Advertising",
      bio: "Google Ads expert managing multi-million dollar campaigns with exceptional ROAS for e-commerce and SaaS brands.",
      achievements: [
        "6+ years PPC experience",
        "Managed $20M+ in ad spend",
        "Google Ads & Bing Certified",
        "Average ROAS of 8x+"
      ],
      specialties: ["Google Ads", "Shopping Campaigns", "Display Advertising", "Remarketing"],
      email: "michael@noixal.com",
      linkedin: "linkedin.com/in/michaelchen",
      twitter: "@michaelchen"
    },
    {
      id: 7,
      name: "Emily Rodriguez",
      designation: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      expertise: "Social Media Marketing",
      bio: "Social media strategist building engaged communities and viral campaigns across Instagram, TikTok, and LinkedIn.",
      achievements: [
        "5+ years social media experience",
        "Grew accounts to 1M+ followers",
        "Meta Blueprint Certified",
        "Created 100+ viral campaigns"
      ],
      specialties: ["Social Strategy", "Community Management", "Influencer Marketing", "Paid Social"],
      email: "emily@noixal.com",
      linkedin: "linkedin.com/in/emilyrodriguez",
      twitter: "@emilyrodriguez"
    },
    {
      id: 8,
      name: "David Kim",
      designation: "Web Developer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
      expertise: "Full-Stack Development",
      bio: "Senior developer building high-performance websites and applications with focus on speed, SEO, and user experience.",
      achievements: [
        "10+ years development experience",
        "Built 200+ websites",
        "AWS & React Certified",
        "Core Web Vitals expert"
      ],
      specialties: ["React/Next.js", "WordPress", "E-commerce", "Performance Optimization"],
      email: "david@noixal.com",
      linkedin: "linkedin.com/in/davidkim",
      twitter: "@davidkim"
    },
    {
      id: 9,
      name: "Jessica Taylor",
      designation: "Email Marketing Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      expertise: "Email Campaigns",
      bio: "Email marketing specialist creating automated sequences and campaigns that consistently achieve 40%+ open rates.",
      achievements: [
        "7+ years email marketing",
        "Generated $5M+ in revenue",
        "Klaviyo & Mailchimp Certified",
        "40%+ average open rate"
      ],
      specialties: ["Email Automation", "List Building", "Segmentation", "A/B Testing"],
      email: "jessica@noixal.com",
      linkedin: "linkedin.com/in/jessicataylor",
      twitter: "@jessicataylor"
    },
    {
      id: 10,
      name: "Marcus Williams",
      designation: "Video Marketing Director",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
      expertise: "Video Production",
      bio: "Video marketing expert producing high-converting content for YouTube, TikTok, and brand campaigns.",
      achievements: [
        "8+ years video production",
        "Created 500+ marketing videos",
        "100M+ total video views",
        "Award-winning videographer"
      ],
      specialties: ["Video Strategy", "Production", "YouTube Marketing", "Video Ads"],
      email: "marcus@noixal.com",
      linkedin: "linkedin.com/in/marcuswilliams",
      twitter: "@marcuswilliams"
    }
  ];

  const tooltipItems = teamMembers.map(member => ({
    id: member.id,
    name: member.name,
    designation: member.designation,
    image: member.image
  }));

  // Duplicate items for seamless loop
  const duplicatedItems = [...tooltipItems, ...tooltipItems];

  const handleMemberClick = (id: number) => {
    setSelectedMember(id);
  };

  const getSelectedMemberData = () => {
    return teamMembers.find(m => m.id === selectedMember);
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              At Noixal, we're more than just a digital marketing agency. 
              We're your growth partners, dedicated to transforming your business through 
              innovative strategies and proven results.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center text-black">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  Our Mission
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  To empower businesses of all sizes to achieve unprecedented digital growth 
                  through cutting-edge marketing strategies, innovative technologies, and 
                  data-driven decision making.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center text-black">
                  <Users className="h-6 w-6 text-purple-600 mr-3" />
                  Our Vision
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  To be the leading digital marketing partner that businesses trust to 
                  navigate the ever-evolving digital landscape and achieve sustainable, 
                  long-term growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            What Drives <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Us</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-neutral-200 bg-white text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-black">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">
            Meet Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Team</span>
          </h3>
          <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
            Click on any team member to learn more about their expertise and achievements
          </p>
        </div>
      </div>

      {/* Scrolling Team Members */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="animate-scroll-left flex">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 mx-4 cursor-pointer group"
              onClick={() => handleMemberClick(item.id)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                  <span className="text-white text-xs font-semibold">View Profile</span>
                </div>
              </div>
              <div className="text-center mt-3">
                <p className="font-bold text-black text-sm">{item.name}</p>
                <p className="text-xs text-neutral-500">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>

                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white rounded-t-2xl">
                  <div className="flex items-center gap-6">
                    <img
                      src={getSelectedMemberData()?.image}
                      alt={getSelectedMemberData()?.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{getSelectedMemberData()?.name}</h3>
                      <Badge className="bg-white text-blue-600 hover:bg-white mb-2">
                        {getSelectedMemberData()?.designation}
                      </Badge>
                      <p className="text-blue-100">{getSelectedMemberData()?.expertise}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Bio */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-black">About</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      {getSelectedMemberData()?.bio}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-black">Key Achievements</h4>
                    <ul className="space-y-2">
                      {getSelectedMemberData()?.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-neutral-600">
                          <span className="text-blue-600 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-black">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {getSelectedMemberData()?.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-black">Connect</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`mailto:${getSelectedMemberData()?.email}`}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                      <a
                        href={`https://${getSelectedMemberData()?.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                      <a
                        href={`https://twitter.com/${getSelectedMemberData()?.twitter?.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default About;
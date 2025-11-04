import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Zap
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const footerColumns = [
    {
      title: 'Our Services',
      links: [
        { name: 'SEO Optimization', href: '#services' },
        { name: 'Social Media Marketing', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'PPC Advertising', href: '#services' },
        { name: 'Analytics & Reporting', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#about' },
        { name: 'Success Stories', href: '#portfolio' },
        { name: 'Case Studies', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Free Consultation', href: '#contact' },
        { name: 'Digital Marketing Guide', href: '#' },
        { name: 'SEO Checklist', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Webinars', href: '#' },
      ],
    },
  ];

  const legalLinks = [
    'Terms of Service',
    'Privacy Policy',
    'Cookie Settings',
    'Sitemap',
  ];

  const socialIcons = [
    { icon: <Facebook className="h-6 w-6" />, href: 'https://facebook.com/noixal' },
    { icon: <Twitter className="h-6 w-6" />, href: 'https://twitter.com/noixal' },
    { icon: <Instagram className="h-6 w-6" />, href: 'https://instagram.com/noixal' },
    { icon: <Linkedin className="h-6 w-6" />, href: 'https://linkedin.com/company/noixal' },
  ];

  return (
    <footer className="bg-white relative w-full">
      {/* Newsletter Section - White Background */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="mb-0 rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-gray-50 p-10 md:p-16 shadow-xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Stay ahead with Noixal
              </h3>
              <p className="text-neutral-600 mb-8 text-lg md:text-xl leading-relaxed">
                Join thousands of businesses who trust Noixal for innovative digital marketing solutions and growth strategies.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-neutral-300 bg-white px-6 py-4 text-base md:text-lg text-black placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button className="rounded-xl bg-gradient-to-r from-black to-purple-600 px-8 py-4 text-base md:text-lg font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="hidden justify-end md:flex">
              <div className="relative">
                <div className="absolute inset-0 rotate-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                  alt="Noixal team"
                  className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Black & Silver Gradient */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white mt-8">
        {/* Silver Accent Overlays */}
        <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gray-400/10 opacity-50 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gray-300/10 opacity-50 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Main Footer Links */}
          <div className="mb-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Social */}
            <div className="lg:pr-8">
              <div className="mb-8 flex items-center space-x-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-gray-400 to-gray-200 shadow-lg">
                  <Zap className="h-8 w-8 text-black" strokeWidth={2.5} />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white">Noixal</span>
              </div>
              <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
                Empowering businesses with reliable, scalable, and innovative digital marketing solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                  <span className="text-base md:text-lg">hello@noixal.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                  <span className="text-base md:text-lg">0328-5154250</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                  <span className="text-base md:text-lg">Lahore, Tajpura</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialIcons.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-gray-800/50 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-200 hover:text-black hover:border-transparent transition-all duration-300 shadow-lg text-gray-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-6 text-xl md:text-2xl font-bold text-white">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-base md:text-lg text-gray-300 hover:text-white transition-colors text-left leading-relaxed"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between border-t border-gray-700 pt-10 md:flex-row gap-6">
            <p className="text-gray-300 text-base md:text-lg">
              © {new Date().getFullYear()} Noixal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {legalLinks.map((text) => (
                <button
                  key={text}
                  className="text-base md:text-lg text-gray-300 hover:text-white transition-colors"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
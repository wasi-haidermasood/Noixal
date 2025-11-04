import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const testimonials = [
  {
    text: "Noixal Marketing Solutions transformed our online presence completely. Our website traffic increased by 400% in just 6 months, and our lead quality has never been better.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    logo: "https://www.vectorlogo.zone/logos/google/google-ar21.svg",
  },
  {
    text: "The ROI we've seen from our digital marketing campaigns has been incredible. From SEO to PPC, every strategy exceeded our expectations. Our revenue has doubled.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Michael Chen",
    role: "Founder, GrowthLab",
    logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg",
  },
  {
    text: "Working with Noixal has been a game-changer for our e-commerce business. Their data-driven approach helped us achieve our highest conversion rates ever.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    name: "Emily Rodriguez",
    role: "Marketing Director, RetailPlus",
    logo: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg",
  },
  {
    text: "As a local business owner, their local SEO strategies brought us to #1 on Google, and our membership has tripled. Incredible results!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    name: "David Thompson",
    role: "Owner, Local Fitness Studio",
    logo: "https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg",
  },
  {
    text: "Their PPC campaigns delivered an 8x ROAS within 3 months. The team's expertise in Google Ads and Facebook advertising is unmatched.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    name: "Jessica Martinez",
    role: "E-commerce Director",
    logo: "https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg",
  },
  {
    text: "The content strategy they developed for us generated over 5 million impressions and positioned us as industry thought leaders.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    name: "Robert Anderson",
    role: "VP Marketing, SaaS Inc",
    logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg",
  },
  {
    text: "Social media engagement increased by 500% and we gained 50k followers in 6 months. Their creative team is outstanding!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    name: "Amanda Lee",
    role: "Brand Manager, FashionCo",
    logo: "https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg",
  },
  {
    text: "From website development to SEO, they delivered a complete solution that tripled our online sales. Highly recommend!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    name: "James Wilson",
    role: "Founder, RetailHub",
    logo: "https://www.vectorlogo.zone/logos/slack/slack-ar21.svg",
  },
  {
    text: "Their email marketing campaigns consistently achieve 45% open rates and generate $50k+ in monthly revenue. Game-changing results!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    name: "Lisa Brown",
    role: "COO, HealthTech",
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  const { count: satisfiedClients, ref: clientsRef } = useCountUp({ end: 98 });
  const { count: projectsCompleted, ref: projectsRef } = useCountUp({ end: 250 });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16"
        >
          

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-black mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-center text-lg md:text-xl text-neutral-600 leading-relaxed">
            See how we've helped businesses achieve remarkable growth and real results.
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-black via-gray-900 to-purple-900 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-2xl overflow-hidden"
        >
          {/* Animated gradient overlay */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 bg-[length:200%_100%]"
          />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            <motion.div
              ref={clientsRef}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                {satisfiedClients}%
              </div>
              <div className="text-sm md:text-base text-white/80">Client Satisfaction</div>
            </motion.div>
            <motion.div
              ref={projectsRef}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
                {projectsCompleted}+
              </div>
              <div className="text-sm md:text-base text-white/80">Projects Completed</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent">
                24hr
              </div>
              <div className="text-sm md:text-base text-white/80">Response Time</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm md:text-base text-white/80">Results Guarantee</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Testimonials Columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        {/* Trust Indicators with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-neutral-600 mb-10 text-base md:text-lg font-medium">
            Trusted by leading businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['TechStart', 'GrowthLab', 'RetailPlus', 'LocalFit', 'StartupCo'].map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, color: '#000' }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-bold text-neutral-400 cursor-pointer"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

/* ---------------- MenuItem ---------------- */
interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isScrolled: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ setActive, active, item, children, isScrolled }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer font-medium text-white hover:text-blue-400 transition-colors"
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl shadow-blue-500/10"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

/* ---------------- MenuNav ---------------- */
interface MenuNavProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isScrolled: boolean;
}

const MenuNav: React.FC<MenuNavProps> = ({ setActive, children, isScrolled }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center items-center space-x-6"
    >
      {children}
    </nav>
  );
};

/* ---------------- HoveredLink ---------------- */
interface HoveredLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  className?: string;
}

const HoveredLink: React.FC<HoveredLinkProps> = ({ 
  children, 
  href, 
  onClick,
  className, 
  ...rest 
}) => {
  const baseClass = `text-gray-300 hover:text-blue-400 transition-colors ${className || ""}`;

  return (
    <a 
      href={href} 
      className={baseClass} 
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      {...rest}
    >
      {children}
    </a>
  );
};

/* ---------------- ProductItem ---------------- */
interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ title, description, href, src }) => {
  const content = (
    <div className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        loading="lazy"
        className="flex-shrink-0 rounded-md shadow-2xl object-cover"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className="text-gray-400 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <a 
      href={href} 
      className="inline-block transition-transform hover:scale-105"
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {content}
    </a>
  );
};

/* ---------------- Navigation Component ---------------- */
const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setActive(null);
    setIsOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={false}
    >
      <motion.div
        className={`mx-auto px-6 transition-all duration-300 ${
          isScrolled ? "mt-4" : ""
        }`}
        animate={{
          maxWidth: isScrolled ? "1170px" : "calc(100% - 30px)",
          paddingTop: isScrolled ? "0" : "2rem",
          paddingBottom: isScrolled ? "0" : "0",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-black/95 backdrop-blur-md rounded-full px-6 py-3 shadow-lg shadow-blue-500/20 border border-blue-500/30"
              : "px-0 py-0"
          }`}
          animate={{
            backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center"
            animate={{
              scale: isScrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl font-bold text-white">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isScrolled ? "bg-blue-600" : "bg-blue-600/80 backdrop-blur-sm border border-blue-400/30"
                }`}>
                  <span className="text-xl font-bold text-white">N</span>
                </div>
                <span className={isScrolled ? "text-lg" : ""}>Noixal</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden lg:flex items-center gap-8">
            <MenuNav setActive={setActive} isScrolled={isScrolled}>
              <MenuItem setActive={setActive} active={active} item="Home" isScrolled={isScrolled}>
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#home" onClick={() => scrollToSection("#home")}>
                    Welcome
                  </HoveredLink>
                  <HoveredLink href="#home" onClick={() => scrollToSection("#home")}>
                    Our Story
                  </HoveredLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Services" isScrolled={isScrolled}>
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Digital Marketing"
                    href="#services"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
                    description="Comprehensive digital strategies"
                  />
                  <ProductItem
                    title="SEO Optimization"
                    href="#services"
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=200&fit=crop"
                    description="Boost your search rankings"
                  />
                  <ProductItem
                    title="Social Media"
                    href="#services"
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop"
                    description="Engage your audience"
                  />
                  <ProductItem
                    title="Content Strategy"
                    href="#services"
                    src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=400&h=200&fit=crop"
                    description="Compelling content creation"
                  />
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Portfolio" isScrolled={isScrolled}>
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#portfolio" onClick={() => scrollToSection("#portfolio")}>
                    Recent Projects
                  </HoveredLink>
                  <HoveredLink href="#portfolio" onClick={() => scrollToSection("#portfolio")}>
                    Case Studies
                  </HoveredLink>
                  <HoveredLink href="#portfolio" onClick={() => scrollToSection("#portfolio")}>
                    Client Success
                  </HoveredLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="About" isScrolled={isScrolled}>
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#about" onClick={() => scrollToSection("#about")}>
                    Our Team
                  </HoveredLink>
                  <HoveredLink href="#about" onClick={() => scrollToSection("#about")}>
                    Mission & Values
                  </HoveredLink>
                  <HoveredLink href="#about" onClick={() => scrollToSection("#about")}>
                    Careers
                  </HoveredLink>
                </div>
              </MenuItem>
            </MenuNav>

            {/* Contact Us Button */}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className={`font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
              }`}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 pt-4 bg-black/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-500/20">
              <button 
                onClick={() => scrollToSection("#home")} 
                className="text-left text-white hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("#services")} 
                className="text-left text-white hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("#portfolio")} 
                className="text-left text-white hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("#about")} 
                className="text-left text-white hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
};

export default Navigation;
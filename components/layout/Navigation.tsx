'use client';

import React, { useState, useEffect } from 'react';
import { navigationItems } from '@/data/navigation';
import { StatusIndicator } from '../ui/StatusIndicator';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      for (const item of navigationItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-retro-beige/95 border-b border-retro-border backdrop-blur-sm px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Brand Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-2 group focus:outline-none"
      >
        <span className="font-pixel text-xl tracking-wider text-retro-charcoal group-hover:text-retro-green transition-colors">
          YASH <span className="text-retro-border">//</span> SYSTEM
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={cn(
              "font-pixel text-sm tracking-widest relative pb-1 transition-colors duration-150",
              activeSection === item.id 
                ? "text-retro-green" 
                : "text-retro-charcoal/70 hover:text-retro-charcoal"
            )}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNavLine"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-retro-green"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Right Side: Status Indicator / Mobile Button */}
      <div className="flex items-center gap-3">
        <StatusIndicator className="hidden sm:inline-flex" />

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center retro-bevel-out bg-retro-cream hover:bg-retro-beige focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-[100%] left-0 w-full bg-retro-beige border-b border-retro-border flex flex-col p-4 gap-4 shadow-md md:hidden"
          >
            <div className="flex flex-col gap-3.5">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={cn(
                    "font-pixel text-base tracking-widest pl-3 py-2 border-l-2 transition-all",
                    activeSection === item.id
                      ? "border-retro-green text-retro-green bg-retro-cream"
                      : "border-transparent text-retro-charcoal/70 hover:text-retro-charcoal hover:bg-retro-cream/40"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="border-t border-retro-border pt-3">
              <StatusIndicator className="w-full justify-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

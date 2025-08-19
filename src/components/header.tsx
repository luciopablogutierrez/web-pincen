"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Agents', href: '#features' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="flex-shrink-0">
                <span className="text-2xl font-bold neon-text-blue">NEXUS<span className="neon-text-pink">AI</span></span>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="nav-item px-3 py-2 rounded-md text-sm font-medium neon-text-blue hover:neon-text-pink transition"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                 <button className="neon-border-blue px-4 py-2 rounded-md text-sm font-medium neon-text-blue hover:neon-glow-blue transition">
                    Console Login
                </button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md neon-text-blue focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <div className={cn("md:hidden transition-all duration-300 ease-in-out", { 'block': isOpen, 'hidden': !isOpen })} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-item block px-3 py-2 rounded-md text-base font-medium neon-text-blue hover:neon-text-pink hover:bg-gray-900/50 transition"
              >
                {link.name}
              </a>
            ))}
             <div className="pt-2 px-2">
                <button className="w-full neon-border-blue px-4 py-2 rounded-md text-sm font-medium neon-text-blue hover:neon-glow-blue transition">
                    Console Login
                </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

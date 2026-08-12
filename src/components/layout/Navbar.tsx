import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { clinicConfig } from '../../data/content';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Home Physio', path: '/home-physiotherapy' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0D9488] text-white">
              <Activity size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1E293B]">{clinicConfig.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#0D9488]",
                  location.pathname === link.path ? "text-[#0D9488]" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="px-5 py-2" asChild>
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="flex items-center p-2 text-slate-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-b border-slate-100 bg-white md:hidden">
          <div className="container mx-auto px-4 py-4 pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-base font-medium py-2 transition-colors",
                  location.pathname === link.path ? "text-teal-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full" size="lg" asChild>
                <Link to="/appointment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

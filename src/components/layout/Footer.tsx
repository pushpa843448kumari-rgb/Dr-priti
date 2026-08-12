import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { clinicConfig } from '../../data/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 shrink-0 mt-auto pt-10 pb-24 md:pb-8 md:pt-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 mb-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0D9488] text-white">
                <Activity size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1E293B]">{clinicConfig.name}</span>
            </Link>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Personalized physiotherapy treatment designed to help you recover, improve mobility, manage pain, and return to the activities you love.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0D9488] hover:text-white transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0D9488] hover:text-white transition-colors">
                <Instagram size={14} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0D9488] hover:text-white transition-colors">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#1E293B] text-sm mb-4 uppercase tracking-tighter">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><Link to="/about" className="hover:text-[#0D9488] transition-colors">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-[#0D9488] transition-colors">Treatments</Link></li>
              <li><Link to="/home-physiotherapy" className="hover:text-[#0D9488] transition-colors">Home Physio</Link></li>
              <li><Link to="/reviews" className="hover:text-[#0D9488] transition-colors">Patient Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-[#0D9488] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[#1E293B] text-sm mb-4 uppercase tracking-tighter">Treatments</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><Link to="/treatments/back-pain" className="hover:text-[#0D9488] transition-colors">Back Pain Therapy</Link></li>
              <li><Link to="/treatments/neck-pain" className="hover:text-[#0D9488] transition-colors">Neck & Shoulder</Link></li>
              <li><Link to="/treatments/sports-injuries" className="hover:text-[#0D9488] transition-colors">Sports Injuries</Link></li>
              <li><Link to="/treatments/post-surgery-rehabilitation" className="hover:text-[#0D9488] transition-colors">Post-Surgery</Link></li>
              <li><Link to="/treatments" className="hover:text-[#0D9488] transition-colors font-semibold">View All &rarr;</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[#1E293B] text-sm mb-4 uppercase tracking-tighter">Contact</h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
                <span>{clinicConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#0D9488] shrink-0" />
                <a href={`tel:${clinicConfig.phone}`} className="hover:text-[#0D9488] transition-colors">{clinicConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#0D9488] shrink-0" />
                <a href={`mailto:${clinicConfig.email}`} className="hover:text-[#0D9488] transition-colors">{clinicConfig.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{clinicConfig.openingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-400">
            © {year} {clinicConfig.name}. All rights reserved. Medical Disclaimer Applied.
          </p>
          <div className="flex gap-4 text-[10px] text-slate-400 font-medium">
            <Link to="/privacy" className="hover:text-[#0D9488] transition-colors uppercase tracking-widest">Privacy</Link>
            <Link to="/terms" className="hover:text-[#0D9488] transition-colors uppercase tracking-widest">Terms</Link>
            <Link to="/disclaimer" className="hover:text-[#0D9488] transition-colors uppercase tracking-widest">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

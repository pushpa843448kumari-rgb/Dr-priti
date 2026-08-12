import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { clinicConfig } from '../../data/content';

export function MobileCTA() {
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(clinicConfig.whatsappMessage)}`;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-white/90 backdrop-blur shadow-2xl border border-slate-200 rounded-full p-2 px-4 z-50 md:hidden w-[90%] max-w-[400px] justify-between">
      <span className="text-[10px] font-bold text-slate-400 uppercase hidden sm:block">Quick</span>
      <a
        href={`tel:${clinicConfig.phone}`}
        className="bg-[#0D9488] text-white px-4 py-2 rounded-full text-xs font-bold flex-1 text-center"
      >
        Call
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold flex-1 text-center"
      >
        WhatsApp
      </a>
      <Link
        to="/appointment"
        className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold flex-1 text-center"
      >
        Book
      </Link>
    </div>
  );
}

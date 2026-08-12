import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../ui/FloatingWhatsApp';
import { MobileCTA } from './MobileCTA';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0F172A] font-sans">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      {/* Hide standard floating whatsapp on mobile to avoid overlap with MobileCTA */}
      <div className="hidden md:block">
        <FloatingWhatsApp />
      </div>
      <MobileCTA />
    </div>
  );
}

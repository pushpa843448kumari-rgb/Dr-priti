import React from 'react';
import { clinicConfig } from '../data/content';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Contact() {
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(clinicConfig.whatsappMessage)}`;

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-12 max-w-2xl text-center mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Get in Touch</h1>
          <p className="text-lg text-slate-600">
            We're here to help. Reach out to us for appointments, inquiries, or any questions about our services.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#0D9488]">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1E293B] mb-1 uppercase tracking-tighter">Clinic Address</h3>
                <p className="text-slate-600 text-xs mb-2">{clinicConfig.address}</p>
                <a href="#" className="text-xs font-bold text-[#0D9488] hover:underline">Get Directions</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#0D9488]">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1E293B] mb-1 uppercase tracking-tighter">Opening Hours</h3>
                <p className="text-slate-600 text-xs whitespace-pre-line">{clinicConfig.openingHours}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                <Phone className="mx-auto mb-2 h-6 w-6 text-[#0D9488]" />
                <h3 className="text-sm font-bold text-[#1E293B] mb-1 uppercase tracking-tighter">Call Us</h3>
                <a href={`tel:${clinicConfig.phone}`} className="text-slate-600 text-xs hover:text-[#0D9488] transition-colors">{clinicConfig.phone}</a>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                <Mail className="mx-auto mb-2 h-6 w-6 text-[#0D9488]" />
                <h3 className="text-sm font-bold text-[#1E293B] mb-1 uppercase tracking-tighter">Email Us</h3>
                <a href={`mailto:${clinicConfig.email}`} className="text-slate-600 text-xs hover:text-[#0D9488] transition-colors">{clinicConfig.email}</a>
              </div>
            </div>
            
            <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 mt-2" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="h-[400px] lg:h-auto w-full rounded-2xl bg-slate-100 overflow-hidden shadow-inner border border-slate-200 flex items-center justify-center relative">
            {/* Google Maps Embed Placeholder */}
            <div className="absolute inset-0 bg-slate-200" />
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <MapPin className="h-12 w-12 text-slate-400 mb-4" />
              <p className="text-slate-500 font-medium">Google Maps Embed Placeholder</p>
              <p className="text-sm text-slate-400 mt-2 max-w-[250px]">Replace this div with your actual Google Maps iframe code.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

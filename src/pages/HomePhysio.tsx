import React from 'react';
import { Home as HomeIcon, Clock, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { clinicConfig } from '../data/content';

export function HomePhysio() {
  const benefits = [
    "Comprehensive home assessment",
    "Personalized exercise programs using your environment",
    "Mobility and transfer training",
    "Post-surgical rehabilitation support",
    "Convenient scheduling without travel stress",
    "Fall prevention strategies"
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
              <HomeIcon size={16} className="mr-2" />
              At-Home Service
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Professional Physiotherapy, In the Comfort of Your Home
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand that traveling to a clinic isn't always possible or convenient. Our home physiotherapy service brings professional assessment and tailored rehabilitation directly to you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/appointment?type=home">Request a Home Visit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${clinicConfig.phone}`}>Call to Inquire</a>
              </Button>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
             <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?q=80&w=1200&auto=format&fit=crop" 
                  alt="Home Physiotherapy"
                  className="h-full w-full object-cover"
                />
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">What to Expect</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-teal-600 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="rounded-2xl bg-teal-50 p-8 border border-teal-100 flex flex-col justify-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white">
              <MapPin size={24} />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Service Area</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Home physiotherapy is currently available for patients residing in <strong>{clinicConfig.location}</strong> and surrounding neighborhoods. 
            </p>
            <div className="flex items-start gap-3 rounded-lg bg-white p-4 text-sm text-slate-600">
              <Clock size={20} className="shrink-0 text-teal-600 mt-0.5" />
              <p>Appointments are subject to availability and travel distance. Please contact us to confirm if we cover your exact location.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

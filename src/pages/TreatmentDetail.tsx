import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { treatmentsData, clinicConfig } from '../data/content';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowLeft, Info } from 'lucide-react';
import * as Icons from 'lucide-react';

export function TreatmentDetail() {
  const { id } = useParams<{ id: string }>();
  const treatment = treatmentsData.find(t => t.id === id);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  const IconComponent = (Icons as any)[treatment.icon] || Icons.Activity;
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello, I would like to inquire about treatment for ${treatment.title}.`)}`;

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <Link to="/treatments" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to all treatments
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <IconComponent size={32} />
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{treatment.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {treatment.shortDescription}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Common Symptoms</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {treatment.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 border border-slate-100">
                    <CheckCircle2 size={20} className="shrink-0 text-teal-600 mt-0.5" />
                    <span className="text-slate-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">How Physiotherapy May Help</h2>
              <p className="text-slate-600">
                Depending on your specific diagnosis and clinical presentation, our approach may include a combination of the following evidence-informed techniques:
              </p>
              <ul className="space-y-3">
                {treatment.approaches.map((approach, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                    <span className="text-slate-700">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <h3 className="mb-2 font-semibold text-slate-900">Who May Benefit</h3>
              <p className="text-slate-600 text-sm">{treatment.whoBenefits}</p>
            </div>
            
            <div className="flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-800 border border-blue-100">
              <Info size={20} className="shrink-0 mt-0.5" />
              <p>
                <strong>Medical Disclaimer:</strong> Information on this website is for general educational purposes and does not replace an in-person assessment by a qualified healthcare professional. Treatment is tailored to individual needs and outcomes may vary.
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#1E293B] rounded-2xl p-6 text-white overflow-hidden relative shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Ready to start your recovery?</h3>
              <p className="mb-6 text-slate-300 text-xs">
                Book a comprehensive assessment for your {treatment.title.toLowerCase()} today.
              </p>
              
              <div className="space-y-3">
                <Button size="lg" className="w-full bg-[#0D9488] hover:bg-[#0B7A70] text-white border-0" asChild>
                  <Link to={`/appointment?treatment=${encodeURIComponent(treatment.title)}`}>
                    Book Appointment
                  </Link>
                </Button>
                
                <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Ask via WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-6 border-t border-slate-700 pt-4 text-xs">
                <p className="text-slate-400 mb-1">Or call us directly:</p>
                <a href={`tel:${clinicConfig.phone}`} className="text-base font-bold text-[#0D9488] hover:text-teal-400 transition-colors">
                  {clinicConfig.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

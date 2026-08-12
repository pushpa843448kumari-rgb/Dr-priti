import React from 'react';
import { treatmentsData } from '../data/content';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function Treatments() {
  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Physiotherapy Treatments</h1>
          <p className="text-lg text-slate-600">
            We provide specialized, evidence-based care for a wide range of musculoskeletal and neurological conditions. Treatment plans are tailored according to individual needs and clinical assessment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatmentsData.map((treatment) => {
            const IconComponent = (Icons as any)[treatment.icon] || Icons.Activity;
            return (
              <Link 
                key={treatment.id} 
                to={`/treatments/${treatment.id}`}
                className="group flex flex-col rounded-2xl bg-white p-6 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-[#0D9488]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-[#0D9488] transition-colors group-hover:bg-[#0D9488] group-hover:text-white">
                  <IconComponent size={20} />
                </div>
                <h2 className="mb-2 text-lg font-bold text-[#1E293B]">{treatment.title}</h2>
                <p className="mb-4 flex-1 text-slate-600 text-sm leading-relaxed">{treatment.shortDescription}</p>
                <div className="mt-auto flex items-center text-sm font-bold text-[#0D9488]">
                  Learn More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  );
}

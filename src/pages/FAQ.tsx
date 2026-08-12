import React, { useState } from 'react';
import { faqsData, clinicConfig } from '../data/content';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(clinicConfig.whatsappMessage)}`;

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-12 max-w-2xl text-center mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our physiotherapy services, appointments, and what to expect.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="space-y-3">
            {faqsData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={cn(
                    "rounded-xl border transition-colors",
                    isOpen ? "border-[#0D9488] bg-white shadow-sm" : "border-slate-200 bg-white hover:bg-slate-50"
                  )}
                >
                  <button
                    className="flex w-full items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 rounded-xl"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm text-[#1E293B] pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200", 
                        isOpen && "rotate-180 text-[#0D9488]"
                      )} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-slate-600 text-xs leading-relaxed pt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 text-center max-w-3xl mx-auto border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-[#1E293B] mb-2">Still have questions?</h2>
          <p className="text-slate-600 text-xs mb-4">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out.
          </p>
          <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-0" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask us on WhatsApp
            </a>
          </Button>
        </div>

      </div>
    </div>
  );
}

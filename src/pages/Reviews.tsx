import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Reviews() {
  // Using placeholders as instructed: "Do not invent real patient testimonials."
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-12 max-w-2xl text-center mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Patient Experiences</h1>
          <p className="text-lg text-slate-600">
            Read what our patients have to say about their recovery journey with us.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {placeholders.map((item) => (
            <div key={item} className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Patient Feedback</span>
                <div className="flex gap-0.5 text-yellow-400">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 mb-4 flex-1">
                <p className="text-xs italic text-slate-600 leading-relaxed">
                  "[Real patient testimonial will appear here. The assessment was thorough and the exercise plan worked wonders.]"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D9488] text-white font-bold text-xs">
                  P{item}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1E293B]">[Patient Initials]</p>
                  <p className="text-[10px] text-slate-500 uppercase">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-teal-50 p-8 text-center max-w-3xl mx-auto border border-teal-100">
          <MessageSquare size={32} className="mx-auto mb-4 text-teal-600" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Leave a Review</h2>
          <p className="text-slate-600 mb-6">
            If you've visited our clinic, we'd love to hear about your experience. Your feedback helps us improve and helps others find quality care.
          </p>
          {/* Replace with actual Google Business Profile link when available */}
          <Button size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">View Google Reviews</a>
          </Button>
        </div>

      </div>
    </div>
  );
}

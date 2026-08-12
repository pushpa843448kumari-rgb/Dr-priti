import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { clinicConfig } from '../data/content';
import { Calendar, Phone, CheckCircle2 } from 'lucide-react';

export function Appointment() {
  const [searchParams] = useSearchParams();
  const initialTreatment = searchParams.get('treatment') || '';
  const initialType = searchParams.get('type') === 'home' ? 'home' : 'clinic';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    age: '',
    concern: initialTreatment,
    date: '',
    time: '',
    type: initialType,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend.
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello, I would like to book an appointment.\nName: ${formData.name || '[Your Name]'}\nConcern: ${formData.concern || '[Condition]'}\nType: ${formData.type === 'home' ? 'Home Visit' : 'Clinic Visit'}`
  )}`;

  if (isSubmitted) {
    return (
      <div className="py-20 min-h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-slate-900">Request Received</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Thank you. Your appointment request has been received. Our team will contact you shortly to confirm the exact date and time.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-10 max-w-2xl text-center mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Book an Appointment</h1>
          <p className="text-lg text-slate-600">
            Take the first step towards recovery. Fill out the form below or contact us directly via WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold mb-4 flex items-center text-[#1E293B]">
                <span className="w-2 h-6 bg-[#0D9488] rounded-full mr-2"></span>
                Quick Appointment
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-bold text-[#1E293B] uppercase">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488]" 
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="mobile" className="text-xs font-bold text-[#1E293B] uppercase">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="mobile" 
                      name="mobile" 
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488]" 
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-[#1E293B] uppercase">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488]" 
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="age" className="text-xs font-bold text-[#1E293B] uppercase">Age</label>
                    <input 
                      type="number" 
                      id="age" 
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488]" 
                      placeholder="e.g. 45"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="type" className="text-xs font-bold text-[#1E293B] uppercase">Appointment Type</label>
                    <select 
                      id="type" 
                      name="type" 
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488] bg-white"
                    >
                      <option value="clinic">Clinic Visit</option>
                      <option value="home">Home Physiotherapy Visit</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="concern" className="text-xs font-bold text-[#1E293B] uppercase">Primary Concern</label>
                    <input 
                      type="text" 
                      id="concern" 
                      name="concern" 
                      required
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488]" 
                      placeholder="e.g. Lower back pain"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="date" className="text-xs font-bold text-[#1E293B] uppercase">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488]" 
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="time" className="text-xs font-bold text-[#1E293B] uppercase">Preferred Time</label>
                    <select 
                      id="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488] bg-white"
                    >
                      <option value="">Any Time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-[#1E293B] uppercase">Additional Information</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:border-[#0D9488] resize-none" 
                    placeholder="Briefly describe your symptoms..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full mt-4">
                  Request Booking
                </Button>
                <p className="text-[10px] text-slate-400 mt-2 text-center">
                  We will contact you to confirm the time.
                </p>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <div className="bg-[#1E293B] rounded-2xl p-6 text-white overflow-hidden relative shadow-sm h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-14 h-14 bg-slate-700 rounded-full border-2 border-[#0D9488] overflow-hidden mr-3 shrink-0 flex items-center justify-center text-xl">
                  👨‍⚕️
                </div>
                <div>
                  <h4 className="font-bold text-sm">{clinicConfig.physioName}</h4>
                  <p className="text-[10px] text-teal-400 font-medium uppercase">{clinicConfig.qualifications}</p>
                  <p className="text-[10px] text-slate-400">{clinicConfig.experience} Experience</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 flex-1">
                "At {clinicConfig.name}, we focus on individualized care based on each patient's goals, lifestyle, and recovery needs."
              </p>
              
              <div className="border-t border-slate-700 pt-4 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Contact Info</span>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-3 space-y-2 text-xs">
                  <p className="flex justify-between text-slate-300">
                    <span>Phone:</span>
                    <a href={`tel:${clinicConfig.phone}`} className="text-teal-400">{clinicConfig.phone}</a>
                  </p>
                  <p className="flex justify-between text-slate-300">
                    <span>Email:</span>
                    <a href={`mailto:${clinicConfig.email}`} className="text-teal-400">{clinicConfig.email}</a>
                  </p>
                </div>
              </div>

              <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Ask via WhatsApp
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

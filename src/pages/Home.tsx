import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Home as HomeIcon, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { clinicConfig, treatmentsData } from '../data/content';
import * as Icons from 'lucide-react';

export function Home() {
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(clinicConfig.whatsappMessage)}`;

  const trustFeatures = [
    { icon: UserCheck, title: "Personalized Treatment" },
    { icon: Shield, title: "Experienced Physiotherapist" },
    { icon: ActivityIcon, title: "Modern Rehabilitation" },
    { icon: HomeIcon, title: "Home Physiotherapy Available" },
  ];

  const whyChooseUs = [
    "Personalized Treatment Plans",
    "One-to-One Attention",
    "Evidence-Informed Approach",
    "Comfortable Environment",
    "Convenient Appointments",
    "Home Visit Option"
  ];

  const processSteps = [
    { num: "01", title: "Book an Appointment", desc: "Contact us via phone, WhatsApp, or our online form." },
    { num: "02", title: "Initial Assessment", desc: "Comprehensive evaluation of your condition and medical history." },
    { num: "03", title: "Personalized Plan", desc: "Tailored treatment strategies focused on your specific goals." },
    { num: "04", title: "Recovery & Progress", desc: "Ongoing treatment, reassessment, and guidance for full recovery." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-slate-200">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F1F5F9] opacity-50 -skew-x-12 translate-x-12"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block px-3 py-1 bg-teal-50 text-[#0D9488] text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                Professional Physiotherapy Care
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#1E293B] sm:text-5xl lg:text-6xl leading-tight">
                Move Better.<br />
                <span className="text-[#0D9488]">Feel Better.</span> Live Better.
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 max-w-lg">
                Personalized physiotherapy treatment designed to help you recover, improve mobility, manage pain, and return to the activities you love.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 flex items-center" asChild>
                  <Link to="/appointment">
                    Get Started <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="flex items-center text-slate-700" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-slate-200 bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop" 
                  alt="Physiotherapy Treatment" 
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[#F8FAFC] py-8 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="bg-[#0D9488] rounded-2xl p-5 text-white flex flex-col justify-between h-36">
              <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <UserCheck size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-tighter">Personalized</h3>
                <p className="text-xs text-teal-100">Custom treatment plans</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col justify-between h-36">
              <div className="bg-slate-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-slate-600">
                <Shield size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-tighter text-[#1E293B]">Experienced</h3>
                <p className="text-xs text-slate-500">Expert care team</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col justify-between h-36">
              <div className="bg-slate-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-slate-600">
                <HomeIcon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-tighter text-[#1E293B]">Home Visits</h3>
                <p className="text-xs text-slate-500">Therapy in your home</p>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-5 text-white flex flex-col justify-between h-36">
              <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-teal-400">
                <ActivityIcon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-tighter">Evidence-Based</h3>
                <p className="text-xs text-slate-400">Proven techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Quick Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 aspect-square max-w-md mx-auto w-full overflow-hidden rounded-2xl bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
                alt={clinicConfig.physioName}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Meet Your Physiotherapist</h2>
              <div>
                <h3 className="text-xl font-semibold text-teal-700">{clinicConfig.physioName}</h3>
                <p className="font-medium text-slate-600">{clinicConfig.qualifications}</p>
                <p className="text-sm text-slate-500">{clinicConfig.experience} of Experience</p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                "At {clinicConfig.name}, we focus on individualized physiotherapy care based on each patient's condition, goals, lifestyle, and recovery needs."
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Treatments Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1E293B]">Physiotherapy Treatments</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Treatment plans are tailored according to individual needs and clinical assessment.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {treatmentsData.slice(0, 6).map((treatment) => {
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
                  <h3 className="mb-2 text-lg font-bold text-[#1E293B]">{treatment.title}</h3>
                  <p className="mb-4 flex-1 text-slate-600 text-sm leading-relaxed">{treatment.shortDescription}</p>
                  <div className="flex items-center text-sm font-bold text-[#0D9488]">
                    Learn More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/treatments">View All Treatments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why Patients Choose {clinicConfig.name}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, idx) => (
              <div key={idx} className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="text-teal-600 shrink-0" size={24} />
                <span className="font-medium text-slate-800">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center px-4">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white ring-8 ring-slate-800 z-10">
                  {step.num}
                </div>
                <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                
                {/* Connecting Line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-slate-700 -z-0" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
              <Link to="/appointment">Start Your Recovery Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Temporary icon component since ActivityIcon isn't exported by lucide directly under that name (it's just Activity)
function ActivityIcon(props: any) {
  return <Icons.Activity {...props} />;
}

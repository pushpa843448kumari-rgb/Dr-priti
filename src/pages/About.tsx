import React from 'react';
import { clinicConfig } from '../data/content';
import { Award, GraduationCap, Clock, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">About Our Clinic</h1>
          <p className="text-lg text-slate-600">
            Dedicated to providing evidence-based, personalized physiotherapy to help you move better and live pain-free.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 items-start mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Meet {clinicConfig.physioName}</h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800">
                <GraduationCap size={18} className="text-teal-600" />
                {clinicConfig.qualifications}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800">
                <Clock size={18} className="text-teal-600" />
                {clinicConfig.experience} Experience
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p>
                At {clinicConfig.name}, we focus on individualized physiotherapy care based on each patient's condition, goals, lifestyle, and recovery needs. 
              </p>
              <p>
                Our philosophy is simple: we treat the person, not just the symptoms. By identifying the root cause of your pain or mobility issues, we create targeted treatment plans that deliver long-lasting results. 
              </p>
              <p>
                Whether you are recovering from a sports injury, managing a chronic condition, or seeking post-surgical rehabilitation, you will receive one-on-one attention in a comfortable and supportive environment.
              </p>
            </div>

            <div className="pt-6">
              <Button size="lg" asChild>
                <Link to="/appointment">Book an Assessment</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
               <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop" 
                alt={clinicConfig.physioName}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values/Approach */}
        <div className="rounded-3xl bg-teal-50 p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#1E293B]">Our Approach to Care</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="bg-slate-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-[#0D9488]">
                <Heart size={20} />
              </div>
              <h3 className="text-base font-bold text-[#1E293B] mb-2 uppercase tracking-tighter">Patient-Centered</h3>
              <p className="text-slate-600 text-xs">Your goals are our priority. We listen to your concerns and involve you in every step.</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-2xl border border-slate-800 shadow-sm flex flex-col text-white">
              <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-teal-400">
                <Award size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2 uppercase tracking-tighter">Evidence-Informed</h3>
              <p className="text-slate-400 text-xs">Treatments based on the latest medical research and proven clinical practices.</p>
            </div>
            <div className="bg-[#0D9488] p-6 rounded-2xl border border-teal-600 shadow-sm flex flex-col text-white">
              <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white">
                <Activity size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2 uppercase tracking-tighter">Comprehensive</h3>
              <p className="text-teal-100 text-xs">Combine manual therapy, exercise prescription, and education to ensure full recovery.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Treatments } from './pages/Treatments';
import { TreatmentDetail } from './pages/TreatmentDetail';
import { HomePhysio } from './pages/HomePhysio';
import { Reviews } from './pages/Reviews';
import { FAQ } from './pages/FAQ';
import { Appointment } from './pages/Appointment';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="treatments/:id" element={<TreatmentDetail />} />
          <Route path="home-physiotherapy" element={<HomePhysio />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Simple placeholders for legal pages */}
          <Route path="privacy" element={<div className="py-20 text-center"><h1 className="text-2xl font-bold">Privacy Policy</h1><p className="mt-4">Placeholder content.</p></div>} />
          <Route path="terms" element={<div className="py-20 text-center"><h1 className="text-2xl font-bold">Terms & Conditions</h1><p className="mt-4">Placeholder content.</p></div>} />
          <Route path="disclaimer" element={<div className="py-20 text-center"><h1 className="text-2xl font-bold">Medical Disclaimer</h1><p className="mt-4">Information on this website is for educational purposes only.</p></div>} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<div className="py-20 text-center"><h1 className="text-2xl font-bold">404 - Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

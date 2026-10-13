import React from 'react';
import { Phone, ArrowRight, Shield } from 'lucide-react';

export const ConsultationCta: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-300">
            <Shield className="w-3.5 h-3.5 text-stone-300" />
            <span>Confidential &amp; Impartial Support</span>
          </div>

          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight text-balance">
            Take the First Step Towards Resolution
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Arrange a private MIAM assessment or discuss your options with our accredited mediation team across Suffolk, Essex, Kent and Sussex.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.cavendishfamilymediation.co.uk/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-900 bg-white hover:bg-stone-100 rounded-lg shadow-md transition-colors"
            >
              <span>Book Confidential Assessment</span>
              <ArrowRight className="w-4 h-4 text-slate-800" />
            </a>

            <a
              href="tel:03300100217"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-stone-300" />
              <span>Call 03300 100 217</span>
            </a>
          </div>

          <p className="text-xs text-stone-400 pt-2 font-normal">
            Direct telephone inquiries welcome Monday to Friday · 03300 100 217
          </p>
        </div>
      </div>
    </section>
  );
};

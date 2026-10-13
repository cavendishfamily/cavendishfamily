import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Heart, Scale } from 'lucide-react';
import heroImage from '../assets/images/hero_mediation_meeting_1791885990214.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-100/70 via-stone-50 to-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed regional metadata indicator without pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-600">
              <span>Suffolk</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Essex</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Kent</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Sussex</span>
            </div>

            {/* Strict Hero H1 */}
            <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Discreet Family Mediation &amp; MIAM Assessments
            </h1>

            {/* Introduction paragraph */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Cavendish Family Mediation provides confidential, impartial, and child-focused support for couples and parents navigating separation or divorce across Suffolk, Essex, Kent and Sussex. We help you resolve disputes calmly, cost-effectively, and outside of court.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://www.cavendishfamilymediation.co.uk/contact/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-slate-900"
              >
                <span>Book Confidential Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:03300100217"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-slate-800"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>Call 03300 100 217</span>
              </a>
            </div>

            {/* Value props in clean unboxed layout */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Confidential &amp; Impartial</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Child-Centred Solutions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Scale className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Court-Accredited MIAMs</span>
              </div>
            </div>
          </div>

          {/* Hero Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
              <img
                src={heroImage}
                alt="A calm, confidential family mediation consultation in a British practice room"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[5/4]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
            </div>

            {/* Subdued reassurance note beneath image */}
            <div className="mt-3 text-center">
              <p className="text-xs text-slate-500 font-normal">
                Discreet individual consultations &amp; joint mediation meetings across the South East
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

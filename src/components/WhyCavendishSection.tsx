import React from 'react';
import { Heart, ShieldCheck, Scale, ReceiptText, MapPin } from 'lucide-react';
import documentsImage from '../assets/images/mediation_documents_desk_1791885990906.jpg';

const pillars = [
  {
    title: "Children’s Wellbeing",
    icon: Heart,
    description:
      "Children thrive when parental conflict is contained. We maintain a steady, compassionate focus on children’s daily emotional stability, schooling, and relationships, helping parents agree on workable co-parenting routines.",
  },
  {
    title: "Complete Discretion",
    icon: ShieldCheck,
    description:
      "Family disputes are deeply personal. All discussions take place in absolute confidence. Unlike public court hearings, mediation safeguards your family’s privacy and dignity throughout.",
  },
  {
    title: "Impartial Guidance",
    icon: Scale,
    description:
      "Our accredited mediators do not represent either side or impose decisions. We provide balanced, objective facilitation, ensuring both parties are heard fairly and negotiations remain constructive.",
  },
  {
    title: "Clear, Predictable Fees",
    icon: ReceiptText,
    description:
      "We provide set rates for MIAM assessments and session hours, sparing you the runaway costs of protracted court battles and allowing both parties to plan financially with certainty.",
  },
];

export const WhyCavendishSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                Our Practice Principles
              </p>
              <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-slate-900 tracking-tight text-balance">
                Why Cavendish Family Mediation?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Separation and divorce present delicate emotional and practical challenges. We provide a respectful, structured environment where families can resolve arrangements constructively.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white rounded-xl border border-stone-200/90 p-6 shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-slate-800 mb-4">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="font-serif-brand text-xl font-semibold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Regional Coverage Notice without inventing offices */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 flex items-start gap-4 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-stone-200" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  Regional Coverage Across Four Counties
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Cavendish Family Mediation supports clients across <strong>Suffolk, Essex, Kent and Sussex</strong>. Consultations and mediation sessions are conducted through secure online video appointments or arranged local meeting facilities throughout the South East.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Photography */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100">
              <img
                src={documentsImage}
                alt="Mediation summary documentation and notes prepared in a quiet British consultation setting"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[1/1]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 rounded-xl bg-white border border-stone-200 text-xs text-slate-600 space-y-2">
              <p className="font-semibold text-slate-900">
                The Family Mediation Council Standards
              </p>
              <p className="leading-relaxed">
                All mediations adhere strictly to the Family Mediation Council (FMC) Code of Conduct, ensuring rigorous confidentiality, neutrality, and professional integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

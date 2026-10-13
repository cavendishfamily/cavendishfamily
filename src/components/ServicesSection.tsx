import React from 'react';
import { ArrowRight, FileCheck, Users, Coins } from 'lucide-react';
import parentingImage from '../assets/images/parenting_consultation_1791885991514.jpg';

interface ServiceItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
}

const services: ServiceItem[] = [
  {
    title: 'MIAM Assessments',
    url: 'https://www.cavendishfamilymediation.co.uk/services/miam-assessment/',
    icon: FileCheck,
    description:
      'The initial confidential individual assessment meeting legally mandated in England & Wales prior to making a family court application. We examine your circumstances, explore dispute resolution routes, and determine whether mediation is suitable.',
    highlights: [
      'Individual 45–60 minute private consultation',
      'Court form certification (C100 & Form A) if required',
      'Screening for exemptions and dispute resolution options',
    ],
  },
  {
    title: 'Child Arrangements',
    url: 'https://www.cavendishfamilymediation.co.uk/services/child-arrangements/',
    icon: Users,
    description:
      'Constructive, child-focused discussions designed to agree living routines, holiday schedules, and future co-parenting decisions without the hostility, delay, or expense of court litigation.',
    highlights: [
      'Focus on the child’s emotional security and routine',
      'Practical parenting agreements and holiday schedules',
      'Option for separate shuttle sessions if tensions are high',
    ],
  },
  {
    title: 'Financial Mediation',
    url: 'https://www.cavendishfamilymediation.co.uk/services/financial-mediation/',
    icon: Coins,
    description:
      'Structured, transparent negotiation regarding the family home, pensions, savings, maintenance, and liabilities. We guide you towards equitable financial settlements that support both households.',
    highlights: [
      'Transparent full financial disclosure',
      'Property, mortgage, and pension distribution options',
      'Summary ready for your solicitor to convert into a Consent Order',
    ],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
            Our Mediation Services
          </p>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-slate-900 tracking-tight text-balance">
            Specialist Family Dispute Resolution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether preparing for a statutory court application or seeking an amicable, long-term agreement for your children and assets, Cavendish Family Mediation offers structured, impartial guidance.
          </p>
        </div>

        {/* 3 Concise Service Summaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col justify-between bg-stone-50/70 rounded-xl border border-stone-200/90 p-7 hover:border-stone-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-slate-800 shadow-2xs">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>

                  <h3 className="font-serif-brand text-2xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8 text-xs text-slate-600 border-t border-stone-200/60 pt-4">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={service.url}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors group"
                  >
                    <span>View {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Calm Consultation Accent Banner */}
        <div className="mt-12 rounded-xl bg-stone-100/80 border border-stone-200/80 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="font-serif-brand text-xl sm:text-2xl font-semibold text-slate-900">
              Preserving Constructive Communication for Parents
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Family mediation keeps the control in your hands rather than handing decisions over to a judge. Sessions can be conducted either jointly or via separate shuttle appointments, both in-person and remotely.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="w-full sm:w-auto overflow-hidden rounded-lg border border-stone-200 shadow-xs">
              <img
                src={parentingImage}
                alt="Parents collaborating in an amicable family consultation"
                className="w-full sm:w-72 h-40 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

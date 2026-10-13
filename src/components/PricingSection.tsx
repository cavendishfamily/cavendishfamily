import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

const tiers: PricingTier[] = [
  {
    name: 'MIAM Assessment',
    price: '£130',
    unit: 'per person',
    description:
      'The initial mandatory 45–60 minute individual evaluation meeting with an accredited mediator.',
    features: [
      'Private 1-to-1 confidential consultation',
      'Assessment of mediation suitability',
      'Court form signing (C100 / Form A) if required',
      'Screening for domestic abuse & legal aid criteria',
    ],
    ctaLabel: 'Enquire About MIAM',
  },
  {
    name: 'Mediation Sessions',
    price: '£150',
    unit: 'per hour / person',
    description:
      'Impartial dispute resolution sessions focusing on child arrangements, finances, or both.',
    features: [
      'Joint discussions or separate shuttle rooms',
      'Child arrangements & parenting schedules',
      'Financial disclosure & property discussions',
      'Detailed written session summary after each meeting',
    ],
    ctaLabel: 'Enquire About Mediation',
  },
  {
    name: 'Outcome Documents',
    price: '£300',
    unit: 'per package',
    description:
      'Comprehensive closing legal documentation consolidating all terms agreed in mediation.',
    features: [
      'Memorandum of Understanding (MOU)',
      'Open Financial Statement (OFS) if applicable',
      'Child Parenting Plan breakdown',
      'Drafted for solicitors to formalise into a Consent Order',
    ],
    ctaLabel: 'Enquire About Documents',
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
            Transparent Pricing
          </p>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-slate-900 tracking-tight text-balance">
            Clear, Predictable Fees
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            We operate with straightforward, transparent pricing. No open-ended legal retainers or unexpected administrative charges.
          </p>
        </div>

        {/* Compact Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between bg-stone-50/60 rounded-xl border border-stone-200 p-7 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div>
                <h3 className="font-serif-brand text-2xl font-semibold text-slate-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed font-normal min-h-[36px]">
                  {tier.description}
                </p>

                <div className="mb-6 pb-6 border-b border-stone-200/80">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-brand text-4xl lg:text-5xl font-bold text-slate-900 tabular-nums">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {tier.unit}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/contact/"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-2xs transition-colors"
                >
                  <span>{tier.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Clarity Notice */}
        <div className="mt-10 p-5 rounded-lg bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Sessions are billed transparently per party to ensure complete independence and fairness. For confidential fee questions, call our practice on <strong className="text-slate-900">03300 100 217</strong>.
          </p>
          <a
            href="tel:03300100217"
            className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-slate-700 whitespace-nowrap shrink-0"
          >
            Call 03300 100 217 →
          </a>
        </div>
      </div>
    </section>
  );
};

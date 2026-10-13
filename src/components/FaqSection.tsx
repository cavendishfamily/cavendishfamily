import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    question: 'What is a MIAM and do I have to attend one?',
    answer: (
      <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
        <p>
          A Mediation Information &amp; Assessment Meeting (MIAM) is a confidential 45–60 minute private meeting between you and an accredited family mediator. Under English family law, attending a MIAM is a statutory requirement before you can submit an application to the Family Court for Child Arrangements (Form C100) or Financial Orders (Form A).
        </p>
        <p>
          The mediator assesses whether dispute resolution through mediation is appropriate for your case. If mediation is unsuitable or the other person refuses to participate, the mediator provides the official signed court certificate enabling your court application.
        </p>
        <p className="pt-1">
          <strong className="text-slate-800">MIAM Exemptions:</strong> You may be exempt from attending a MIAM under specific statutory grounds, including documented domestic abuse or coercive control, immediate child protection or safety risks, bankruptcy, severe urgency, or prior recent mediation attendance.
        </p>
      </div>
    ),
  },
  {
    question: 'Can we attend mediation sessions separately?',
    answer: (
      <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
        <p>
          Yes. While some couples choose to sit together in joint meetings, you are under no obligation to be in the same room or on the same screen if that causes distress, discomfort, or an imbalance of power.
        </p>
        <p>
          We regularly conduct <strong>shuttle mediation</strong>, where both individuals remain in separate private rooms (or separate secure video breakout rooms). The mediator shuttles between both parties, ensuring each perspective is communicated clearly and calmly without direct confrontation. Your initial MIAM is always conducted separately and in strict confidence.
        </p>
      </div>
    ),
  },
  {
    question: 'Are agreements reached in mediation legally binding?',
    answer: (
      <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
        <p>
          Agreements reached during mediation sessions are deliberately confidential and conducted &lsquo;without prejudice&rsquo;. This protective legal status allows both parties to discuss options openly without fear that compromise proposals will be held against them in court.
        </p>
        <p>
          Once consensus is reached, the mediator prepares formal outcome documents: a comprehensive <strong>Memorandum of Understanding (MOU)</strong> outlining practical arrangements, and an <strong>Open Financial Statement (OFS)</strong> detailing agreed figures.
        </p>
        <p className="pt-1">
          <strong className="text-slate-800">Legal Formalisation:</strong> To make financial or child arrangements legally binding, your respective solicitors take these agreed mediation summaries and submit a draft <em>Consent Order</em> to the court. Once approved by a judge, your agreement carries the full binding force of a court order—without having endured a contested court trial.
        </p>
      </div>
    ),
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
            Essential Questions
          </p>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Clear, authoritative answers regarding MIAM requirements, session formats, and legal outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-stone-200 bg-stone-50/50 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-slate-800"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-brand text-xl font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 text-slate-700 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-stone-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          Have an urgent court deadline or specific question? Speak directly with our team on{' '}
          <a
            href="tel:03300100217"
            className="font-semibold text-slate-900 hover:underline"
          >
            03300 100 217
          </a>
          .
        </div>
      </div>
    </section>
  );
};

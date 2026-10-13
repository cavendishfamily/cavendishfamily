import React from 'react';
import { UserCheck, MessageSquare, FileText, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  lead: string;
  details: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: ProcessStep[] = [
  {
    number: 'Step 1',
    title: 'Private Assessment',
    lead: 'Confidential Individual MIAM',
    details:
      'Each party attends an individual 45–60 minute session with an accredited family mediator. We review the background, assess suitability, discuss exemptions, and address any safety or privacy requirements without the other party present.',
    icon: UserCheck,
  },
  {
    number: 'Step 2',
    title: 'Mediation Where Suitable',
    lead: 'Guided Collaborative Sessions',
    details:
      'If both parties agree and the case is suitable, structured mediation sessions begin. Meetings can be held together or in separate rooms (shuttle mediation). The mediator remains neutral, facilitating productive conversations around children and finances.',
    icon: MessageSquare,
  },
  {
    number: 'Step 3',
    title: 'Written Outcomes',
    lead: 'Formal Documentation & Agreements',
    details:
      'Upon reaching agreement, the mediator produces clear outcome summaries: a Memorandum of Understanding (MOU) and an Open Financial Statement. These can then be readily drawn into a legally binding Consent Order by your legal advisors.',
    icon: FileText,
  },
];

export const ProcessInfographic: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
            The Mediation Roadmap
          </p>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-slate-900 tracking-tight text-balance">
            How Family Mediation Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            A clear, three-stage pathway designed to reduce stress, avoid court conflict, and achieve fair, lasting solutions.
          </p>
        </div>

        {/* Infographic Steps Container */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-white rounded-xl border border-stone-200 p-8 shadow-xs flex flex-col justify-between relative group hover:border-slate-300 transition-colors"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                        <Icon className="w-7 h-7 text-stone-100" />
                      </div>
                      <span className="text-xs font-mono font-medium tracking-wider text-slate-500 uppercase px-2.5 py-1 bg-stone-100 rounded">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-serif-brand text-2xl font-semibold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mb-4 tracking-wide uppercase">
                      {step.lead}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {step.details}
                    </p>
                  </div>

                  {/* Accessible progress link */}
                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Stage {idx + 1} of 3</span>
                    {idx < 2 && (
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        Proceeds to Step {idx + 2}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                    {idx === 2 && (
                      <span className="font-medium text-slate-800">
                        Final Resolution
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infographic Accessible Summary Text */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <p>
            Where mediation is not suitable or agreement cannot be reached, Cavendish Family Mediation provides the requisite signed court documentation (such as Form C100 or Form A) to enable legal progression.
          </p>
        </div>
      </div>
    </section>
  );
};

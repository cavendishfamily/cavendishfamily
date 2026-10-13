/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessInfographic } from './components/ProcessInfographic';
import { PricingSection } from './components/PricingSection';
import { WhyCavendishSection } from './components/WhyCavendishSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationCta } from './components/ConsultationCta';
import { Footer } from './components/Footer';

export default function App() {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-slate-200 selection:text-slate-900">
      <Header customLogoUrl={customLogoUrl} />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ProcessInfographic />
        <PricingSection />
        <WhyCavendishSection />
        <FaqSection />
        <ConsultationCta />
      </main>
      <Footer
        customLogoUrl={customLogoUrl}
        onUploadLogo={(url) => setCustomLogoUrl(url || null)}
      />
    </div>
  );
}

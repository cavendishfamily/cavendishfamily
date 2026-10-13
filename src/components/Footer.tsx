import React, { useState } from 'react';
import { Phone, Upload, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  customLogoUrl?: string | null;
  onUploadLogo?: (url: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ customLogoUrl, onUploadLogo }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedSuccess, setUploadedSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUploadLogo) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUploadLogo(event.target.result as string);
          setUploadedSuccess(true);
          setTimeout(() => {
            setShowUploadModal(false);
            setUploadedSuccess(false);
          }, 1200);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Regional Scope */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="https://www.cavendishfamilymediation.co.uk/"
              className="inline-block"
              title="Cavendish Family Mediation Home"
            >
              {customLogoUrl ? (
                <img
                  src={customLogoUrl}
                  alt="Cavendish Family Mediation"
                  className="h-10 w-auto object-contain brightness-100 invert"
                />
              ) : (
                <div className="flex flex-col">
                  <span className="font-serif-brand text-2xl font-semibold tracking-tight text-white">
                    Cavendish
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-stone-400 -mt-1">
                    Family Mediation
                  </span>
                </div>
              )}
            </a>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-normal">
              Cavendish Family Mediation provides independent, confidential dispute resolution and court-accredited MIAM assessments for families throughout <strong>Suffolk, Essex, Kent and Sussex</strong>.
            </p>

            <div className="pt-1">
              <a
                href="tel:03300100217"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-stone-200 transition-colors"
                title="Telephone Cavendish Family Mediation"
              >
                <Phone className="w-4 h-4 text-stone-400" />
                <span>03300 100 217</span>
              </a>
            </div>

            {/* Logo asset notice / upload button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowUploadModal(true)}
                className="text-[11px] text-stone-500 hover:text-stone-300 inline-flex items-center gap-1.5 transition-colors underline underline-offset-2"
              >
                <Upload className="w-3 h-3" />
                <span>Practice Logo Asset Settings</span>
              </button>
            </div>
          </div>

          {/* Practice Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Practice
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/about/"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/services/"
                  className="hover:text-white transition-colors"
                >
                  All Services
                </a>
              </li>
              <li>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/contact/"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Mediation Services */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Mediation Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/services/miam-assessment/"
                  className="hover:text-white transition-colors"
                >
                  MIAM Assessments
                </a>
              </li>
              <li>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/services/child-arrangements/"
                  className="hover:text-white transition-colors"
                >
                  Child Arrangements
                </a>
              </li>
              <li>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/services/financial-mediation/"
                  className="hover:text-white transition-colors"
                >
                  Financial Mediation
                </a>
              </li>
            </ul>
            <div className="pt-2 text-[11px] text-stone-500">
              Coverage: Suffolk · Essex · Kent · Sussex
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Cavendish Family Mediation. All rights reserved.
          </p>
          <p className="text-stone-500">
            Impartial family mediation practice operating in accordance with FMC standards.
          </p>
        </div>
      </div>

      {/* Upload Logo Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white text-slate-900 rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <h3 className="font-serif-brand text-2xl font-semibold mb-2">
              Upload Practice Logo
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              In accordance with branding standards, the site uses the official typographic wordmark. If you have the official PNG or SVG logo file from Cavendish Family Mediation, upload it here to preview it in the header and footer.
            </p>

            {uploadedSuccess ? (
              <div className="p-4 rounded-lg bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Logo updated successfully!</span>
              </div>
            ) : (
              <div className="space-y-4">
                <label className="border-2 border-dashed border-stone-300 hover:border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer bg-stone-50 transition-colors">
                  <Upload className="w-8 h-8 text-slate-600 mb-2" />
                  <span className="text-xs font-semibold text-slate-800">
                    Choose PNG or SVG logo file
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1">
                    Max 2MB (transparent background recommended)
                  </span>
                  <input
                    type="file"
                    accept="image/png, image/svg+xml, image/jpeg"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-stone-100 rounded-lg"
                  >
                    Close
                  </button>
                  {customLogoUrl && (
                    <button
                      type="button"
                      onClick={() => {
                        if (onUploadLogo) onUploadLogo('');
                        setShowUploadModal(false);
                      }}
                      className="px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      Reset to Wordmark
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  customLogoUrl?: string | null;
}

export const Header: React.FC<HeaderProps> = ({ customLogoUrl }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single text element wordmark or uploaded brand logo */}
          <div className="shrink-0">
            <a
              href="https://www.cavendishfamilymediation.co.uk/"
              className="group flex flex-col focus-visible:outline-2 focus-visible:outline-slate-800"
              title="Cavendish Family Mediation Home"
            >
              {customLogoUrl ? (
                <img
                  src={customLogoUrl}
                  alt="Cavendish Family Mediation"
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <>
                  <span className="font-serif-brand text-2xl sm:text-[1.75rem] font-semibold tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
                    Cavendish
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-slate-500 -mt-1">
                    Family Mediation
                  </span>
                </>
              )}
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="https://www.cavendishfamilymediation.co.uk/"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-slate-800"
            >
              Home
            </a>
            <a
              href="https://www.cavendishfamilymediation.co.uk/about/"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-slate-800"
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <a
                  href="https://www.cavendishfamilymediation.co.uk/services/"
                  className="hover:text-slate-950 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-slate-800"
                >
                  Services
                </a>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Services menu"
                  className="p-1 text-slate-500 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-slate-800 rounded"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>
              </div>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 w-64 pt-2 shadow-lg animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                >
                  <div className="bg-white rounded-lg border border-stone-200 shadow-md py-2 text-sm">
                    <a
                      href="https://www.cavendishfamilymediation.co.uk/services/miam-assessment/"
                      role="menuitem"
                      className="block px-4 py-2.5 text-slate-700 hover:bg-stone-50 hover:text-slate-950 transition-colors"
                    >
                      MIAM Assessments
                    </a>
                    <a
                      href="https://www.cavendishfamilymediation.co.uk/services/child-arrangements/"
                      role="menuitem"
                      className="block px-4 py-2.5 text-slate-700 hover:bg-stone-50 hover:text-slate-950 transition-colors"
                    >
                      Child Arrangements
                    </a>
                    <a
                      href="https://www.cavendishfamilymediation.co.uk/services/financial-mediation/"
                      role="menuitem"
                      className="block px-4 py-2.5 text-slate-700 hover:bg-stone-50 hover:text-slate-950 transition-colors"
                    >
                      Financial Mediation
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://www.cavendishfamilymediation.co.uk/contact/"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-slate-800"
            >
              Contact Us
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:03300100217"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-900 bg-stone-100 hover:bg-stone-200 border border-stone-300/80 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              title="Call 03300 100 217"
            >
              <Phone className="w-4 h-4 text-slate-700" />
              <span>03300 100 217</span>
            </a>
            <a
              href="https://www.cavendishfamilymediation.co.uk/contact/"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              Book Assessment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:03300100217"
              className="p-2 text-slate-800 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-200"
              aria-label="Call 03300 100 217"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:bg-stone-100 rounded-lg transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            <a
              href="https://www.cavendishfamilymediation.co.uk/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-base font-medium text-slate-900 hover:bg-stone-100"
            >
              Home
            </a>
            <a
              href="https://www.cavendishfamilymediation.co.uk/about/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-base font-medium text-slate-900 hover:bg-stone-100"
            >
              About Us
            </a>

            {/* Mobile Services section */}
            <div className="py-2 border-y border-stone-100 my-1">
              <a
                href="https://www.cavendishfamilymediation.co.uk/services/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 block text-sm font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-900"
              >
                Services
              </a>
              <div className="pl-3 mt-1 flex flex-col space-y-1">
                <a
                  href="https://www.cavendishfamilymediation.co.uk/services/miam-assessment/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base text-slate-800 hover:bg-stone-100"
                >
                  MIAM Assessments
                </a>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/services/child-arrangements/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base text-slate-800 hover:bg-stone-100"
                >
                  Child Arrangements
                </a>
                <a
                  href="https://www.cavendishfamilymediation.co.uk/services/financial-mediation/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base text-slate-800 hover:bg-stone-100"
                >
                  Financial Mediation
                </a>
              </div>
            </div>

            <a
              href="https://www.cavendishfamilymediation.co.uk/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-base font-medium text-slate-900 hover:bg-stone-100"
            >
              Contact Us
            </a>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href="tel:03300100217"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-slate-900 bg-stone-100 border border-stone-300 rounded-lg hover:bg-stone-200"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>Call 03300 100 217</span>
              </a>
              <a
                href="https://www.cavendishfamilymediation.co.uk/contact/"
                className="flex items-center justify-center w-full py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm"
              >
                Book Confidential Assessment
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

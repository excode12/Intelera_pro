import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin, ArrowRight } from 'lucide-react';
import NewsletterSignup from '../lead/NewsletterSignup';
import ChecklistDownload from '../lead/ChecklistDownload';
import MonroviaMap from '../lead/MonroviaMap';
import logoWhite from '../../images/logo_white_transparent.png';

const footerLinks = {
  Company: [
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/case-studies', label: 'Case Studies' },
  ],
  Services: [
    { to: '/services', label: 'All Services' },
    { to: '/services/security-assessment', label: 'Security Assessment' },
    { to: '/services/compliance', label: 'Compliance & Audit' },
  ],
  Resources: [
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact / Newsletter' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer-pattern relative overflow-hidden border-t border-white/10">
      {/* Top gradient accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0EA5E9] via-[#7C3AED] to-[#F97316]" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Brand + link columns — single row on desktop */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-8">
            {/* Brand + contact */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-2 mb-5">
                <img src={logoWhite} alt="Intelera" className="h-10 w-auto object-contain" />
              </Link>
              <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
                Intelligent Security. Engineered Digital Power. We protect enterprises with cutting-edge cybersecurity and secure web engineering from Monrovia, Liberia.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-stone-400">
                  <MapPin className="w-4 h-4 text-[#0EA5E9] shrink-0" aria-hidden />
                  <span>Monrovia, Liberia</span>
                </div>
                <a
                  href="mailto:contact@intelera.com"
                  className="flex items-center gap-3 text-sm text-stone-400 hover:text-[#38BDF8] transition"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden />
                  contact@intelera.com
                </a>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" strokeWidth={1.8} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 transition"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-5 h-5" strokeWidth={1.8} />
                </a>
              </div>
            </div>

            {/* Link columns — aligned in a row on desktop, stacked on mobile */}
            <div className="sm:col-span-2 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="min-w-0">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4">
                    {title}
                  </h4>
                  <ul className="space-y-2.5">
                    {links.map(({ to, label }) => (
                      <li key={to}>
                        <Link
                          to={to}
                          className="text-stone-400 hover:text-white text-sm transition inline-flex items-center gap-2 group"
                        >
                          {label}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" strokeWidth={2} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Map (left) + Newsletter & Free resource (right) — equal width on desktop */}
        <div className="pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="min-h-[220px] lg:min-h-[280px] order-2 lg:order-1">
              <MonroviaMap />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <NewsletterSignup />
              <ChecklistDownload />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-stone-500 text-sm order-2 sm:order-1">
              © {new Date().getFullYear()} Intelera. Monrovia, Liberia. All rights reserved.
            </p>
            <div className="flex gap-6 sm:gap-8 text-sm text-stone-500 order-1 sm:order-2">
              <Link to="#" className="hover:text-stone-300 transition" aria-label="Privacy policy (page coming soon)">
                Privacy
              </Link>
              <Link to="#" className="hover:text-stone-300 transition" aria-label="Terms of use (page coming soon)">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

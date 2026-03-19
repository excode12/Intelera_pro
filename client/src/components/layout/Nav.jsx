import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import api from '../../lib/api';
import { defaultServices } from '../../lib/servicesData';
import { servicesHeroImage } from '../../lib/siteImages';
import logoWhite from '../../images/logo_white_transparent.png';
import logoDark from '../../images/logo_dark_transparent.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    api.get('/services').then(setServices).catch(() => { });
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-stone-200/60' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={scrolled ? logoDark : logoWhite} alt="Intelera" className="h-9 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link, i) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                <Link
                  to={link.to}
                  className={`text-sm font-medium ${scrolled ? 'text-stone-600' : 'text-white/90'} hover:text-[#7C3AED] transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:bg-[#7C3AED] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                 className={`text-sm font-medium ${scrolled ? 'text-stone-600' : 'text-white/90'} hover:text-[#7C3AED] transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:bg-[#7C3AED] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform inline-flex items-center gap-0.5`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} strokeWidth={2} />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                  >
                    <div className="w-[560px] rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-xl shadow-stone-200/50 flex">
                      <div className="flex-1 min-w-0 py-4 pl-5 pr-4">
                        <Link to="/services" className="block text-sm font-semibold text-[#7C3AED] hover:text-[#6D28D9] mb-3" onClick={() => setServicesOpen(false)}>
                          All services
                        </Link>
                        <ul className="space-y-1">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                to={`/services/${s.slug}`}
                                className="block py-2 px-3 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-[#0EA5E9] transition"
                                onClick={() => setServicesOpen(false)}
                              >
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-52 shrink-0 bg-stone-100">
                        <img src={servicesHeroImage} alt="" className="w-full h-full object-cover min-h-[200px]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navLinks.slice(2).map((link, i) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * (i + 3) }}>
                <Link
                  to={link.to}
                  className={`text-sm font-medium ${scrolled ? 'text-stone-600' : 'text-white/90'} hover:text-[#7C3AED] transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:bg-[#7C3AED] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-[var(--radius-button)] bg-[#F97316] text-white font-semibold text-sm hover:bg-[#EA580C] transition shadow-lg shadow-orange-200/50"
            >
              Get Consultation
            </Link>
            <Link
              to="/admin"
              className="text-stone-500 hover:text-[#0EA5E9] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-transparent hover:border-[#0EA5E9]/20 hover:bg-[#E0F2FE]/30 transition"
            >
              Admin
            </Link>
            <button
              type="button"
               className={`md:hidden p-2 ${scrolled ? 'text-stone-700' : 'text-white/90'}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="absolute inset-0 bg-stone-900/20 backdrop-blur-sm" />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl border-l border-stone-200 p-8 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <img src={mobileOpen ? logoDark : (scrolled ? logoDark : logoWhite)} alt="Intelera" className="h-7 w-auto object-contain" />
                <button type="button" onClick={() => setMobileOpen(false)} className="p-2 text-stone-600 hover:text-stone-900" aria-label="Close menu">
                  <X className="w-5 h-5" strokeWidth={1.8} />
                </button>
              </div>
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="text-lg text-stone-600 hover:text-[#7C3AED] font-medium">
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-stone-200 pt-4 mt-2">
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Services</span>
                <Link to="/services" onClick={() => setMobileOpen(false)} className="block mt-2 text-lg text-[#7C3AED] font-medium">All services</Link>
                <ul className="mt-2 space-y-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-stone-600 hover:text-[#0EA5E9] font-medium">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl overflow-hidden aspect-[2/1] max-h-32 bg-stone-100">
                  <img src={servicesHeroImage} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-4 py-3 rounded-xl bg-[#F97316] text-white font-semibold text-center">
                Get Consultation
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

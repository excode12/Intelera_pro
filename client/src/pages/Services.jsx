import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import api from '../lib/api';
import { defaultServices } from '../lib/servicesData';
import { servicesHeroImage } from '../lib/siteImages';

const defaultServicesList = defaultServices;

export default function Services() {
  const [services, setServices] = useState(defaultServicesList);

  useEffect(() => {
    api.get('/services').then(setServices).catch(() => { });
  }, []);

  return (
    <div className="pt-28 bg-white">
      <section className="py-[var(--spacing-section)] bg-stone-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-[50%_50%_0_0_/100%_100%_0_0] bg-[#EDE9FE] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="rounded-2xl overflow-hidden border border-stone-200/80 shadow-[var(--shadow-card)] mb-10 aspect-[2/1] max-h-[320px] bg-stone-200">
            <img src={servicesHeroImage} alt="Enterprise security and infrastructure" className="w-full h-full object-cover" loading="eager" />
          </div>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#7C3AED] font-semibold text-sm uppercase tracking-[0.2em]">Services</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Enterprise Security & Secure Web Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto"
          >
            Each service is delivered as a focused engagement with clear outcomes, deliverables, and timelines. We tailor scope and depth to your risk profile and budget—from quick health checks to full program build-outs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="mt-4 text-stone-500 max-w-xl mx-auto text-sm"
          >
            All engagements include documentation and handover so your team can own and sustain the results.
          </motion.p>
        </div>
      </section>

      {/* Why these services — creative strip */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-stone-600">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#0EA5E9]" /> Scoped to your environment</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7C3AED]" /> Actionable reports</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#F97316]" /> No long-term lock-in</span>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((s, idx) => (
          <motion.section
            key={s.slug}
            id={s.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="py-[var(--spacing-block)] border-b border-stone-200 last:border-0"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-wider">Service</span>
                <h2 className="mt-2 text-3xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.title}
                </h2>
                <p className="mt-4 text-stone-600 leading-relaxed">{s.description || s.shortDescription}</p>

                <div className="mt-8">
                  <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-3">Target Outcomes</h3>
                  <div className="bg-[#E0F2FE]/40 border-l-4 border-[#0EA5E9] p-4 rounded-r-xl">
                    <p className="text-stone-700 italic text-[15px]">{s.outcomes || 'Defined, sustainable security controls and risk reduction.'}</p>
                  </div>
                </div>

                {s.features?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">What's Included</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-stone-600 text-[15px]">
                          <span className="text-[#7C3AED] font-bold mt-0.5">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[#F97316] font-bold hover:gap-3 transition-all underline decoration-2 underline-offset-4">
                    Inquire about this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {s.process?.length > 0 && (
                <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-[var(--shadow-card)] sticky top-32">
                  <h3 className="font-bold text-stone-900 mb-6 text-lg" style={{ fontFamily: 'var(--font-display)' }}>Methodology</h3>
                  <div className="space-y-6 relative">
                    <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-stone-100" />
                    {s.process.map((p) => (
                      <div key={p.step} className="flex gap-4 relative z-10">
                        <span className="w-9 h-9 rounded-full bg-stone-900 text-white font-bold flex items-center justify-center text-xs shrink-0">{p.step}</span>
                        <div>
                          <span className="font-bold text-stone-900 block">{p.title}</span>
                          <p className="text-sm text-stone-500 mt-1 leading-relaxed">{p.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        ))}
      </div>

      <section className="py-[var(--spacing-section)] bg-stone-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-b-[50%] bg-[#EDE9FE] opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to strengthen your security?
          </h2>
          <p className="mt-3 text-stone-600 max-w-md mx-auto">Tell us about your environment and goals. We’ll recommend the right starting point.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-button)] bg-[#F97316] text-white font-semibold shadow-lg shadow-orange-200/50 hover:bg-[#EA580C] transition"
          >
            Get a consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

/** Single service page at /services/:slug — loads from API in real time, fallback to defaultServices */
export function ServiceDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);
    if (!slug) return;
    api.get(`/services/${slug}`)
      .then((data) => setItem(data))
      .catch(() => {
        const found = defaultServices.find((s) => s.slug === slug);
        if (found) setItem(found);
        else { setItem(null); setNotFound(true); }
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="pt-28 min-h-[60vh] flex flex-col items-center justify-center px-4 bg-white">
        <h1 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>Service not found</h1>
        <p className="mt-2 text-stone-600 text-center max-w-md">The service you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/services" className="mt-6 px-6 py-3 rounded-xl bg-[#0EA5E9] text-white font-semibold hover:bg-[#0284C7] transition">View all services</Link>
      </div>
    );
  }

  if (!item) return <div className="pt-28 min-h-screen flex items-center justify-center bg-white text-stone-600">Loading...</div>;

  return (
    <div className="pt-28 bg-white">
      <section className="py-[var(--spacing-section)] bg-stone-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-[50%_50%_0_0_/100%_100%_0_0] bg-[#EDE9FE] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="text-[#0EA5E9] text-sm font-semibold hover:underline">← All services</Link>
          <span className="block mt-4 text-[#7C3AED] text-sm font-semibold uppercase tracking-wider">Service</span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-4xl sm:text-5xl font-bold text-stone-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {item.title}
          </motion.h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl">{item.shortDescription || item.description}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-[var(--spacing-block)]">
        {(item.description || item.shortDescription) && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>Overview</h2>
            <p className="text-stone-600 leading-relaxed">{item.description || item.shortDescription}</p>
          </section>
        )}
        {item.outcomes && (
          <section className="mb-12">
            <h2 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">Target Outcomes</h2>
            <div className="bg-[#E0F2FE]/40 border-l-4 border-[#0EA5E9] p-6 rounded-r-2xl">
              <p className="text-stone-800 italic text-lg leading-relaxed">{item.outcomes}</p>
            </div>
          </section>
        )}
        {item.features?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">What we deliver</h2>
            <ul className="space-y-2">
              {item.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-stone-600">
                  <span className="text-[#7C3AED] font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
          </section>
        )}
        {item.process?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Process</h2>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <div className="space-y-4">
                {item.process.map((p) => (
                  <div key={p.step} className="flex gap-4">
                    <span className="w-9 h-9 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] font-bold flex items-center justify-center text-sm shrink-0">{p.step}</span>
                    <div>
                      <span className="font-medium text-stone-900">{p.title}</span>
                      <p className="text-sm text-stone-500">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F97316] text-white font-semibold shadow-lg shadow-orange-200/50 hover:bg-[#EA580C] transition">
          Get a consultation
        </Link>
      </div>
    </div>
  );
}

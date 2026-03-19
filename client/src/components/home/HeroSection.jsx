import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Globe } from 'lucide-react';
import logoWhite from '../../images/logo_white_transparent.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* ── Rich indigo-to-deep-blue gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#0f172a]" />

      {/* Mesh / animated accent shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Top-left radial glow */}
        <motion.div
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)' }}
        />
        {/* Bottom-right radial glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-52 -right-52 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)' }}
        />
        {/* Accent streak */}
        <motion.div
          animate={{ x: ['0%', '100%'], opacity: [0, 0.12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 1 }}
          className="absolute top-1/3 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400/30"
            style={{ top: `${20 + i * 15}%`, left: `${10 + i * 18}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          />
        ))}
      </div>

      {/* Bottom wave separator */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 text-stone-50"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 80V40 Q360 0 720 40 T1440 40 V80 Z" fill="currentColor" />
      </svg>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-indigo-300 font-semibold text-sm uppercase tracking-[0.2em] mb-5"
            >
              Cybersecurity &amp; Secure Web Engineering
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.06] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Intelligent Security.{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
                Engineered
              </span>
              <br />
              Digital Power.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-6 text-lg text-indigo-200/80 max-w-lg leading-relaxed"
            >
              We protect enterprises with elite cybersecurity solutions and secure web engineering—from
              vulnerability assessments and compliance readiness to secure development and ongoing monitoring.
              Based in Monrovia, Liberia, we serve clients across West Africa and beyond.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              className="mt-3 text-sm text-indigo-300/60"
            >
              Trusted by financial institutions, healthcare providers, and technology companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F97316] text-white font-semibold text-base hover:bg-[#EA580C] transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
              >
                Get Free Security Consultation
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-indigo-400/50 text-indigo-200 font-semibold hover:bg-indigo-500/20 hover:border-indigo-400 transition"
              >
                Explore Our Expertise
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Branded hero card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 22, delay: 0.25 }}
            className="relative hidden lg:block w-full"
          >
            <div className="relative max-w-[600px] xl:max-w-[660px] ml-auto">
              {/* Decorative glow ring */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-indigo-500/25 via-violet-500/15 to-purple-500/20 blur-xl" />

              {/* Glass card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-10">
                {/* Logo display */}
                <div className="flex justify-center mb-8">
                  <motion.img
                    src={logoWhite}
                    alt="Intelera"
                    className="h-20 xl:h-24 w-auto object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(129,140,248,0.3)) brightness(1.1)',
                    }}
                  />
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '150+', label: 'Projects' },
                    { value: '98%', label: 'Retention' },
                    { value: '24hr', label: 'Response' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="text-center p-4 rounded-xl bg-white/5 border border-white/[0.06]"
                    >
                      <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-indigo-300/70 mt-1 uppercase tracking-wider">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Capability badges */}
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: 'Advanced Threat Detection & Response', color: 'text-indigo-300' },
                    { icon: Lock, text: 'Compliance & Audit Readiness', color: 'text-violet-300' },
                    { icon: Globe, text: 'Secure Cloud Architecture', color: 'text-purple-300' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition"
                    >
                      <item.icon className={`w-5 h-5 ${item.color} shrink-0`} strokeWidth={1.8} />
                      <span className="text-sm text-indigo-100/80 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-indigo-300/50 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-11 rounded-full border-2 border-indigo-400/30 flex justify-center pt-2"
          >
            <span className="w-1.5 h-2 rounded-full bg-indigo-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

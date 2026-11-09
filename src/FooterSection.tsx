import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Calendar,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const FooterSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navColumns = [
    {
      title: "The Awards",
      links: [
        { label: "About The Honours", href: "#about" },
        { label: "Award Categories", href: "#categories" },
        { label: "The Honourees", href: "#honourees" },
        { label: "Judging Council", href: "#judges" },
        { label: "Past Laureates", href: "#archive" },
      ],
    },
    {
      title: "Experience",
      links: [
        { label: "Gala Programme", href: "#programme" },
        { label: "Runway Showcase", href: "#runway" },
        { label: "Tickets & Tables", href: "#tickets" },
        { label: "VIP Hospitality", href: "#hospitality" },
        { label: "Venue & Access", href: "#venue" },
      ],
    },
    {
      title: "Partnerships",
      links: [
        { label: "Brand Sponsorships", href: "#sponsor" },
        { label: "Media Accreditation", href: "#press" },
        { label: "Designer Submissions", href: "#submissions" },
        { label: "Corporate Tables", href: "#corporate" },
        { label: "Brand Partners", href: "#partners" },
      ],
    },
  ];

  return (
    <footer 
      aria-label="Site Footer"
      className="relative w-full bg-[#14030a] text-[#E9D9CC] overflow-hidden pt-20 pb-12 border-t border-[#DDB578]/20"
    >
      {/* Atmospheric gold/burgundy ambient radial gradients */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[350px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(221,181,120,0.12)_0%,rgba(20,3,10,0)_100%)] pointer-events-none select-none -z-0"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[radial-gradient(circle_at_100%_100%,rgba(101,12,38,0.25)_0%,rgba(20,3,10,0)_70%)] pointer-events-none select-none -z-0"
        aria-hidden="true" 
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        
        {/* ================= TOP SECTION: Newsletter & Editorial Callout ================= */}
        <div className="pb-16 mb-16 border-b border-[#DDB578]/15 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Statement */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-4 h-4 text-[#D8B16F]" />
              <span className="font-sans text-[13px] tracking-[0.28em] uppercase text-[#D8B16F] font-semibold">
                STAY IN TOUCH
              </span>
            </div>
            <h3 className="font-serif-luxury font-medium text-[#F5D7A0] text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.08] tracking-tight mb-4">
              Receive Invitations & <br />
              <span className="italic font-normal">Couture Chronicles</span>
            </h3>
            <p className="font-sans font-light text-[#E9D9CC]/75 text-base sm:text-lg max-w-[580px] leading-relaxed">
              Subscribe to privileged communications, ticket release announcements, runway coverage, and exclusive dispatches from the South Asian Fashion Awards council.
            </p>
          </div>

          {/* Right Column: Newsletter Subscription Input */}
          <div className="lg:col-span-5 w-full">
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3.5 p-5 rounded-2xl bg-[#280B16]/70 border border-[#DDB578]/40 text-[#F5D7A0]"
              >
                <CheckCircle2 className="w-6 h-6 text-[#D8B16F] shrink-0" />
                <p className="font-sans text-sm sm:text-base leading-snug">
                  Thank you for joining our private directory. An invitation dispatch will arrive shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D8B16F]/60" />
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-full bg-[#280B16]/50 border border-[#DDB578]/30 text-[#FFF8F0] placeholder-[#E9D9CC]/40 font-sans text-sm sm:text-[15px] focus:outline-none focus:border-[#DDB578] focus:ring-1 focus:ring-[#DDB578] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-[#DDB578] text-[#280B16] font-sans font-semibold text-sm sm:text-[15px] tracking-wide hover:bg-[#ebd09d] hover:shadow-[0_0_20px_rgba(221,181,120,0.35)] transition-all duration-300 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
            <p className="font-sans text-xs text-[#E9D9CC]/50 mt-3 pl-2">
              We respect your privacy. Unsubscribe at any moment.
            </p>
          </div>
        </div>

        {/* ================= MIDDLE SECTION: Brand Info + Navigation Columns ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Brand Identity Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left pr-0 lg:pr-8">
            {/* Laurel + Wordmark */}
            <div className="flex items-center gap-3 mb-5">
              <svg 
                className="w-6 h-4 text-[#DDB578]/80" 
                viewBox="0 0 36 16" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M34 8c-4.5 0-8.5-1.5-12-4.5 2 3.5 1.5 7.5-1 10.5 4-1 7.5-3 10-6 1 0 2 0 3 0z" opacity="0.6"/>
                <path d="M22 6c-3-2-6.5-3-10.5-3 1.5 2.5 1.5 5.5-.5 7.5 3-0.5 5.5-2 7.5-4.5 1.5 0 2.5 0 3.5 0z" opacity="0.8"/>
                <path d="M12 4.5C8.5 3.5 5 3.5 1 4.5c1 1.5 2.5 2.5 4.5 2.5 2-0.5 4-1.5 6.5-2.5z"/>
              </svg>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#D8B16F] font-semibold">
                THE ANNUAL GALA
              </span>
            </div>

            <h2 className="font-serif-luxury font-medium text-[#F5D7A0] text-3xl sm:text-4xl tracking-tight leading-[1.05] mb-4">
              South Asian <br />
              <span className="italic font-normal">Fashion Awards</span>
            </h2>

            <p className="font-sans font-light text-[#E9D9CC]/70 text-sm sm:text-[15px] leading-relaxed max-w-[420px] mb-6">
              The premier international platform dedicated to honouring cultural craftsmanship, haute couture innovation, and the visionaries defining contemporary South Asian design.
            </p>

            {/* Quick Event Metas */}
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-sans text-[#E9D9CC]/80 mb-6">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#D8B16F] shrink-0" />
                <span>November 14, 2026 — Annual Black Tie Gala</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8B16F] shrink-0" />
                <span>The Royal Albert Hall, Kensington, London</span>
              </div>
            </div>

            {/* Social Channels with Custom SVGs */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#DDB578]/25 bg-[#280B16]/40 flex items-center justify-center text-[#D8B16F] hover:text-[#FFF8F0] hover:border-[#DDB578] hover:bg-[#DDB578]/15 hover:scale-105 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#twitter"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-full border border-[#DDB578]/25 bg-[#280B16]/40 flex items-center justify-center text-[#D8B16F] hover:text-[#FFF8F0] hover:border-[#DDB578] hover:bg-[#DDB578]/15 hover:scale-105 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-[#DDB578]/25 bg-[#280B16]/40 flex items-center justify-center text-[#D8B16F] hover:text-[#FFF8F0] hover:border-[#DDB578] hover:bg-[#DDB578]/15 hover:scale-105 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-[#DDB578]/25 bg-[#280B16]/40 flex items-center justify-center text-[#D8B16F] hover:text-[#FFF8F0] hover:border-[#DDB578] hover:bg-[#DDB578]/15 hover:scale-105 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 pt-2">
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col items-start text-left">
                <h4 className="font-serif-luxury text-[#F5D7A0] text-lg sm:text-xl font-medium tracking-wide mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-[#DDB578]/40">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5 font-sans font-light text-sm text-[#E9D9CC]/75">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-[#F5D7A0] transition-colors duration-200 inline-block py-0.5 hover:translate-x-1 transition-transform"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ================= BOTTOM BAR: Copyright & Legal ================= */}
        <div className="pt-8 border-t border-[#DDB578]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#E9D9CC]/50 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} South Asian Fashion Awards Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#privacy" className="hover:text-[#F5D7A0] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#F5D7A0] transition-colors">Terms of Entry</a>
            <a href="#cookies" className="hover:text-[#F5D7A0] transition-colors">Cookie Preferences</a>
            <a href="#accessibility" className="hover:text-[#F5D7A0] transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;

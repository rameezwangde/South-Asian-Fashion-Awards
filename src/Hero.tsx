import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { heroContent, HeroContent } from './content';

interface HeroProps {
  content?: HeroContent;
}

export const Hero: React.FC<HeroProps> = ({ content = heroContent }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants with graceful cubic-bezier easing
  const easeLuxury = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.85,
        ease: easeLuxury,
      },
    },
  };

  return (
    <section 
      aria-label="South Asian Fashion Awards Hero"
      className="relative w-full min-h-[100svh] lg:h-[900px] flex items-center justify-center overflow-hidden bg-[#18050e]"
    >
      {/* 
        Background Layer:
        Uses the exact supplied reference image containing:
        - Left: South Asian female model in rich embroidered couture with historic architectural arches
        - Center: Deep burgundy negative space
        - Right: Sculptural gold fashion trophy draped with silk crimson ribbon
      */}
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundPosition: 'center center',
        }}
        role="img"
        aria-label="South Asian Fashion Awards visual featuring haute couture model and golden trophy"
      />

      {/* 
        Subtle gradient overlays:
        - Mobile/Tablet readability vignette so text remains crisp over any responsive crop
        - Purely transparent at large desktop center to preserve the authentic artwork
      */}
      <div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#15030b]/80 via-transparent to-[#15030b]/40 md:bg-none" 
        aria-hidden="true"
      />
      {/* Very soft central text radial glow to guarantee optimal contrast without masking the background */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(20,3,9,0.45)_0%,rgba(20,3,9,0)_100%)]" 
        aria-hidden="true" 
      />

      {/* Central Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl lg:max-w-3xl flex flex-col items-center text-center mx-auto"
        >
          {/* Introductory Label with delicate gold laurel motifs */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            {/* Left Laurel leaf branch */}
            <svg 
              className="w-6 sm:w-8 h-4 text-[#DDB578]/80" 
              viewBox="0 0 36 16" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M34 8c-4.5 0-8.5-1.5-12-4.5 2 3.5 1.5 7.5-1 10.5 4-1 7.5-3 10-6 1 0 2 0 3 0z" opacity="0.6"/>
              <path d="M22 6c-3-2-6.5-3-10.5-3 1.5 2.5 1.5 5.5-.5 7.5 3-0.5 5.5-2 7.5-4.5 1.5 0 2.5 0 3.5 0z" opacity="0.8"/>
              <path d="M12 4.5C8.5 3.5 5 3.5 1 4.5c1 1.5 2.5 2.5 4.5 2.5 2-0.5 4-1.5 6.5-2.5z"/>
            </svg>

            <span className="text-[13px] sm:text-[15px] md:text-[17px] tracking-[0.32em] uppercase font-sans-clean font-medium text-[#E8C58E] select-none">
              {content.introLabel}
            </span>

            {/* Right Laurel leaf branch (mirrored) */}
            <svg 
              className="w-6 sm:w-8 h-4 text-[#DDB578]/80 -scale-x-100" 
              viewBox="0 0 36 16" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M34 8c-4.5 0-8.5-1.5-12-4.5 2 3.5 1.5 7.5-1 10.5 4-1 7.5-3 10-6 1 0 2 0 3 0z" opacity="0.6"/>
              <path d="M22 6c-3-2-6.5-3-10.5-3 1.5 2.5 1.5 5.5-.5 7.5 3-0.5 5.5-2 7.5-4.5 1.5 0 2.5 0 3.5 0z" opacity="0.8"/>
              <path d="M12 4.5C8.5 3.5 5 3.5 1 4.5c1 1.5 2.5 2.5 4.5 2.5 2-0.5 4-1.5 6.5-2.5z"/>
            </svg>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-serif-luxury font-medium text-[#E8C58E] text-[42px] sm:text-[58px] md:text-[72px] lg:text-[84px] xl:text-[88px] leading-[0.98] sm:leading-[1.02] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-5 sm:mb-6"
          >
            <span className="block">{content.headingPart1}</span>
            <span className="block italic font-normal tracking-normal">{content.headingPart2}</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p 
            variants={itemVariants}
            className="font-sans-clean font-light text-[#E9D9CC] text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed max-w-xl mx-auto tracking-wide text-balance mb-8 sm:mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            {content.subtitle}
          </motion.p>

          {/* Event Information Row */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-2 px-6 rounded-full border border-[#DDB578]/20 bg-[#280B16]/40 backdrop-blur-sm mb-9 sm:mb-11 text-xs sm:text-sm font-sans-clean text-[#E9D9CC]"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E8C58E] stroke-[1.6]" aria-hidden="true" />
              <span className="tracking-wide">{content.eventDate}</span>
            </div>

            <div className="hidden sm:block w-[1px] h-3.5 bg-[#DDB578]/30" aria-hidden="true" />

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E8C58E] stroke-[1.6]" aria-hidden="true" />
              <span className="tracking-wide">{content.eventVenue}</span>
            </div>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA - Get Tickets */}
            <a
              href={content.primaryCta.href}
              className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-9 py-4 rounded-full bg-[#DDB578] text-[#280B16] font-sans-clean font-semibold text-sm sm:text-[15px] tracking-wider transition-all duration-300 hover:bg-[#ebd09d] hover:shadow-[0_0_28px_rgba(221,181,120,0.45)] hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#DDB578] focus:ring-offset-2 focus:ring-offset-[#280B16]"
            >
              <span>{content.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA - Explore Awards */}
            <a
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 rounded-full border border-[#DDB578] text-[#E8C58E] font-sans-clean font-medium text-sm sm:text-[15px] tracking-wider transition-all duration-300 hover:bg-[#DDB578]/15 hover:border-[#ebd09d] hover:text-[#faeed8] hover:shadow-[0_0_20px_rgba(221,181,120,0.2)] focus:outline-none focus:ring-2 focus:ring-[#DDB578] focus:ring-offset-2 focus:ring-offset-[#280B16]"
            >
              <span>{content.secondaryCta.label}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


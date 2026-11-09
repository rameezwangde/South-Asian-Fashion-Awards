import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { nomineesBgData } from './nomineesBgData';

export interface HonoureesContent {
  introLabel: string;
  headingLine1: string;
  headingLine2: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export const defaultHonoureesContent: HonoureesContent = {
  introLabel: "THE PEOPLE BEHIND THE PRESTIGE",
  headingLine1: "The Faces of",
  headingLine2: "Excellence",
  subheading: "Where extraordinary talent meets timeless recognition.",
  description:
    "Celebrating the visionaries, trendsetters, and creative pioneers who are redefining South Asian fashion. From established icons to emerging talents, discover the individuals shaping the future of style.",
  ctaText: "Explore the Honourees",
  ctaHref: "#honourees",
};

interface HonoureesSectionProps {
  content?: HonoureesContent;
  className?: string;
}

export const HonoureesSection: React.FC<HonoureesSectionProps> = ({
  content = defaultHonoureesContent,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Sophisticated luxury easing
  const easeLuxury = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.75, ease: easeLuxury },
    },
  };

  const itemFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.6, ease: easeLuxury },
    },
  };

  return (
    <section
      aria-label="The Faces of Excellence — Honourees Showcase"
      className={`relative w-full min-h-[760px] md:min-h-[820px] lg:min-h-[880px] xl:min-h-[920px] overflow-hidden bg-[#faeee0] flex items-center ${className}`}
      style={{
        backgroundImage: `url(${nomineesBgData})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 
        High-priority background image layer:
        Guarantees instant, zero-flicker rendering across any browser session
      */}
      <img
        src={nomineesBgData}
        alt="Editorial portraits of South Asian couture honourees"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none -z-10"
        loading="eager"
      />

      {/* 
        Subtle gradient vignette on mobile/small screens:
        Ensures crisp readability on smaller screens without interfering with the right-side portraits
      */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_75%_80%_at_25%_50%,rgba(250,238,224,0.7)_0%,rgba(250,238,224,0)_75%)] md:bg-none"
        aria-hidden="true"
      />

      {/* Main Content Area: Placed strictly on the left ~48% negative space */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 py-20 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-[60%] lg:w-[48%] xl:w-[46%] flex flex-col items-start text-left"
        >
          {/* Introductory Label: THE PEOPLE BEHIND THE PRESTIGE + thin gold rule */}
          <motion.div
            variants={itemFade}
            className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5"
          >
            <span className="font-sans text-[13px] sm:text-[14px] lg:text-[15px] font-semibold tracking-[3.5px] uppercase text-[#6B142A]">
              {content.introLabel}
            </span>
            <div
              className="w-[60px] sm:w-[90px] h-[1px] bg-[#C89B55]"
              aria-hidden="true"
            />
          </motion.div>

          {/* Main Heading: The Faces of Excellence */}
          <motion.h2
            variants={itemFadeUp}
            className="font-serif-luxury font-medium text-[#3A0F1D] text-[44px] sm:text-[58px] md:text-[68px] lg:text-[76px] xl:text-[82px] leading-[1.0] tracking-[-1px] mb-4 sm:mb-5"
          >
            <span className="block">{content.headingLine1}</span>
            <span className="block italic font-normal">{content.headingLine2}</span>
          </motion.h2>

          {/* Subheading / Tagline */}
          <motion.p
            variants={itemFadeUp}
            className="font-serif-luxury italic text-[#722036] text-[19px] sm:text-[22px] lg:text-[24px] leading-[1.35] mb-5 sm:mb-6"
          >
            {content.subheading}
          </motion.p>

          {/* Supporting Description Paragraph */}
          <motion.p
            variants={itemFade}
            className="font-sans font-normal text-[#544B4A] text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-[1.68] max-w-[560px] mb-9 sm:mb-11"
          >
            {content.description}
          </motion.p>

          {/* Call-to-Action Button: Explore the Honourees → */}
          <motion.div variants={itemFadeUp}>
            <a
              href={content.ctaHref}
              className="group inline-flex items-center justify-center gap-3 bg-[#650C26] text-[#FFF8F0] font-sans font-medium text-base sm:text-[17px] lg:text-[18px] px-8 sm:px-10 py-4 rounded-full transition-all duration-300 ease-out hover:bg-[#7e0f30] hover:shadow-[0_8px_24px_rgba(101,12,38,0.28)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#8A1838] focus:ring-offset-2"
            >
              <span>{content.ctaText}</span>
              <ArrowRight
                className="w-5 h-5 text-[#FFF8F0] transition-transform duration-300 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoureesSection;


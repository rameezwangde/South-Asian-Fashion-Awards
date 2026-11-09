import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Gem, Sparkles, ArrowRight } from 'lucide-react';

export interface AboutContent {
  label: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  pillars: Array<{
    id: string;
    titleLine1: string;
    titleLine2: string;
    iconType: 'diamond' | 'lotus' | 'sparkles';
    color: string;
  }>;
  ctaText: string;
  ctaHref: string;
}

export const defaultAboutContent: AboutContent = {
  label: "ABOUT THE AWARDS",
  headingLine1: "A Celebration of",
  headingLine2: "South Asian Fashion",
  description:
    "The South Asian Fashion Awards honour the region's finest talent, creativity and craftsmanship across fashion, textiles and design.",
  pillars: [
    {
      id: "excellence",
      titleLine1: "Recognising",
      titleLine2: "Excellence",
      iconType: "diamond",
      color: "#B67D30",
    },
    {
      id: "heritage",
      titleLine1: "Preserving",
      titleLine2: "Heritage",
      iconType: "lotus",
      color: "#8A1838",
    },
    {
      id: "talent",
      titleLine1: "Empowering",
      titleLine2: "New Talent",
      iconType: "sparkles",
      color: "#B67D30",
    },
  ],
  ctaText: "Our Story",
  ctaHref: "#about",
};

interface AboutAwardsSectionProps {
  content?: AboutContent;
}

export const AboutAwardsSection: React.FC<AboutAwardsSectionProps> = ({
  content = defaultAboutContent,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Refined ease for high-end luxury feel
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
      transition: { duration: shouldReduceMotion ? 0.2 : 0.7, ease: easeLuxury },
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
      aria-label="About The South Asian Fashion Awards"
      className="about-awards relative w-full bg-[#fef5ec] overflow-hidden"
    >
      {/* 
        DESKTOP & TABLET VIEWPORT (>= 768px):
        Uses the exact supplied background image containing the runway model, 
        Mughal gold arch, silk drapes, and corner paisleys, with HTML typography 
        positioned naturally in the available negative space on the right.
      */}
      <div 
        className="hidden md:flex relative w-full min-h-[720px] lg:min-h-[760px] xl:min-h-[800px] items-center bg-no-repeat bg-cover bg-left md:bg-center"
        style={{
          backgroundImage: "url('/about-awards-bg.webp')",
          backgroundPosition: 'left center',
        }}
      >
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 py-16 flex justify-end">
          {/* Content container occupying the right ~54% of the section (starting at ~46%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full md:w-[56%] lg:w-[53%] xl:w-[50%] flex flex-col items-start text-left pl-2 md:pl-6 lg:pl-10"
          >
            {/* Section Label + Horizontal Gold Line */}
            <motion.div variants={itemFade} className="flex items-center gap-4 sm:gap-5 mb-4 lg:mb-5">
              <span className="font-sans text-[15px] lg:text-[16px] font-semibold tracking-[3px] uppercase text-[#521426]">
                {content.label}
              </span>
              <div
                className="w-[90px] sm:w-[110px] h-[1px] bg-[#C79546]"
                aria-hidden="true"
              />
            </motion.div>

            {/* Main Heading: Exactly 2 lines on large desktop */}
            <motion.h2
              variants={itemFadeUp}
              className="font-serif-luxury font-medium text-[#3C101D] text-[42px] md:text-[54px] lg:text-[64px] xl:text-[70px] leading-[1.05] tracking-[-1px] mb-5 sm:mb-6"
            >
              <span className="block">{content.headingLine1}</span>
              <span className="block">{content.headingLine2}</span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              variants={itemFade}
              className="font-sans text-[#625C5B] text-base md:text-[18px] lg:text-[19.5px] leading-[1.65] max-w-[680px] mb-8 lg:mb-10 font-normal"
            >
              {content.description}
            </motion.p>

            {/* Three Award Pillars in one horizontal row */}
            <motion.div
              variants={itemFadeUp}
              className="w-full max-w-[640px] grid grid-cols-3 items-center mb-9 lg:mb-11"
            >
              {content.pillars.map((pillar, index) => {
                const isLast = index === content.pillars.length - 1;

                return (
                  <div
                    key={pillar.id}
                    className="relative flex flex-col items-center justify-center text-center px-1 sm:px-3"
                  >
                    {/* Consistent Line Icon */}
                    <div className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center mb-3.5">
                      {pillar.iconType === 'diamond' && (
                        <Gem
                          className="w-10 h-10 lg:w-11 lg:h-11 stroke-[1.5]"
                          style={{ color: pillar.color }}
                          aria-hidden="true"
                        />
                      )}

                      {pillar.iconType === 'lotus' && (
                        <svg
                          className="w-10 h-10 lg:w-11 lg:h-11"
                          viewBox="0 0 48 48"
                          fill="none"
                          stroke={pillar.color}
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M24 8c-3 6-5 14 0 24 5-10 3-18 0-24z" />
                          <path d="M21 16C15 20 13 26 15 32c4-2 7-4 9-6" />
                          <path d="M27 16c6 4 8 10 6 16-4-2-7-4-9-6" />
                          <path d="M15 25C9 28 6 33 8 38c6 0 11-3 14-7" />
                          <path d="M33 25c6 3 9 8 7 13-6 0-11-3-14-7" />
                          <path d="M18 38c3 2 9 2 12 0" />
                        </svg>
                      )}

                      {pillar.iconType === 'sparkles' && (
                        <Sparkles
                          className="w-10 h-10 lg:w-11 lg:h-11 stroke-[1.5]"
                          style={{ color: pillar.color }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Pillar Label */}
                    <p className="font-sans text-[#32151B] font-medium text-sm md:text-[17px] lg:text-[19px] leading-[1.3] text-center">
                      <span className="block">{pillar.titleLine1}</span>
                      <span className="block">{pillar.titleLine2}</span>
                    </p>

                    {/* Thin vertical gold divider */}
                    {!isLast && (
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[75px] lg:h-[95px] bg-[#D9C2A7]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Call-to-Action Button */}
            <motion.div variants={itemFadeUp}>
              <a
                href={content.ctaHref}
                className="group inline-flex items-center justify-center gap-3 bg-[#650C26] text-[#FFF8F0] font-sans font-medium text-base lg:text-[18px] px-10 py-4 rounded-full transition-all duration-250 ease-out hover:bg-[#780f2e] hover:shadow-[0_6px_20px_rgba(101,12,38,0.22)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#8A1838] focus:ring-offset-2"
              >
                <span>{content.ctaText}</span>
                <ArrowRight
                  className="w-5 h-5 text-[#FFF8F0] transition-transform duration-250 ease-out group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 
        MOBILE VIEWPORT (< 768px):
        Maintains natural landscape aspect ratio of background image to prevent
        cropping the model or arch, flowing seamlessly into the cream content below.
      */}
      <div className="flex md:hidden flex-col w-full bg-[#fef5ec]">
        {/* Preserved Full Natural Background */}
        <div className="w-full relative overflow-hidden bg-[#fef5ec]">
          <img
            src="/about-awards-bg.webp"
            alt="South Asian Fashion Awards runway model in embroidered couture lehenga under a traditional Mughal arch"
            className="w-full h-auto block object-cover"
          />
        </div>

        {/* Content Section Underneath */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full px-6 py-10 flex flex-col items-start text-left"
        >
          {/* Label */}
          <motion.div variants={itemFade} className="flex items-center gap-3 mb-3">
            <span className="font-sans text-[14px] font-semibold tracking-[3px] uppercase text-[#521426]">
              {content.label}
            </span>
            <div className="w-[70px] h-[1px] bg-[#C79546]" aria-hidden="true" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemFadeUp}
            className="font-serif-luxury font-medium text-[#3C101D] text-[36px] leading-[1.08] tracking-tight mb-4"
          >
            <span className="block">{content.headingLine1}</span>
            <span className="block">{content.headingLine2}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemFade}
            className="font-sans text-[#625C5B] text-base leading-relaxed mb-8 font-normal"
          >
            {content.description}
          </motion.p>

          {/* Pillars */}
          <motion.div
            variants={itemFadeUp}
            className="w-full grid grid-cols-3 items-center mb-8"
          >
            {content.pillars.map((pillar, index) => {
              const isLast = index === content.pillars.length - 1;

              return (
                <div
                  key={pillar.id}
                  className="relative flex flex-col items-center justify-center text-center px-1"
                >
                  <div className="w-9 h-9 flex items-center justify-center mb-2">
                    {pillar.iconType === 'diamond' && (
                      <Gem className="w-8 h-8 stroke-[1.5]" style={{ color: pillar.color }} />
                    )}
                    {pillar.iconType === 'lotus' && (
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke={pillar.color}
                        strokeWidth="1.6"
                      >
                        <path d="M24 8c-3 6-5 14 0 24 5-10 3-18 0-24z" />
                        <path d="M21 16C15 20 13 26 15 32c4-2 7-4 9-6" />
                        <path d="M27 16c6 4 8 10 6 16-4-2-7-4-9-6" />
                        <path d="M15 25C9 28 6 33 8 38c6 0 11-3 14-7" />
                        <path d="M33 25c6 3 9 8 7 13-6 0-11-3-14-7" />
                        <path d="M18 38c3 2 9 2 12 0" />
                      </svg>
                    )}
                    {pillar.iconType === 'sparkles' && (
                      <Sparkles className="w-8 h-8 stroke-[1.5]" style={{ color: pillar.color }} />
                    )}
                  </div>
                  <p className="font-sans text-[#32151B] font-medium text-xs leading-snug">
                    <span className="block">{pillar.titleLine1}</span>
                    <span className="block">{pillar.titleLine2}</span>
                  </p>
                  {!isLast && (
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55px] bg-[#D9C2A7]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemFadeUp} className="w-full">
            <a
              href={content.ctaHref}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#650C26] text-[#FFF8F0] font-sans font-medium text-base px-8 py-3.5 rounded-full w-full sm:w-auto"
            >
              <span>{content.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#FFF8F0]" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAwardsSection;

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  defaultAwardCategoriesContent,
  AwardCategoriesContent,
} from './awardCategoriesContent';

interface AwardCategoriesSectionProps {
  content?: AwardCategoriesContent;
}

export const AwardCategoriesSection: React.FC<AwardCategoriesSectionProps> = ({
  content = defaultAwardCategoriesContent,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Luxury easing curve
  const easeLuxury = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
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

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.65, ease: easeLuxury },
    },
  };

  return (
    <section
      aria-label="South Asian Fashion Awards Categories"
      className="relative isolate w-full min-h-[850px] lg:min-h-[920px] bg-[#330713] overflow-hidden flex items-center py-20 lg:py-24"
    >
      {/* 
        Single Cinematic Background Layer:
        Features the rich burgundy backdrop, embroidered drape on the left, 
        and the golden arches + circular platform on the right.
      */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center -z-10 pointer-events-none select-none"
        style={{
          backgroundImage: "url('/award-categories-bg.webp')",
          backgroundPosition: 'center center',
        }}
        role="img"
        aria-label="Award ceremony stage with golden arches and embroidered silk drapery"
      />

      {/* 
        Subtle gradient vignette for responsive legibility:
        Soft fade on the left content zone to guarantee flawless readability on smaller screens, 
        while keeping the right golden architectural stage completely unobstructed.
      */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_70%_80%_at_25%_50%,rgba(30,3,11,0.55)_0%,rgba(30,3,11,0)_80%)]"
        aria-hidden="true"
      />

      {/* Main Content Container: max-width 1440px with generous margins */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full lg:w-[68%] xl:w-[65%] flex flex-col items-start text-left"
        >
          {/* Introductory Label: THE HONOURS + gold rule */}
          <motion.div
            variants={itemFadeUp}
            className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5"
          >
            <span className="font-sans text-[14px] sm:text-[15px] font-semibold tracking-[4px] uppercase text-[#D8B16F]">
              {content.introLabel}
            </span>
            <div
              className="w-[60px] sm:w-[80px] h-[1px] bg-[#D8B16F]/70"
              aria-hidden="true"
            />
          </motion.div>

          {/* Main Heading: Left-aligned in Cormorant Garamond */}
          <motion.h2
            variants={itemFadeUp}
            className="font-serif-luxury font-medium text-[#F5D7A0] text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[82px] leading-[0.98] sm:leading-[1.02] tracking-[-1px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-5 sm:mb-6"
          >
            <span className="block">{content.headingLine1}</span>
            <span className="block">{content.headingLine2}</span>
          </motion.h2>

          {/* Supporting Description */}
          <motion.p
            variants={itemFadeUp}
            className="font-sans font-light text-[#E5D3C9] text-base sm:text-lg lg:text-[18px] leading-[1.7] max-w-[650px] mb-10 sm:mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          >
            {content.description}
          </motion.p>

          {/* 
            Award Categories — 2-column by 3-row editorial arrangement
            Dark translucent burgundy background, thin champagne-gold border, minimal diagonal arrow
          */}
          <motion.div
            variants={containerVariants}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-4.5 mb-10 sm:mb-12"
          >
            {content.categories.map((cat) => (
              <motion.a
                key={cat.id}
                href={cat.href}
                variants={cardVariants}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[14px] sm:rounded-[16px] bg-[#300514]/55 hover:bg-[#3d071a]/75 border border-[#DDB578]/30 hover:border-[#F5D7A0]/70 backdrop-blur-[3px] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#DDB578]"
              >
                {/* Card Header: Two-digit number + minimal diagonal arrow */}
                <div className="flex items-center justify-between w-full mb-3.5">
                  <span className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#D8B16F]/85">
                    {cat.number}
                  </span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#D8B16F] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F5D7A0]">
                    <ArrowUpRight className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
                  </div>
                </div>

                {/* Card Content: Title + One-line description */}
                <div>
                  <h3 className="font-serif-luxury font-medium text-[#FFF8F0] text-[24px] sm:text-[27px] lg:text-[29px] leading-[1.15] mb-2 tracking-normal group-hover:text-[#F5D7A0] transition-colors duration-250">
                    {cat.title}
                  </h3>
                  <p className="font-sans font-light text-[#E5D3C9]/85 text-[13px] sm:text-[14px] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Explore All Categories CTA */}
          <motion.div variants={itemFadeUp}>
            <a
              href={content.ctaHref}
              className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#DDB578] text-[#300918] font-sans font-semibold text-[15px] sm:text-[16px] tracking-wide transition-all duration-300 ease-out hover:bg-[#ebd09d] hover:shadow-[0_0_24px_rgba(221,181,120,0.4)] hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#DDB578] focus:ring-offset-2 focus:ring-offset-[#300918]"
            >
              <span>{content.ctaText}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardCategoriesSection;


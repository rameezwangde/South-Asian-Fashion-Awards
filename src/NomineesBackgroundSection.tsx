import React from 'react';
import { nomineesBgData } from './nomineesBgData';

interface NomineesBackgroundSectionProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * NomineesBackgroundSection
 * Pure background-only component with zero text, zero buttons, and zero UI cards.
 * Displays the full-width high-resolution artwork:
 * - Left: spacious, clean warm ivory/champagne negative space.
 * - Right: three South Asian couture portraits in arched golden frames.
 * - Corners: rich burgundy silk drapery and gold heritage linework.
 */
export const NomineesBackgroundSection: React.FC<NomineesBackgroundSectionProps> = ({
  children,
  className = '',
}) => {
  return (
    <section
      aria-label="Nominees and Honourees Editorial Showcase"
      className={`relative w-full min-h-[680px] md:min-h-[750px] lg:min-h-[850px] xl:min-h-[900px] overflow-hidden bg-[#faeee0] flex items-center ${className}`}
      style={{
        backgroundImage: `url(${nomineesBgData})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 
        Direct HTML <img> fallback layer to guarantee instant rendering 
        regardless of CSS background caching or bundle paths
      */}
      <img
        src={nomineesBgData}
        alt="Nominees and Honourees editorial portrait collage"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none -z-10"
        loading="eager"
      />

      {/* Optional slot for future left-aligned text content */}
      {children && (
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 py-16">
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
            {children}
          </div>
        </div>
      )}
    </section>
  );
};

export default NomineesBackgroundSection;

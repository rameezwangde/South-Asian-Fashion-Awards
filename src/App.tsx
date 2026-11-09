import React from 'react';
import { Hero } from './Hero';
import { AboutAwardsSection } from './AboutAwardsSection';
import { AwardCategoriesSection } from './AwardCategoriesSection';
import { HonoureesSection } from './HonoureesSection';
import { FooterSection } from './FooterSection';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#18050e]">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Editorial About The Awards Section */}
      <AboutAwardsSection />

      {/* 3. Award Categories Section */}
      <AwardCategoriesSection />

      {/* 4. The Faces of Excellence (Honourees Section) */}
      <HonoureesSection />

      {/* 5. Luxury Gala Footer */}
      <FooterSection />
    </div>
  );
}

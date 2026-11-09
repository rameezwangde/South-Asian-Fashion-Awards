export interface HeroContent {
  introLabel: string;
  headingPart1: string;
  headingPart2: string;
  subtitle: string;
  eventDate: string;
  eventVenue: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export const heroContent: HeroContent = {
  introLabel: "THE ANNUAL",
  headingPart1: "South Asian",
  headingPart2: "Fashion Awards",
  subtitle: "Celebrating Style, Heritage & Innovation in South Asian Fashion",
  eventDate: "November 14, 2026",
  eventVenue: "The Royal Albert Hall, London",
  primaryCta: {
    label: "Get Tickets",
    href: "#tickets",
  },
  secondaryCta: {
    label: "Explore Awards",
    href: "#awards",
  },
};


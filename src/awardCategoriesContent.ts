export interface AwardCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface AwardCategoriesContent {
  introLabel: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  categories: AwardCategory[];
}

export const defaultAwardCategoriesContent: AwardCategoriesContent = {
  introLabel: "THE HONOURS",
  headingLine1: "Celebrating the Art",
  headingLine2: "of Excellence",
  description:
    "Honouring the visionaries, designers and creative talents shaping the future of South Asian fashion, while celebrating the heritage that inspires them.",
  ctaText: "Explore All Categories",
  ctaHref: "#categories",
  categories: [
    {
      id: "designer-of-the-year",
      number: "01",
      title: "Designer of the Year",
      description: "Honouring exceptional creative vision and design.",
      href: "#designer-of-the-year",
    },
    {
      id: "emerging-designer",
      number: "02",
      title: "Emerging Designer",
      description: "Recognising the next generation of fashion talent.",
      href: "#emerging-designer",
    },
    {
      id: "couture-excellence",
      number: "03",
      title: "Couture Excellence",
      description: "Celebrating craftsmanship in luxury fashion.",
      href: "#couture-excellence",
    },
    {
      id: "heritage-textiles",
      number: "04",
      title: "Heritage & Textiles",
      description: "Preserving the artistry of traditional fabrics.",
      href: "#heritage-textiles",
    },
    {
      id: "fashion-innovator",
      number: "05",
      title: "Fashion Innovator",
      description: "Recognising originality and contemporary innovation.",
      href: "#fashion-innovator",
    },
    {
      id: "fashion-icon",
      number: "06",
      title: "Fashion Icon",
      description: "Celebrating influential voices in style.",
      href: "#fashion-icon",
    },
  ],
};


export type Property = {
  slug: string;
  name: string;
  type: "house" | "rv-site";
  availability: "available" | "limited";
  beds: number;
  guests: number;
  bathrooms: number;
  description: string;
  amenities: string[];
  photos: string[];
  hospitableWidgetId: string;
  faqs: { question: string; answer: string }[];
};
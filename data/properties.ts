import {Property} from "@/types/property";

export const properties: Property[] = [
  {
    slug: "ranch-house",
    name: "Kuma Tako Ranch",
    type: "house",
    availability: "available",
    beds: 3,
    guests: 8,
    bathrooms: 3,
    description:
      "Tucked among the pines with sweeping mountain views, Kuma Tako Ranch offers a peaceful escape just minutes from Mt. Rainier. The 4-bedroom house comfortably sleeps up to 8 guests, with a full kitchen, cozy living spaces, and a private porch perfect for morning coffee.",
    amenities: ["wifi", "fire-pit", "free-parking", "air-conditioning", "pet-friendly", "washing-machine", "kitchen", "tv"],
    photos: [
      "kuma-tako-ranch/ranch-house/exterior",
      "kuma-tako-ranch/ranch-house/living-room",
      "kuma-tako-ranch/ranch-house/kitchen",
    ],
    hospitableWidgetId: "widget-id-house",
    faqs: [
      { question: "What time is check-in?", answer: "Check-in is from 3pm, though early check-in may be available on request." },
      { question: "Are pets allowed?", answer: "Yes, pets are welcome with prior notice." },
      { question: "Is there parking on-site?", answer: "Yes, free parking is available directly on the property." },
    ],
  },
  {
    slug: "rv-site-2",
    name: "RV Site 2",
    type: "rv-site",
    availability: "limited",
    beds: 0,
    guests: 4,
    bathrooms: 0,
    description:
      "RV site with electric and water hookups, set among the pines with easy access to the main ranch grounds.",
    amenities: ["fire-pit", "full-hookups"],
    photos: [
      "kuma-tako-ranch/rv-site-2/hero",
      "kuma-tako-ranch/rv-site-2/view",
    ],
    hospitableWidgetId: "widget-id-rv2",
    faqs: [
      { question: "What's the max RV length?", answer: "60ft max." },
      { question: "Is there a sewer hookup?", answer: "No, but a dump station is available on-site." },
    ],
  },
   {
    slug: "rv-site-3",
    name: "RV Site 3",
    type: "rv-site",
    availability: "available",
    beds: 0,
    guests: 4,
    bathrooms: 0,
    description:
      "RV site with electric and water hookups, set among the pines with easy access to the main ranch grounds.",
    amenities: ["fire-pit", "full-hookups"],
    photos: [
      "kuma-tako-ranch/rv-site-3/hero",
      "kuma-tako-ranch/rv-site-3/view",
    ],
    hospitableWidgetId: "widget-id-rv3",
    faqs: [
      { question: "What's the max RV length?", answer: "30ft max." },
      { question: "Is there a sewer hookup?", answer: "No, but a dump station is available on-site." },
    ],
  },
     {
    slug: "rv-site-4",
    name: "RV Site 4",
    type: "rv-site",
    availability: "available",
    beds: 0,
    guests: 4,
    bathrooms: 0,
    description:
      "RV site with electric and water hookups, set among the pines with easy access to the main ranch grounds.",
    amenities: ["fire-pit", "full-hookups"],
    photos: [
      "kuma-tako-ranch/rv-site-4/hero",
      "kuma-tako-ranch/rv-site-4/view",
    ],
    hospitableWidgetId: "widget-id-rv4",
    faqs: [
      { question: "What's the max RV length?", answer: "30ft max." },
      { question: "Is there a sewer hookup?", answer: "No, but a dump station is available on-site." },
    ],
  },
  // Add rv-site-3, rv-site-4, etc. following the same shape
];
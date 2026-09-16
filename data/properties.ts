import type { Property } from "@/types/property";

/**
 * Shared information for all RV sites.
 *
 * If all RV sites are genuinely identical,
 * keep the common information here.
 */
export const rvSiteDefaults: Omit<Property, "slug" | "name" | "photos" | "hospitableWidgetId"> = {
  type: "rv-site" as const,
  availability: "available" as const,
  guests: 6,
  beds: 0,
  bathrooms: 0,
  description: "A peaceful RV site close to Mount Rainier, set among the trees with easy access to the surrounding ranch grounds.",
  amenities: [
    {
      name: "Free Parking",
      icon: "free-parking",
    },
    {
      name: "Pet Friendly",
      icon: "pet-friendly",
    },
    {
      name: "Water Hook Up",
      icon: "droplet",
    },
    {
      name: "Electric Hook Up",
      icon: "plug-zap",
    },
    {
      name: "Trash Bins",
      icon: "trash",
    },
  ],
  // hospitableWidgetId: "",
  rigSuitability: {
    maxLength: "65 feet included any tow vehicle",
    siteType: "Back-in",
    surfaceType: "Loose gravel",
    surfaceLevelness: "Flat",
    backIn: true,
    slideouts: true,

    allowedRigs: [
      "Travel trailers",
      "Fifth wheels",
      "Toy haulers",
      "Pop-up campers",
      "Class A RVs",
      "Class B RVs",
      "Class C RVs",
      "Campervans",
      "Truck campers",
      "Rooftop tents",
      "Cars",
    ],
  },
  photoGallery: [
    { src: "kuma tako ranch/RV/rv5_tmqgoc", alt: "RV site with trees and mountain view" },
    { src: "kuma tako ranch/RV/rv7_yfwerw", alt: "RV site with picnic table and fire pit" },
    { src: "kuma tako ranch/RV/rv10_jszi8q", alt: "RV site with gravel surface and hookups" },
  ],

  campsiteDetails: {
    campfiresAllowed: true,

    campfireDetails:
      "Bring your own fire pit. Campfires are dependent on local burn bans.",

    petsAllowed: true,

    toiletAvailable: false,

    toiletDetails:
      "There is no toilet on-site. Campers must bring their own camp toilet.",

    binsAvailable: true,

    binDetails:
      "Trash bins are available under the shed awning.",
  },

  bookingDetails: {
    checkIn: "2:00 PM - 10:00 PM",
    checkOut: "Before 12:00 PM",
    arrivalInstructions: "Head straight to your site.",
    cancellationPolicy: "Strict",
    minimumNights: 1,
    bookingWindow: "12 months out",
    maxVehicles: 1,
    parkingAtListing: true,
    wheelchairAccessible: false,
    twoWheelDriveAccessible: true,
  },

 faqs: [
  {
    question: "How big of an RV can I bring?",
    answer:
      "Vehicles and rigs under 65 feet are allowed.",
  },
  {
    question: "What types of RVs are allowed?",
    answer:
      "Travel trailers, fifth wheels, toy haulers, pop-up campers, Class A, B and C RVs, campervans, truck campers, rooftop tents and cars are allowed.",
  },
  {
    question: "Is the site back-in?",
    answer:
      "Yes. The site is a back-in site and accommodates slideouts.",
  },
  {
    question: "What type of surface is the site?",
    answer:
      "The site has a flat, loose-gravel surface.",
  },
  {
    question: "Is electricity and water available?",
    answer:
      "Yes. 20, 30 and 50 amp electricity and water are available.",
  },
  {
    question: "Is there a dump station?",
    answer:
      "No. There is no dump station at this time. Gray water may be drained into the grass.",
  },
  {
    question: "Are campfires allowed?",
    answer:
      "Yes. Bring your own fire pit. Campfires are dependent on local burn bans.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Yes, pets are allowed.",
  },
  {
    question: "Is there a toilet?",
    answer:
      "No. Campers must bring their own camp toilet.",
  },
  {
    question: "What time is check-in?",
    answer:
      "Check-in is from 2:00 PM to 10:00 PM.",
  },
  {
    question: "What time is check-out?",
    answer:
      "Check-out is before 12:00 PM.",
  },
  {
    question: "What are the arrival instructions?",
    answer:
      "Head straight to your site.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations are subject to a strict cancellation policy.",
  },
  {
    question: "Is there a minimum stay?",
    answer:
      "Yes. A minimum of 1 night is required.",
  },
  {
    question: "How far in advance can I book?",
    answer:
      "Bookings can be made up to 12 months in advance.",
  },
  {
    question: "How many vehicles are allowed per site?",
    answer:
      "A maximum of 1 vehicle is allowed per site.",
  },
  {
    question: "Is parking available at the site?",
    answer:
      "Yes. Parking is available directly at the site.",
  },
  {
    question: "Is the site wheelchair accessible?",
    answer:
      "No. The site is not currently wheelchair accessible.",
  },
  {
    question: "Do I need four-wheel drive to access the site?",
    answer:
      "No. The site is accessible with a standard two-wheel drive vehicle.",
  },
],
};

/**
 * --------------------------------------------------
 * HOUSE
 * --------------------------------------------------
 */
export const houseProperty: Property = {
  slug: "ranch-house",

  name: "Kuma Tako Ranch House",

  type: "house",

  availability: "available",

  bedrooms: 4,
  beds: 6,
  guests: 12,
  bathrooms: 3,

  description:
    "Tucked among the pines with sweeping mountain views, Kuma Tako Ranch offers a peaceful escape just minutes from Mt. Rainier. The 4-bedroom house comfortably sleeps up to 12 guests, with a full kitchen, cozy living spaces, and a private porch perfect for morning coffee. Whether you're planning a family gathering or a quiet mountain retreat, this house has everything you need to feel right at home.",

  highlights: [
    "21-acre private mountain estate",
    "15 minutes from Mount Rainier National Park",
    "Hot tub with mountain views",
    "Peloton gym",
    "Pool table and game room",
    "Surround sound throughout the home",
    "Forest, pasture, creek and pond",
    "Outdoor playground",
    "Large decks and outdoor entertaining areas",
  ],

  location: {
    area: "Ashford, Washington",
    distanceToMtRainier:
      "Approximately 15 minutes from the Nisqually entrance of Mount Rainier National Park",
    acreage: "21 acres",
  },

  amenities: [
    {
      name: "WiFi",
      icon: "wifi",
    },
    {
      name: "Free Parking",
      icon: "free-parking",
    },
    {
      name: "Pet Friendly",
      icon: "pet-friendly",
    },
    {
      name: "Fire Pit",
      icon: "fire-pit",
    },
    {
      name: "Hot Tub",
      icon: "droplet",
    },
    {
      name: "TV",
      icon: "tv",
    },
    {
      name: "Washing Machine",
      icon: "washing-machine",
    },
    {
      name: "Dryer",
      icon: "washing-machine",
    },
    {
      name: "Air Condition",
      icon: "air-conditioning",
    },
    {
      name: "Fireplace",
      icon: "fire-pit",
    },
    {
      name: "Pool Table",
      icon: "pool-table",
    },
    {
      name: "Gym",
      icon: "dumbbell",
    },
    {
      name: "BBQ",
      icon: "hamburger",
    },
    {
      name: "Self Check In",
      icon: "door-open",
    },
  ],
photoGallery: [
    { src: "kuma tako ranch/House Images/kumaTakoHouseOutside-3_ehvhlf", alt: "Exterior view of Kuma Tako Ranch with mountain backdrop" },
    { src: "kuma tako ranch/House Images/kumaTakoHouseOutside-12_wado5m", alt: "Front porch of Kuma Tako Ranch with seating area" },
    { src: "kuma tako ranch/House Images/Inside/1-17_szsstw", alt: "Living room with fireplace and comfortable seating" },
    { src: "kuma tako ranch/House Images/Inside/1-28_iwuh5i", alt: "Dining area with large table and mountain views" },
    { src: "kuma tako ranch/House Images/Inside/1-23_yz804h", alt: "Kitchen with modern appliances and island" },
    { src: "kuma tako ranch/House Images/Inside/1-42_p2lx7w", alt: "Master bedroom with king-size bed and mountain view" },
    { src: "kuma tako ranch/House Images/Inside/1-66_wuvpmf", alt: "Game room with pool table and entertainment area" },
    { src: "kuma tako ranch/House Images/Inside/1-24_dzgg4j", alt: "Gym area with Peloton bike and workout equipment" },
  ],
  photos: [
    "kuma tako ranch/House Images/kumaTakoHouseOutside-3_ehvhlf",
    "kuma tako ranch/House Images/kumaTakoHouseOutside-12_wado5m",
    "kuma tako ranch/House Images/Inside/1-17_szsstw",
   
  ],

  hospitableWidgetId: "widget-id-house",

  faqs: [
    {
      question: "How many guests can the house accommodate?",
      answer:
        "The house sleeps up to 12 guests across four bedrooms and six beds.",
    },
    {
      question: "How close is the house to Mount Rainier?",
      answer:
        "The property is approximately 15 minutes from the Nisqually entrance of Mount Rainier National Park.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "Yes. Dogs are welcome for an additional fee.",
    },
    {
      question: "Is there a hot tub?",
      answer:
        "Yes. The property has a private hot tub with mountain views.",
    },
    {
      question: "Is there a gym?",
      answer:
        "Yes. The home has a private gym featuring a Peloton.",
    },
    {
      question: "Is there outdoor space?",
      answer:
        "Yes. Guests have access to the surrounding grassy areas, expansive decks, playground, pond, creek and outdoor spaces.",
    },
    {
      question: "Is there a fire pit?",
      answer:
        "Yes. A fire pit is available. Guests should bring their own firewood.",
    },
  ],
};

/**
 * --------------------------------------------------
 * RV SITES — canonical "info" entry
 * --------------------------------------------------
 * Used for the home page card and the shared description/
 * amenities/faqs block on /stay/rv-sites. Not a real
 * individually-bookable property on its own — it represents
 * the RV sites as a category.
 */
export const rvSiteInfo: Property = {
  ...rvSiteDefaults,

  slug: "rv-sites",

  name: "RV Sites",

  photos: [
    "kuma tako ranch/RV/rv9_xcf058",
    "kuma tako ranch/RV/rv2_fvqeiq",
    "kuma tako ranch/RV/rv10_jszi8q",
  ],

  hospitableWidgetId: "",
};

/**
 * --------------------------------------------------
 * RV SITES — individual sites
 * --------------------------------------------------
 * Lean list, only what differs per site: slug, name,
 * photos, and their own Hospitable widget for booking.
 * Everything else (amenities, description, faqs, etc.)
 * lives in rvSiteDefaults / rvSiteInfo since it's shared.
 */
export const rvSites: Array<Pick<Property, "slug" | "name" | "photos" | "hospitableWidgetId">> = [
  {
    slug: "animal-tracks",

    name: "Animal Tracks",

    photos: [
      "kuma tako ranch/RV/animal_tracks_bdwuvs",
      "kuma tako ranch/RV/rv11_o5ctsl",
    ],

    hospitableWidgetId: "widget-id-rv2",
  },

  {
    slug: "bear-site",

    name: "Bear Site",

    photos: [
      "kuma tako ranch/RV/bear_site_ma4a0y",
      "kuma tako ranch/RV/rv11_o5ctsl",
    ],

    hospitableWidgetId: "widget-id-bear",
  },

  {
    slug: "elk-crossing",

    name: "Elk Crossing",

    photos: [
      "kuma tako ranch/RV/elks_crossing_rs8dbq",
      "kuma tako ranch/RV/rv11_o5ctsl",
    ],

    hospitableWidgetId: "widget-id-elk",
  },

  {
    slug: "octopus-site",

    name: "Octopus Site",

    photos: [
      "kuma tako ranch/RV/elks_crossing_rs8dbq",
      "kuma tako ranch/RV/rv11_o5ctsl",
    ],

    hospitableWidgetId: "widget-id-octopus",
  },
];

/**
 * Home page cards — one per bookable "thing": the house,
 * and RV sites as a single category card.
 */
export const properties: Property[] = [houseProperty, rvSiteInfo];
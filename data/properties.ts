import type { Property } from "@/types/property";
import type { IconName } from "@/lib/icons";

/**
 * Shared information for all RV sites.
 *
 * If all RV sites are genuinely identical,
 * keep the common information here.
 */
const rvSiteDefaults: Omit<Property, "slug" | "name" | "photos" | "hospitableWidgetId"> = {
  type: "rv-site" as const,
  availability: "available" as const,
  guests: 6,
  beds: 0,
  bathrooms: 0,
  description:  "A peaceful RV site close to Mount Rainier, set among the trees with easy access to the surrounding ranch grounds.",
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
    name:"Water Hook Up",
    icon:"droplet",
  },
    {
    name:"Electric Hook Up",
    icon:"droplet",
  },
    {
    name:"Trash Bins",
    icon:"droplet",
  },
],
  hospitableWidgetId: "",
  rigSuitability: {
    maxLength: "65 feet",
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
  ],
};

/**
 * Properties
 */
export const properties: Property[] = [
  /*
   * --------------------------------------------------
   * RANCH HOUSE
   * --------------------------------------------------
   */

  {
    slug: "ranch-house",

    name: "Kuma Tako Ranch",

    type: "house",

    availability: "available",

    bedrooms: 4,
    beds: 6,
    guests: 12,
    bathrooms: 3,

    description:
      "Set on 21 acres of private forest and pasture, the home sleeps up to 12 guests. ",

    highlights: [
      "21-acre private mountain estate",
      "15 minutes from Mount Rainier National Park",
      "Hot tub with mountain views",
      "Peloton gym",
      "Pool table and game room",
      "Surround sound throughout the home",
      "Forest, pasture, creek and pond",
      "Equestrian-friendly",
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
    name:"Hot Tub",
    icon:"droplet",
  },
   {
    name:"TV",
    icon:"tv",
  },
   {
    name:"Washing Machine",
    icon:"washing-machine",
  },
   {
    name:"Dryer",
    icon:"washing-machine",
  },
   {
    name:"Air Condition",
    icon:"air-conditioning",
  },
   {
    name:"Fireplace",
    icon:"fire-pit",
  },
   {
    name:"Pool Table",
    icon:"droplet",
  },
   {
    name:"Gym",
    icon:"droplet",
  },
   {
    name:"BBQ",
    icon:"droplet",
  },
   {
    name:"Self Check In",
    icon:"droplet",
  },
],
 photos: [
      "https://res.cloudinary.com/djjqsmlei/image/upload/v1786031077/Kuma%20Tako%20Ranch/House%20Images/Outside/1-7_p5fm6x.jpg",
      "kuma-tako-ranch/ranch-house/living-room",
      "kuma-tako-ranch/ranch-house/kitchen",
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
        question: "Are horses welcome?",
        answer:
          "Yes. Equestrian guests are welcome. Please ask about pasture access and accommodations for your horses.",
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
  },

  /*
   * --------------------------------------------------
   * RV SITES
   * --------------------------------------------------
   */

  {
    ...rvSiteDefaults,

    slug: "animal-tracks",

    name: "Animal Tracks",

    photos: [
      "https://res.cloudinary.com/djjqsmlei/image/upload/v1786555048/Kuma%20Tako%20Ranch/RV/AnimalTracks.jpg",
      "kuma-tako-ranch/animal-tracks/view",
    ],

    hospitableWidgetId: "widget-id-rv2",
  },

  {
    ...rvSiteDefaults,

    slug: "bear-site",

    name: "Bear Site",

    photos: [
      "https://res.cloudinary.com/djjqsmlei/image/upload/v1786555048/Kuma%20Tako%20Ranch/RV/BearSite.jpg",
      "kuma-tako-ranch/bear-site/view",
    ],

    hospitableWidgetId: "widget-id-bear",
  },

  {
    ...rvSiteDefaults,

    slug: "elk-crossing",

    name: "Elk Crossing",

    photos: [
      "https://res.cloudinary.com/djjqsmlei/image/upload/v1786555047/Kuma%20Tako%20Ranch/RV/ElkCrossing.jpg",
      "kuma-tako-ranch/elk-crossing/view",
    ],

    hospitableWidgetId: "widget-id-elk",
  },

  {
    ...rvSiteDefaults,

    slug: "octopus-site",

    name: "Octopus Site",

    photos: [
      "https://res.cloudinary.com/djjqsmlei/image/upload/v1786555047/Kuma%20Tako%20Ranch/RV/ElkCrossing.jpg",
      "https://res.cloudinary.com/djjqsmlei/image/upload/v1786555047/Kuma%20Tako%20Ranch/RV/ElkCrossing.jpg",
    ],

    hospitableWidgetId: "widget-id-octopus",
  },
];
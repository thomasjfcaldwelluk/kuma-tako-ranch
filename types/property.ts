import { IconName } from "@/lib/icons";

export type Amenity = {
  name: string;
  icon: IconName;
};

export type RigSuitability = {
  maxLength: string;
  siteType: string;
  surfaceType: string;
  surfaceLevelness: string;
  backIn: boolean;
  slideouts: boolean;
  allowedRigs: string[];
};

export type CampsiteDetails = {
  campfiresAllowed: boolean;
  campfireDetails: string;
  petsAllowed: boolean;
  toiletAvailable: boolean;
  toiletDetails: string;
  binsAvailable: boolean;
  binDetails: string;
};

export type BookingDetails = {
  checkIn: string;
  checkOut: string;
  arrivalInstructions: string;
  cancellationPolicy: string;
  minimumNights: number;
  bookingWindow: string;
  maxVehicles: number;
  parkingAtListing: boolean;
  wheelchairAccessible: boolean;
  twoWheelDriveAccessible: boolean;
};

export type PropertyLocation = {
  area: string;
  distanceToMtRainier: string;
  acreage: string;
};

export type Property = {
  slug: string;
  name: string;
  type: "house" | "rv-site";
  availability: "available" | "limited";
  bedrooms?: number;
  beds: number;
  guests: number;
  bathrooms: number;
  description: string;
  highlights?: string[];
  location?: PropertyLocation;
  amenities: Amenity[];
  photos: string[];
  hospitableWidgetId: string;
  rigSuitability?: RigSuitability;
  campsiteDetails?: CampsiteDetails;
  bookingDetails?: BookingDetails;
  faqs: { question: string; answer: string }[];
};
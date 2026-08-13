import type { IconName } from "@/lib/icons";

export type Amenity = {
  name: string;
  icon: IconName;
};

export type PropertyType = "House" | "RV-Site";

export type PropertyAvailability = "available" | "limited";

export type Property = {
  slug: string;
  name: string;
  type: PropertyType;

  availability: PropertyAvailability;

  guests: number;
  beds: number;
  bathrooms: number;

  description: string;

  amenities: Amenity[];

  photos: string[];
  
  hospitableWidgetId: string;

  faqs: {
    question: string;
    answer: string;
  }[];

  // House-specific
  bedrooms?: number;

  highlights?: string[];

  location?: {
    area: string;
    distanceToMtRainier?: string;
    acreage?: string;
  };

  // RV-specific
  rigSuitability?: {
    maxLength: string;
    siteType: string;
    surfaceType: string;
    surfaceLevelness: string;
    backIn: boolean;
    slideouts: boolean;
    allowedRigs: string[];
  };

  campsiteDetails?: {
    campfiresAllowed: boolean;
    campfireDetails?: string;
    petsAllowed: boolean;
    toiletAvailable: boolean;
    toiletDetails?: string;
    binsAvailable: boolean;
    binDetails?: string;
  };

  bookingDetails?: {
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
};
import { Activity } from "@/types/activity";

export const activities: Activity[] = [
  {
    slug: "hiking",
    name: "Hiking",
    tagline: "Trails near Mt. Rainier",
    photo: "Kuma Tako Ranch/things to do/hiking_lo5oso",
    style: "overlay",
    icon: "mountain",
  },
  {
    slug: "food",
    name: "Food & Drink",
    tagline: "Restaurants, coffee & local favorites",
    style: "icon",
    icon: "kitchen",
  },
  {
    slug: "lakes",
    name: "Lakes & Water",
    tagline: "Lakes, waterfalls & scenic spots",
    photo: "Kuma Tako Ranch/things to do/lakes_ay87l2",
    style: "standard",
    icon: "waves",
  },

  {
    slug: "fishing",
    name: "Fishing",
    tagline: "Lakes and rivers nearby",
    photo: "Kuma Tako Ranch/things to do/fishing_peds86",
    style: "overlay",
    icon: "fish",
  },
];
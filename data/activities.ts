import { Activity } from "@/types/activity";

export const activities: Activity[] = [
  {
    slug: "hiking",
    name: "Hiking",
    tagline: "Trails near Mt. Rainier",
    photo: "Kuma Tako Ranch/things to do/hiking_lo5oso",
    style: "overlay",
    icon: "mountain",
    href:'/things-to-do#hiking',
    id: "hiking",
  },
  {
    slug: "food",
    name: "Food & Drink",
    tagline: "Restaurants, coffee & local favorites",
    style: "icon",
    icon: "kitchen",
    href:'/things-to-do#food',
    id: "food",
  },
  {
    slug: "lakes",
    name: "Lakes & Water",
    tagline: "Lakes, waterfalls & scenic spots",
    photo: "Kuma Tako Ranch/things to do/lakes_ay87l2",
    style: "standard",
    icon: "waves",
    href:'/things-to-do#lakes',
    id: "lakes",
  },

  {
    slug: "fishing",
    name: "Fishing",
    tagline: "Lakes and rivers nearby",
    photo: "Kuma Tako Ranch/things to do/fishing_peds86",
    style: "overlay",
    icon: "fish",
    href:'/things-to-do#fishing',
    id: "fishing",
  },
];
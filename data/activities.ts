import { Activity } from "@/types/activity";

export const activities: Activity[] = [
  {
    slug: "hiking",

    name: "Hiking",

    tagline: "Trails near Mt. Rainier",

    photo: "https://res.cloudinary.com/djjqsmlei/image/upload/v1786568333/Kuma%20Tako%20Ranch/Things%20To%20Do/Hiker-on-a-trail-at-Paradise-Mount-Rainier-in-fall_g7rsd5.jpg",

    style: "overlay",

    icon: "mountain",
  },
  {
    slug: "food",

    name: "Food & Drink",

    tagline: "Restaurants, coffee & local favourites",

    style: "icon",

    icon: "kitchen",
  },
  {
    slug: "lakes",

    name: "Lakes & Water",

    tagline: "Lakes, waterfalls & scenic spots",

    photo: "https://res.cloudinary.com/djjqsmlei/image/upload/v1786568332/Kuma%20Tako%20Ranch/Things%20To%20Do/Steve-Lagreca-DT-Reflection-Lakes-Mount-Rainier-NP-WA-USA-GEOVEA_mpsv0j.jpg",

    style: "standard",

    icon: "waves",
  },

  {
    slug: "fishing",

    name: "Fishing",

    tagline: "Lakes and rivers nearby",

    photo: "https://res.cloudinary.com/djjqsmlei/image/upload/v1786568523/Kuma%20Tako%20Ranch/Things%20To%20Do/fishing_diro9m.jpg",

    style: "overlay",

    icon: "fish",
  },
];
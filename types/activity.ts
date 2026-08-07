export type Activity = {
  slug: string;
  name: string;
  tagline: string;
  photo: string;
  style: "overlay" | "standard" | "icon";
  icon?: string;
};
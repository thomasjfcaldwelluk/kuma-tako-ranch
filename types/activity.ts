export type ActivityStyle =
  | "overlay"
  | "standard"
  | "icon";

export type Activity = {
  slug: string;
  name: string;
  tagline: string;
  photo?: string;
  style: ActivityStyle;
  icon?: string;
};
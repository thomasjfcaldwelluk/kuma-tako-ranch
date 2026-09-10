import type { IconName } from "@/lib/icons";

export type ActivityStyle =
  | "overlay"
  | "standard"
  | "icon";


type PhotoActivity = {
  slug: string;
  name: string;
  tagline: string;
  photo: string;
  style: "overlay" | "standard";
  icon?: IconName;
  href: string;
  id: string;
};


type IconActivity = {
  slug: string;
  name: string;
  tagline: string;
  style: "icon";
  icon: IconName;
  href: string;
  id: string;
};


export type Activity = PhotoActivity | IconActivity;
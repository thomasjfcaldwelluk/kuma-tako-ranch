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
};


type IconActivity = {
  slug: string;
  name: string;
  tagline: string;
  style: "icon";
  icon: IconName;
};


export type Activity = PhotoActivity | IconActivity;
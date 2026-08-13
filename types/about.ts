import type { IconName } from "@/lib/icons";

export type ValuePoint = {
  icon: IconName;
  title: string;
  description: string;
};

export type About = {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  values: ValuePoint[];
};
import {
  Wifi,
  Flame,
  Car,
  Wind,
  PawPrint,
  Users,
  Bed,
  Bath,
  Tv,
  WashingMachine,
  ChevronDown,
  Home,
  Mountain,
  Heart,
  UtensilsCrossed,
  MapPin,
  Calendar,
  Star,
  Trees
} from "lucide-react";

export const iconMap = {
  wifi: Wifi,
  "fire-pit": Flame,
  "free-parking": Car,
  "air-conditioning": Wind,
  "pet-friendly": PawPrint,
  guests: Users,
  bed: Bed,
  bath: Bath,
  tv: Tv,
  "washing-machine": WashingMachine,
  "chevron-down": ChevronDown,
  home: Home,
  mountain: Mountain,
  heart: Heart,
  kitchen: UtensilsCrossed,
  "map-pin": MapPin,
  calendar: Calendar,
  star: Star,
  trees: Trees
};

export type IconName = keyof typeof iconMap;
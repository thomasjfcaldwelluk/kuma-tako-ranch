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
  Trees,
  Menu, 
  X
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

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
  trees: Trees,
  menu: Menu,
  x: X,
  facebook: FaFacebookF,
  instagram: FaInstagram
};

export type IconName = keyof typeof iconMap;
import { iconMap, IconName } from "@/lib/icons";

type IconProps = {
  name: IconName;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 32,
  xl: 48,
};

export default function Icon({ name, size = "sm", className = "" }: IconProps) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) return null;

  return <LucideIcon size={sizeMap[size]} className={className} />;
}
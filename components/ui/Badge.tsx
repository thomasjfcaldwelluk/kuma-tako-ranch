import Icon from "./Icon";
import { IconName } from "@/lib/icons";

type BadgeProps = {
  style?: "brand" | "neutral" | "success" | "warning";
  icon?: IconName;
  children: React.ReactNode;
};

const styleVariants = {
  brand: "bg-primary-sage/20 text-primary-green",
  neutral: "bg-neutral-soft text-text-body",
  success: "bg-status-success/10 text-status-success",
  warning: "bg-status-warning/10 text-status-warning",
};

export default function Badge({
  style = "neutral",
  icon,
  children,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-xs px-sm py-xs rounded-full text-caption font-medium ${styleVariants[style]}`}
    >
      {icon && <Icon name={icon} size="xs" />}
      {children}
    </span>
  );
}
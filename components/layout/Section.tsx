import Container from "./Container";

type SectionProps = {
  as?: "section" | "header" | "footer" | "div";
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  height?: "auto" | "sm" | "md" | "lg" | "xl" | "full";
  bgColor?: "primary" | "secondary" | "neutral" | "dark" |"cream";
  className?: string;
  children: React.ReactNode;
};

const spacingMap = {
  none:" ",
  xs: "py-xs",
  sm: "py-lg",
  md: "py-xl",
  lg: "py-2xl",
  xl: "py-3xl",
};

const bgColorMap = {
  primary: "bg-primary-green",
  secondary: "bg-primary-sage",
  neutral: "bg-neutral-white",
  dark: "bg-primary-dark-green",
  cream: "bg-neutral-cream",
};

const heightMap = {
  auto: "",
  sm: "h-[200px] md:h-[400px]",
  md: "h-[500px] md:h-[600px]",
  lg: "h-[600px] md:h-[700px]",
  xl: "h-[500px] md:h-[800px]",
  full: "h-screen",
}

export default function Section({
  as: Tag = "section",
  spacing = "none",
  height = "auto",
  bgColor = "neutral",
  className = "",
  children,
}: SectionProps) {
  return (
    <Tag className={`${spacingMap[spacing]} ${heightMap[height]} ${bgColorMap[bgColor]} ${className}`} >
      <Container>{children}</Container>
    </Tag>
  );
}
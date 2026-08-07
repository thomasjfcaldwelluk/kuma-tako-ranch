import Container from "./Container";

type SectionProps = {
  as?: "section" | "header" | "footer" | "div";
  spacing?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
};

const spacingMap = {
  sm: "py-lg",
  md: "py-xl",
  lg: "py-2xl",
  xl: "py-3xl",
};

export default function Section({
  as: Tag = "section",
  spacing = "lg",
  children,
}: SectionProps) {
  return (
    <Tag className={spacingMap[spacing]}>
      <Container>{children}</Container>
    </Tag>
  );
}
type StackProps = {
  direction?: "row" | "col";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  children: React.ReactNode;
};
const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const directionMap = {
  row: "flex-row",
  col: "flex-col",
};

const gapMap = {
  xs: "gap-xs",
  sm: "gap-sm",
  md: "gap-md",
  lg: "gap-lg",
  xl: "gap-xl",
};

export default function Stack({ direction = "col", gap = "xs", align='center',children }: StackProps) {
  return (
    <div className={`flex ${directionMap[direction]} ${gapMap[gap]} ${alignMap[align]}`}>
      {children}
    </div>
  );
}
type GridProps = {
  cols?: 1 | 2 | 3 | 4|5;
  gap?: "none"|"xs" | "sm" | "md" | "lg" | "xl";
  spacing?: "none"|"xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
};

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
};

const spacingMap = {
  none:" ",
  xs:"px-xs",
  sm:"px-sm",
  md:"px-md",
  lg:"px-lg",
  xl:"px-xl",
}

const gapMap = {
  none:"",
  xs: "gap-xs",
  sm: "gap-sm",
  md: "gap-md",
  lg: "gap-lg",
  xl: "gap-xl",
};

export default function Grid({ cols = 3, spacing='none', gap = "md", children }: GridProps) {
  return (
    <div className={`grid ${spacingMap[spacing]} ${colsMap[cols]} ${gapMap[gap]}`}>
      {children}
    </div>
  );
}
type GridProps = {
  cols?: 1 | 2 | 3 | 4| 5;
  rows?: 1 | 2 | 3 | 4| 5;
  gap?: "none"|"xs" | "sm" | "md" | "lg" | "xl";
  spacing?: "none"|"xs" | "sm" | "md" | "lg" | "xl";
  hideOnMobile?: boolean;
  children: React.ReactNode;
};

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
};

const rowsMap = {
  1: "grid-rows-1",
  2: "grid-rows-1 sm:grid-rows-2",
  3: "grid-rows-1 sm:grid-rows-2 lg:grid-rows-3",
  4: "grid-rows-1 sm:grid-rows-2 lg:grid-rows-4",
  5: "grid-rows-1 sm:grid-rows-2 lg:grid-rows-5",
};

const spacingMap = {
  none:" ",
  xs:"p-xs",
  sm:"p-sm",
  md:"p-md",
  lg:"p-lg",
  xl:"p-xl",
}

const gapMap = {
  none:"",
  xs: "gap-xs",
  sm: "gap-sm",
  md: "gap-md",
  lg: "gap-lg",
  xl: "gap-xl",
};

export default function Grid({ cols = 3, rows = 1, spacing='none', gap = "md",hideOnMobile = false, children }: GridProps) {
  return (
    <div className={`${hideOnMobile ? "hidden md:grid" : "grid"} ${spacingMap[spacing]} ${colsMap[cols]} ${rowsMap[rows]} ${gapMap[gap]}`}>
      {children}
    </div>
  );
}
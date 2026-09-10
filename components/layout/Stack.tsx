

type StackProps = {
  direction?: "row" | "col";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?:"end" | "between" | "evenly" | "center" | "stretch";
  wrap?: boolean;
  children: React.ReactNode;
};
const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};
const justifyMap = {
  end:"flex-end",
  between:"space-between",
  evenly:"space-evenly",
  center:"center",
  stretch:"stretch",
}

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

export default function Stack({ direction = "col", gap = "xs", align='center', justify='center',wrap = false, children }: StackProps) {
  return (
    <div className={`flex ${directionMap[direction]} ${gapMap[gap]} ${alignMap[align]} ${justifyMap[justify]} ${wrap ? "flex-wrap" : "flex-nowrap"}`}>
      {children}
    </div>
  );
}
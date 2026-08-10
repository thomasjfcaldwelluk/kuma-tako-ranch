type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
};

const variantStyles = {
  primary: "bg-primary-green text-neutral-white hover:bg-primary-dark-green",
  secondary: "bg-primary-cedar text-neutral-white hover:bg-primary-dark-cedar",
  outline: "bg-transparent text-primary-green border border-primary-green hover:bg-primary-sage/10",
  ghost: "bg-transparent text-primary-green hover:bg-primary-sage/10",
};

const sizeStyles = {
  sm: "px-md py-xs text-caption",
  md: "px-lg py-sm text-small",
  lg: "px-xl py-md text-body",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
}: ButtonProps) {
  const classes = `font-heading font-semibold rounded-md transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const variantStyles = {
  primary: "bg-primary-green text-neutral-white hover:bg-primary-dark-green",
  secondary: "bg-primary-cedar text-neutral-white hover:bg-primary-dark-cedar",
  outline: "bg-transparent text-primary-green border border-primary-green hover:bg-primary-sage/10",
  ghost: "bg-transparent text-primary-green hover:bg-primary-sage/10",
};

const sizeStyles = {
  sm: "px-md py-xs text-[length:var(--text-caption)]",
  md: "px-lg py-sm text-[length:var(--text-small)]",
  lg: "px-xl py-md text-[length:var(--text-body)]",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
}: ButtonProps) {
  const baseStyles =
    "font-heading font-semibold rounded-md transition-colors inline-flex items-center justify-center text-center";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
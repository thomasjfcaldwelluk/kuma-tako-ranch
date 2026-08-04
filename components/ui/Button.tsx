type ButtonProps ={
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' ;
    size?: 'sm'|'md'|'lg';
    children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
}: ButtonProps) {
  return (
    <button>
      {children}
    </button>
  );
}
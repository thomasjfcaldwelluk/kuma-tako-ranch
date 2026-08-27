// components/ui/Input.tsx
type InputProps = {
  as?: "input" | "textarea";
  type?: string;
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
};

export default function Input({
  as: Tag = "input",
  type = "text",
  name,
  placeholder,
  rows,
  required = true,
}: InputProps) {
  const baseStyles ="w-full bg-neutral-white border border-neutral-soft rounded-md px-md py-sm text-body placeholder:text-text-secondary focus:outline-none focus:border-primary-green";
  if (Tag === "textarea") {
    return (
      <textarea name={name} placeholder={placeholder} rows={rows ?? 5} required={required} className={baseStyles}/>
    );
  }

  return (
    <input type={type} name={name} placeholder={placeholder} required={required} className={baseStyles} />
  );
}
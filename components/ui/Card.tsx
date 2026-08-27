import { CldImage } from "next-cloudinary";

type CardProps = {
  variant?:"primary"|"secondary";
  imagePublicId?: string;
  imageAlt?: string;
  imageHeight?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

const variantStyles = {
  primary:"bg-neutral-white",
  secondary:"bg-neutral-cream"
}

const imageHeightMap = {
  sm: "h-40",
  md: "h-48",
  lg: "h-56",
};

export default function Card({
  variant ="primary",
  imagePublicId,
  imageAlt = "",
  imageHeight = "md",
  children,
  className = "",
}: CardProps) {
  return (
    <div className={`rounded-lg shadow-sm overflow-hidden flex flex-col ${variantStyles[variant]} ${className}`}>
      {imagePublicId && (
        <div className={`relative w-full ${imageHeightMap[imageHeight]}`}>
          <CldImage src={imagePublicId} alt={imageAlt} fill className="object-cover"/>
        </div>
      )}
      <div className="p-md flex flex-col gap-sm flex-1">{children}</div>
    </div>
  );
}
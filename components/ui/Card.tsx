import { CldImage } from "next-cloudinary";

type CardProps = {
  imagePublicId?: string;
  imageAlt?: string;
  imageHeight?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

const imageHeightMap = {
  sm: "h-40",
  md: "h-48",
  lg: "h-56",
};

export default function Card({
  imagePublicId,
  imageAlt = "",
  imageHeight = "md",
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-neutral-white rounded-lg shadow-sm overflow-hidden  ${className}`}
    >
      {imagePublicId && (
        <div className={`relative w-full ${imageHeightMap[imageHeight]}`}>
          <CldImage
            src={imagePublicId}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-md flex flex-col gap-sm">{children}</div>
    </div>
  );
}
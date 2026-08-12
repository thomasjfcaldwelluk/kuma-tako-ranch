"use client";

import { CldImage } from "next-cloudinary";
import { GalleryImage } from "@/types/gallery";
import Section from "../layout/Section";

type GalleryGridProps = {
  images: GalleryImage[];
};

const spanMap = {
  normal: "",
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [featured, ...rest] = images;

  return (
    <Section as="section">
      <div className="flex flex-col gap-sm">
        {/* Featured image - full width, landscape banner */}
        <div className="relative w-full h-[220px] sm:h-[380px] rounded-lg overflow-hidden">
          <CldImage
            src={featured.publicId}
            alt={featured.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Grid of remaining tiles - short rows */}
        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[400px] sm:auto-rows-[200px] gap-sm">
          {rest.map((image) => (
            <div
              key={image.publicId}
              className={`relative rounded-md overflow-hidden ${spanMap[image.span ?? "normal"]}`}
            >
              <CldImage
                src={image.publicId}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
"use client";

import { CldImage } from "next-cloudinary";
import { GalleryImage } from "@/types/gallery";
import Section from "../layout/Section";

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [featured, kitchen, livingRoom, tall, bedroom, wide,poolTable] = images;

  return (
    <Section as="section" spacing="none">
      <div className="flex flex-col gap-sm px-sm py-sm bg-neutral-cream" >
        {/* Featured image - full width, landscape banner */}
        <div className="relative w-full h-[220px] sm:h-[420px] rounded-sm overflow-hidden">
          <CldImage src={featured.publicId} alt={featured.alt} fill className="object-cover"/>
        </div>
        {/* Grid - explicit placement, matches reference layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-sm sm:h-[500px]">
          <Tile image={kitchen} className="sm:col-start-1 sm:row-start-1" />
          <Tile image={livingRoom} className="sm:col-start-2 sm:row-start-1" />
          <Tile image={tall} className="sm:col-start-3 sm:row-start-1 sm:row-span-2" />
          <Tile image={bedroom} className="sm:col-start-4 sm:row-start-1" />
          <Tile image={wide} className="sm:col-start-1 sm:row-start-2 sm:col-span-2" />
           <Tile image={poolTable} className="sm:col-start-4 sm:row-start-2" />
        </div>
      </div>
    </Section>
  );
}

function Tile({ image, className = "" }: { image: GalleryImage; className?: string }) {
  return (
    <div className={`relative rounded-md overflow-hidden h-[160px] sm:h-auto ${className}`}>
      <CldImage src={image.publicId} alt={image.alt} fill className="object-cover" />
    </div>
  );
}
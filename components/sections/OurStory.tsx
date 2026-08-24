"use client";

import Grid from "../layout/Grid";
import Section from "../layout/Section";
import Header from "../ui/Heading";
import { CldImage } from "next-cloudinary";

type OurStoryProps = {
  imagePublicId: string;
  heading: string;
  subheading: string;
  description: string;
  alt: string;
};

export default function OurStory({
  imagePublicId,
  heading,
  subheading,
  description,
  alt,
}: OurStoryProps) {
  return (
    <Section as="section" height="auto">
      <Header title="Our Story" />
      <Grid cols={2} gap="none">
        <div className="flex flex-col justify-center gap-md p-10 bg-neutral-cream">
          <h2 className="text-caption text-center weight-800">{heading}</h2>
          <p className="text-h2 text-center">{subheading}</p>
          <p className="text-small">{description}</p>
        </div>

        <div className="relative w-full h-[320px] sm:h-[500px] rounded-xs overflow-hidden">
          <CldImage
            src={imagePublicId}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      </Grid>
    </Section>
  );
}
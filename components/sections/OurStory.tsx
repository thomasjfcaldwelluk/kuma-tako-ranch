"use client";

import Grid from "../layout/Grid";
import Section from "../layout/Section";
import Badge from "../ui/Badge";
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
  alt
}: OurStoryProps ) {
  return (
    <Section as="section" spacing="lg" height="auto" bgColor="cream">
      <Header title="Our Story" />
        <Grid cols={2}>
            <div className="flex flex-col align-items justify-content gap-sm">
                <h2 className="text-h2">{heading}</h2>
                <p className="text-body">{subheading}</p>
                <p className="text-body">{description}</p>
            </div>
            <div className="flex flex-col gap-sm">
               <CldImage
                src={imagePublicId}
                alt={alt}
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
        </Grid>
    </Section>
  );
}
"use client";

import Grid from "../layout/Grid";
import Section from "../layout/Section";
import Header from "../ui/Heading";
import { CldImage } from "next-cloudinary";
import Contact from "../templates/Contact";
import VendorSection from "./VendorSection";

type HomeContactProps ={
    imagePublicId: string;
    alt:string;
}

export default function HomeContact({imagePublicId, alt,}:HomeContactProps) {
    return (
  <Section as="section" spacing="none" height="auto">
    <Header title="Contact Us" as="h2"/>
    <VendorSection />
    <Grid cols={2} gap="none">
      <div className="relative w-full h-[320px] sm:h-[500px] rounded-xs overflow-hidden">
        <CldImage src={imagePublicId} alt={alt} height={320} width={450} className="object-cover h-full w-full"  />
      </div>
      <div className="flex flex-col justify-center gap-xl p-2 bg-neutral-cream">
       <Contact />
      </div>
    </Grid>
  </Section>
    )
}
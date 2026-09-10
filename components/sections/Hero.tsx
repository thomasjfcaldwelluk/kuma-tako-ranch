"use client";

import { CldImage } from "next-cloudinary";
import Container from "../layout/Container";
import Button from "../ui/Button";

type HeroProps = {
  imagePublicId: string;
  heading: string;
  subheading: string;
  buttonLabel: string;
  ranchHref: string;
  rvHref: string;
};

export default function Hero({
  imagePublicId,
  heading,
  subheading,
  buttonLabel,
  ranchHref,
  rvHref
}: HeroProps) {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <CldImage src={imagePublicId} alt={heading} fill loading="eager" className="object-cover" sizes="100vw"/>
      <div className="absolute inset-0 bg-black/40" />
      <Container>
        <div className="relative z-10 flex flex-col items-center text-center gap-md">
          <h1 className="text-display text-neutral-white">{heading}</h1>
          <p className="text-body text-neutral-white/90">{subheading}</p>
          <div className="flex justify-content gap-sm"> 
          <Button href={ranchHref} variant="primary" size="md">{buttonLabel}</Button>
          <Button href={rvHref} variant="secondary" size="md">RV Sites</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
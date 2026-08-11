"use client";

import { CldImage } from "next-cloudinary";
import Container from "../layout/Container";
import Button from "../ui/Button";

type HeroProps = {
  imagePublicId: string;
  heading: string;
  subheading: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function Hero({
  imagePublicId,
  heading,
  subheading,
  buttonLabel,
  buttonHref,
}: HeroProps) {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <CldImage
        src={imagePublicId}
        alt={heading}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center gap-md">
          <h1 className="text-display text-neutral-white">{heading}</h1>
          <p className="text-body text-neutral-white/90">{subheading}</p>
          <Button href={buttonHref} variant="primary" size="md">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
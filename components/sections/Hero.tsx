"use client";

import { getCldVideoUrl } from "next-cloudinary";
import Container from "../layout/Container";
import Button from "../ui/Button";

type HeroProps = {
  videoPublicId: string;
  heading: string;
  subheading: string;
  buttonLabel: string;
  ranchHref: string;
  rvHref: string;
};

export default function Hero({
  videoPublicId,
  heading,
  subheading,
  buttonLabel,
  ranchHref,
  rvHref,
}: HeroProps) {
  const videoUrl = getCldVideoUrl({
    src: videoPublicId,
    rawTransformations: ["f_auto", "q_auto"], // let Cloudinary pick a codec the device actually supports
  });
  const posterUrl = getCldVideoUrl({
    src: videoPublicId,
    rawTransformations: ["so_0"],
    format: "jpg",
  });

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden isolate">
      <video
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
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
import { properties } from "@/data/properties";
import HouseTemplate from "@/components/templates/HouseTemplate";
import { notFound } from "next/navigation";

export default function RanchHousePage() {
  const house = properties.find((p) => p.slug === "ranch-house");

  if (!house) notFound();

  return <HouseTemplate {...house} />;
}
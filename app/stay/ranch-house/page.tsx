import { Metadata } from "next";
import { properties } from "@/data/properties";
import HouseTemplate from "@/components/templates/HouseTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "The Ranch House",
  description: "Kuma Tako Ranch House is a cozy mountain getaway with 4 bedrooms, 3 bathrooms, and a fully equipped kitchen. Enjoy the scenic views and relax in comfort.",
  alternates: {
    canonical: "/stay/ranch-house",
  },
};

export default function RanchHousePage() {
  const house = properties.find((p) => p.slug === "ranch-house");

  if (!house) notFound();

  return <HouseTemplate {...house} />;
}
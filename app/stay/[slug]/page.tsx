import { properties } from "@/data/properties";
import AccommodationTemplate from "@/components/templates/AccommodationTemplate";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return <AccommodationTemplate {...property} />;
}
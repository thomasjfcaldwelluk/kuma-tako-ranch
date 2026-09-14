import RvSitesTemplate from "@/components/templates/RvSitesTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RV Sites",
  description: "Kuma Tako Ranch offers convenient RV sites for your outdoor adventure. With easy access to nature and essential amenities, your camping experience will be comfortable and memorable.",
  alternates: {
    canonical: "/stay/rv-sites",
  },
};

export default function RvSitesPage() {
  

  return <RvSitesTemplate  />;
}
import { properties } from "@/data/properties";
import RvSitesTemplate from "@/components/templates/RvSitesTemplate";

export default function RvSitesPage() {
  const rvSites = properties.filter((p) => p.type === "rv-site");

  return <RvSitesTemplate sites={rvSites} />;
}
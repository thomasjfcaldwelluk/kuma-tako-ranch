// components/sections/VendorSection.tsx
import { CldImage } from "next-cloudinary";
import { vendors, vendorMessage } from "@/data/vendors";
import Section from "../layout/Section";

type VendorSectionProps = {
  variant?: "all" | "first-three" | "last-two";
};

export default function VendorSection({ variant = "all" }: VendorSectionProps) {
  const visibleVendors =
    variant === "first-three"
      ? vendors.slice(0, 3)
      : variant === "last-two"
      ? vendors.slice(-2)
      : vendors;

  return (
    <Section className="flex flex-col items-center text-center gap-md py-lg">
      <p>{vendorMessage}</p>
      <div className="flex flex-wrap items-center justify-center gap-xl">
        {visibleVendors.map((vendor) => (
          <a key={vendor.name} href={vendor.href} target="_blank" rel="noopener noreferrer">
            <CldImage src={vendor.logo} alt={vendor.name} width={120} height={48} />
          </a>
        ))}
      </div>
    </Section>
  );
}
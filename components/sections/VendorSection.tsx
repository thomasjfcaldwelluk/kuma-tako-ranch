// components/sections/VendorSection.tsx
import { CldImage } from "next-cloudinary";
import { vendors, vendorMessage } from "@/data/vendors";
import Section from "../layout/Section";

export default function VendorSection() {
  return (
    <Section className="flex flex-col items-center text-center gap-md py-lg">
      <p>{vendorMessage}</p>
      <div className="flex flex-wrap items-center justify-center gap-xl">
        {vendors.map((vendor) => (
          <a key={vendor.name} href={vendor.href} target="_blank" rel="noopener noreferrer">
            <CldImage src={vendor.logo} alt={vendor.name} width={120} height={48} />
          </a>
        ))}
      </div>
    </Section>
  );
}
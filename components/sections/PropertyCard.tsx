import Link from "next/link";
import { Property } from "@/types/property";

export default function PropertyCard({
  slug,
  name,
  availability,
  beds,
  guests,
  amenities,
  description,
}: Property) {
  return (
    <div className="bg-neutral-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      {/* Photo placeholder for now - we'll wire up CldImage later */}
      <div className=" bg-neutral-soft" />

      <div className="p-md flex flex-col gap-sm">
        <span
          className={`text-caption px-sm py-xs rounded-full w-fit ${
            availability === "available"
              ? "bg-status-success/10 text-status-success"
              : "bg-status-warning/10 text-status-warning"
          }`}
        >
          {availability === "available" ? "Available Now" : "Limited Availability"}
        </span>

        <h3 className="text-h3">{name}</h3>

        <div className="flex gap-sm text-caption text-text-secondary">
          {beds > 0 && <span>{beds} Beds</span>}
          <span>{guests} Guests</span>
        </div>

        <p className="text-small text-text-secondary">{description}</p>

        <Link
          href={`/stay/${slug}`}
          className="bg-primary-green text-neutral-white text-center px-lg py-sm rounded-md font-semibold mt-sm"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
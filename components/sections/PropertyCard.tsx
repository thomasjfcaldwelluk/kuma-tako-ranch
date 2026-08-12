"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { Property } from "@/types/property";

export default function PropertyCard({
  slug,
  name,
  availability,
  beds,
  guests,
  description,
  photos,
}: Property) {
  return (
    <Card imagePublicId={photos[0]} imageAlt={name}>

      <div className="self-start">
        <Badge
          style={availability === "available" ? "success" : "warning"}
        >
          {availability === "available"
            ? "Available Now"
            : "Limited Availability"}
        </Badge>
      </div>
      <h3 className="text-h3">{name}</h3>
      <div className="flex gap-sm text-small text-text-secondary">
        {beds > 0 && (
          <span className="flex items-center gap-xs">
            <Icon name="bed" size="sm" />
            {beds} Beds
          </span>
        )}
        <span className="flex items-center gap-xs">
          <Icon name="guests" size="sm" />
          {guests} Guests
        </span>
      </div>

      <p className="text-caption text-text-secondary">
        {description}
      </p>

      <div className="mt-auto">
        <Button
          href={`/stay/${slug}`}
          variant="primary"
          size="md"
          className="w-full"
        >
          Book Now
        </Button>
      </div>

    </Card>
  );
}
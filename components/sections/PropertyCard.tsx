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
      <Badge style={availability === "available" ? "success" : "warning"}>
        {availability === "available" ? "Available Now" : "Limited Availability"}
      </Badge>

      <h3 className="text-h3">{name}</h3>

      <div className="flex gap-md text-small text-text-secondary">
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
        <span className="flex items-center gap-xs">
          <Icon name="wifi" size="sm" />
          Wifi
        </span>
      </div>

      <p className="text-small text-text-secondary">{description}</p>

      <Button href={`/stay/${slug}`} variant="primary" size="sm" className="w-full">
        Book Now
      </Button>
    </Card>
  );
}
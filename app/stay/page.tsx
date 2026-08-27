import Grid from "@/components/layout/Grid";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { properties } from "@/data/properties";
import Icon from "@/components/ui/Icon";
import Header from "@/components/ui/Heading";


export default function StayPage() {
  return (
  <main>
    <Section as="section">
      <Header title="Accommodation Options" />
      <Grid cols={2} gap="xl" spacing="lg">
      {properties.map((property) => (
        <Card key={property.slug} variant="secondary" className="p-5">
          <div className="flex space-between gap-sm align-center">
            <h2 className="text-h3">{property.name}:</h2>
            <p className={`text-h3 capitalize  ${ property.type === "house" ? "text-primary-green" : "text-primary-cedar" }`}> {property.type}</p>
          </div>
          <div className="self-start">
            <Badge style={property.availability === "available" ? "success" : "warning"}>
              {property.availability === "available" ? "Available Now" : "Limited Availability"}
            </Badge>
          </div>
          <div className="flex gap-sm my-2">
            {property.guests > 0 && ( <span className="flex items-center gap-xs"><Icon name="guests" size="sm" />{property.guests} guests </span>)}
            {property.beds > 0 && (<span className="flex items-center gap-xs"><Icon name="bed" size="sm" />{property.beds} Beds</span>)}
            {property.bathrooms > 0 && (<span className="flex items-center gap-xs"><Icon name="bath" size="sm" />{property.bathrooms} Bathrooms</span>)}
          </div>
          <p className="text-small text-text-secondary">{property.description}</p>
          <div className="flex flex-wrap gap-sm my-5">
            {property.amenities.map((amenity) => (<Badge key={amenity.name} icon={amenity.icon}>{amenity.name}</Badge>))}
          </div>
          <div className="mt-auto">
            <Button variant={`${property.slug==='ranch-house' ? 'primary' : 'secondary'}`} href={`/stay/${property.slug}`}size="md" className="w-full">
            Book Now
            </Button>
          </div>
        </Card>
      ))}
      </Grid>
    </Section>
    </main>
  );
}
import Grid from "@/components/layout/Grid";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { properties } from "@/data/properties";

export default function StayPage() {
  return (
    <Section as="section" spacing="lg">
      <Grid cols={3} gap="xl" spacing="lg">
      {properties.map((property) => (
        <Card key={property.slug}>
          <h2 className="text-h3">{property.name}</h2>
          <p className="text-body">Type: {property.type}</p>
          <p>Availability: {property.availability}</p>
          <p>Beds: {property.beds}</p>
          <p>Guests: {property.guests}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Description: {property.description}</p>
          <div className="flex flex-wrap gap-sm">
            {property.amenities.map((amenity) => (
            <Badge key={amenity.name} icon={amenity.icon}>
            {amenity.name}</Badge>
            ))}
          </div>
          <div>
            {property.faqs.map((faq, index) => (
              <details key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </Card>
      ))}
      </Grid>
    </Section>
  );
}
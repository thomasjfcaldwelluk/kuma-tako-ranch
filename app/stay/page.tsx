import Grid from "@/components/layout/Grid";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import { properties } from "@/data/properties";

export default function StayPage() {
  return (
    <Section as="section" spacing="lg">
      <Grid cols={2}>
      {properties.map((property) => (
        <Card key={property.slug}>
          <h2 className="text-h3">{property.name}</h2>
          <p className="text-body">Type: {property.type}</p>
          <p>Availability: {property.availability}</p>
          <p>Beds: {property.beds}</p>
          <p>Guests: {property.guests}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Description: {property.description}</p>
          <ul>
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
         
          <div>
            {property.faqs.map((faq, index) => (
              <div key={index}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>
      ))}
      </Grid>
    </Section>
  );
}
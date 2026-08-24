import Grid from "@/components/layout/Grid";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { properties } from "@/data/properties";
import FAQItem from "@/components/ui/FAQItem";


export default function StayPage() {
  return (
    <Section as="section" spacing="lg">
      <Grid cols={3} gap="xl" spacing="lg">
      {properties.map((property) => (
        <Card key={property.slug}>
          <h2 className="text-h3">{property.name}</h2>
      <p className={`text-body capitalize ${ property.type === "house" ? "text-text-primary" : "text-text-secondary" }`}> {property.type}</p>
          <div className="self-start">
                  <Badge
                    style={property.availability === "available" ? "success" : "warning"}
                  >
                    {property.availability === "available"
                      ? "Available Now"
                      : "Limited Availability"}
                  </Badge>
                </div>
          <p>Beds: {property.beds}</p>
          <p>Guests: {property.guests}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>{property.description}</p>
          <div className="flex flex-wrap gap-sm">
            {property.amenities.map((amenity) => (
            <Badge key={amenity.name} icon={amenity.icon}>
            {amenity.name}</Badge>
            ))}
          </div>
          <div>
            {property.faqs.map((faq, index) => (
               <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Card>
      ))}
      </Grid>
    </Section>
  );
}
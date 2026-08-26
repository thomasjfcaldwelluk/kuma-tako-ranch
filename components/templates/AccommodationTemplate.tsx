import { Property } from "@/types/property";
import Badge from "../ui/Badge";
import Section from "../layout/Section";
import FAQItem from "../ui/FAQItem";
import Grid from "../layout/Grid";
import Header from "../ui/Heading";
import Card from "../ui/Card";
import Contact from "./Contact";

export default function AccommodationTemplate({
  name,
  availability,
  beds,
  guests,
  bathrooms,
  description,
  amenities,
  photos,
  hospitableWidgetId,
  faqs,
  type,
}: Property) {
  return (
    <Section>
      <Grid cols={2}>
        <div>
        <Header title={name}/>   
        <Card>
        <p>{description}</p>
        <div className="self-start">
          <Badge style={availability === "available" ? "success" : "warning"}>
          {availability === "available" ? "Available Now" : "Limited Availability"}
         </Badge>
        </div>
        <Badge style="neutral">Beds: {beds}</Badge>
        <p>Guests: {guests}</p>
        <p>Bathrooms: {bathrooms}</p>
        <h2>Amenities</h2>
       <div className="flex flex-wrap gap-sm">
                   {amenities.map((amenity) => (
                   <Badge key={amenity.name} icon={amenity.icon}>
                   {amenity.name}</Badge>
                   ))}
                 </div>
        <h2>Photos</h2>
        {faqs.map((faq) => (
                 <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                   ))}
        </Card>

        </div>
        <div>
           {type === "house" ? (
       <div>Widget when ready</div>
      ) : (
        <Contact />
      )}
        </div>

      </Grid>
    </Section>
  );
}
    
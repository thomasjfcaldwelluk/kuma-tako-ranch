import { Property } from "@/types/property";
import Badge from "../ui/Badge";
import Section from "../layout/Section";

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
}: Property) {
  return (
    <Section>
        <h1>{name}</h1>     
        <p>{description}</p>
        <p>Availability: {availability}</p>
        <p>Beds: {beds}</p>
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
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
    </Section>
  );
}
    
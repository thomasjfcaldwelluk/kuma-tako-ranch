import { Property } from "@/types/property";

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
    <div>
        <h1>{name}</h1>     
        <p>{description}</p>
        <p>Availability: {availability}</p>
        <p>Beds: {beds}</p>
        <p>Guests: {guests}</p>
        <p>Bathrooms: {bathrooms}</p>
        <h2>Amenities</h2>
        <ul>
          {amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <h2>Photos</h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
    </div>
  );
}
    
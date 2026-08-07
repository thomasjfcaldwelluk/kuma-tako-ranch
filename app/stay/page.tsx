import { properties } from "@/data/properties";

export default function StayPage() {
  return (
    <div>
      {properties.map((property) => (
        <div key={property.slug}>
          <h2>{property.name}</h2>
          <p>Type: {property.type}</p>
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
        </div>
      ))}
    </div>
  );
}
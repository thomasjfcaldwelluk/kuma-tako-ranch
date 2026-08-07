import { testimonials } from "@/data/testimonials";
import Section from "../layout/Section";


export default function Testimonials() {
  return (
    <Section>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <p>{testimonial.quote}</p>
            <p>- {testimonial.name}</p>
            <p>{testimonial.stayDetail}</p>
          </div>
        ))}
    </Section>
  );
}
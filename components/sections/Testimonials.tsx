import { testimonials } from "@/data/testimonials";
import Section from "../layout/Section";
import Grid from "../layout/Grid";


export default function Testimonials() {
  return (
    <Section>
      <Grid cols={3} gap="md">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <p>{testimonial.quote}</p>
            <p>- {testimonial.name}</p>
            <p>{testimonial.stayDetail}</p>
          </div>
        ))}
      </Grid>
    </Section>
  );
}
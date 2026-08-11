import { testimonials } from "@/data/testimonials";
import Section from "../layout/Section";
import Grid from "../layout/Grid";
import Header from "../ui/Heading";
import Card from "../ui/Card";


export default function Testimonials() {
  return (
    <Section as="section" spacing="lg" height="auto" bgColor="cream">
      <Header title="What Our Guests Say" />
      <Grid cols={3} gap="md">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <p>{testimonial.quote}</p>
            <p>- {testimonial.name}</p>
            <p>{testimonial.stayDetail}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
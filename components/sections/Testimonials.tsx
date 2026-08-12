import { testimonials } from "@/data/testimonials";
import Section from "../layout/Section";
import Grid from "../layout/Grid";
import Header from "../ui/Heading";
import Card from "../ui/Card";
import Icon from "../ui/Icon";

export default function Testimonials() {
  return (
    <Section as="section" height="auto" spacing="xl">
      <Header title="What Our Guests Say" />

      <Grid cols={3} gap="md" spacing="xl">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full flex flex-col">

            <div className="flex gap-xs">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name="star"
                  size="lg"
                  className="text-rating-yellow fill-rating-yellow" 
                />
              ))}
            </div>

            <p className="text-caption text-text-body">{testimonial.quote}</p>

            <div className="mt-auto">
              <p className="text-body text-text-primary font-weight-semibold">- {testimonial.name}</p>
              <p className="text-caption text-text-secondary">
                {testimonial.stayDetail}
              </p>
            </div>

          </Card>
        ))}
      </Grid>
    </Section>
  );
}
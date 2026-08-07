import Hero from '@/components/sections/Hero'
import Testimonials from '@/components/sections/Testimonials'
import PropertyCard from '@/components/sections/PropertyCard'
import Grid from '@/components/layout/Grid'
import Section from '@/components/layout/Section'
import { properties } from '@/data/properties'
import OurStory from '@/components/sections/OurStory'
import Cta from '@/components/sections/Cta'

export default function Home() {
  return (
    <main>
      <Hero />
      <Section>
        <h2 className="text-h2 text-center ">Where You Will Stay</h2>
        <Grid cols={4} gap="md">
          {properties.map((property) => (
            <PropertyCard key={property.slug} {...property} />
          ))}
        </Grid>
      </Section>
      <OurStory/>
      <Testimonials/>
      <Cta/>
    </main>
  );
}
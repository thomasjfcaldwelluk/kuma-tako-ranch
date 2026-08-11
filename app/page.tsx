import Hero from '@/components/sections/Hero'
import Testimonials from '@/components/sections/Testimonials'
import PropertyCard from '@/components/sections/PropertyCard'
import Grid from '@/components/layout/Grid'
import Section from '@/components/layout/Section'
import { properties } from '@/data/properties'
import OurStory from '@/components/sections/OurStory'
import Cta from '@/components/sections/Cta'
import Header from '@/components/ui/Heading'
import HomeGallery from '@/components/sections/HomeGallery'
import HomeThingsToDo from '@/components/sections/HomeThingsToDo'
import HomeContact from '@/components/sections/HomeContact'

export default function Home() {
  return (
    <main>
      <Hero  
      imagePublicId="https://res.cloudinary.com/djjqsmlei/image/upload/v1786014672/Kuma%20Tako%20Ranch/Hero/heroImage_fyhrnl.webp"
      heading="Escape to Kuma Tako Ranch"
      subheading="A peaceful retreat in the mountains — House and RV sites available"
      buttonLabel="Check Availability"
      buttonHref="/stay"
       />
      <Section as="section" spacing="lg" height="auto" >
        <Header title="Where You Will Stay" />
        <Grid cols={5} gap="sm">
          {properties.map((property) => (
            <PropertyCard key={property.slug} {...property} />
          ))}
        </Grid>
      </Section>
      <OurStory 
        imagePublicId="https://res.cloudinary.com/djjqsmlei/image/upload/v1786029834/Kuma%20Tako%20Ranch/House%20Images/Outside/1-77_mryec8.jpg"
        heading="Our Story"
        subheading="From Working Farm to Mountain Retreat"
        description="Kuma Tako Ranch has been our families home. What started as a working farm has grown into a peaceful retreat, where we now welcome guests to experience the same mountains, forests, and quiet mornings we have always loved."
        alt="Our Story"
      />
      <HomeThingsToDo/>
      <HomeGallery/>
      <Testimonials/>
      <Cta/>
      <HomeContact/>
    </main>
  );
}
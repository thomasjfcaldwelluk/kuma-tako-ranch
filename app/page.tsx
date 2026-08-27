import Hero from '@/components/sections/Hero'
import Testimonials from '@/components/sections/Testimonials'
import PropertyCard from '@/components/sections/PropertyCard'
import Grid from '@/components/layout/Grid'
import Section from '@/components/layout/Section'
import { properties } from '@/data/properties'
import { homeGallery } from "@/data/gallery";
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
      imagePublicId="kuma tako ranch/Hero/heroImage_fyhrnl"
      heading="Escape to Kuma Tako Ranch"
      subheading="A peaceful retreat in the mountains — House and RV sites available"
      buttonLabel="Check Availability"
      buttonHref="/stay"
       />
      <Section as="section" spacing="none" height="auto" >
        <Header title="Where You Will Stay" />
        <Grid cols={5} gap="sm" spacing='sm'>
          {properties.map((property) => (
            <PropertyCard key={property.slug} {...property} />
          ))}
        </Grid>
      </Section>
      <OurStory 
        imagePublicId="kuma tako ranch/House Images/kumaTakoHouseOutside-10_odvsjn"
        heading="Our Story"
        subheading="From Working Farm to Mountain Retreat"
        description="Kuma Tako Ranch has been our family's home. What started as a working farm has grown into a peaceful retreat, where we now welcome guests to experience the same mountains, forests, and quiet mornings we've always loved."
        alt="Our Story"
      />
      <HomeThingsToDo/>
      <HomeGallery images={homeGallery}/>
      <Testimonials/>
      <Cta/>
      <HomeContact  
        imagePublicId="Kuma Tako Ranch/House Images/Outside/contact"
        alt="image of house at night"
        />
    </main>
  );
}
"use client";

import { Property } from "@/types/property";
import { CldImage } from "next-cloudinary";
import Badge from "@/components/ui/Badge";
import Section from "@/components/layout/Section";
import FAQItem from "@/components/ui/FAQItem";
import Grid from "@/components/layout/Grid";
import Card from "@/components/ui/Card";
import Stack from "@/components/layout/Stack";
import Container from "../layout/Container";
import VendorSection from "../sections/VendorSection";
import Contact from "./Contact";

export default function HouseTemplate({
  name,
  availability,
  beds,
  guests,
  bathrooms,
  description,
  highlights,
  amenities,
  photos,
  photoGallery,
  faqs,
}: Property) {
  return (
<Section>
  <Container>
    <Grid cols={3} rows={2} gap="xs" spacing="sm" hideOnMobile>
      <div className="relative lg:col-span-2 lg:row-span-2 min-h-[240px] lg:min-h-[500px]">
        <CldImage src={photos[0]} alt={name} fill className="rounded-sm fill object-cover" />
      </div>
      <div className="relative min-h-[240px]">
        <CldImage src={photos[1]} alt={name} fill className="rounded-sm fill object-cover" />
      </div>
      <div className="relative min-h-[240px]">
        <CldImage src={photos[2]} alt={name} fill className="rounded-sm fill object-cover" />
     </div>
    </Grid>
 </Container>
  <Grid cols={2} rows={1} gap="md" spacing="sm">
    <div className="flex flex-col items-center">
      <Card>
        <div className="flex gap-sm items-center">
          <h2 className="text-lg font-bold sm:text-xl md:text-2xl">{name}</h2>
          <div className="self-start">
            <Badge style={availability === "available" ? "success" : "warning"}>{availability === "available" ? "Available Now" : "Limited Availability"}</Badge>
          </div>
        </div>
        <p className='text-small text-text-secondary'>{description}</p>
          <Stack direction="row" gap="sm" wrap={true}>
            <Badge style="neutral">Beds: {beds}</Badge>
            <Badge style="neutral">Guests: {guests}</Badge>
            <Badge style="neutral">Bathrooms: {bathrooms}</Badge>
          </Stack>
        <h2 className="text-xl font-bold">Amenities</h2>
          <div className="flex flex-wrap gap-sm">
              {amenities.map((amenity) => (
                <Badge style="amenity" key={amenity.name} icon={amenity.icon}>{amenity.name}</Badge>
              ))}
            </div>
            <h2 className="text-xl font-bold">Highlights</h2>
            <ul className="list-disc list-inside">
              {highlights?.map((highlight) => (<li key={highlight}>{highlight}</li>))}
            </ul>
              <h2 className="text-xl font-bold">FAQs</h2>
              {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
      </Card>
    </div>
    <div>
        <VendorSection/>
        <Contact/>
      <Grid cols={3} gap="xs" spacing="sm" items-center>
        {photoGallery.map((photo, index) => (
          <CldImage key={index} src={photo.src} alt={photo.alt} className="rounded-sm fill object-cover" width={500} height={500}/>
        ))}
      </Grid>
    </div>
      </Grid>
    </Section>
  );
}
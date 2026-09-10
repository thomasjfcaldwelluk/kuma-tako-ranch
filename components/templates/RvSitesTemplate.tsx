"use client";

import { CldImage } from "next-cloudinary";
import Badge from "../ui/Badge";
import Section from "../layout/Section";
import Grid from "../layout/Grid";
import Card from "../ui/Card";
import Contact from "./Contact";
import Stack from "../layout/Stack";
import Container from "../layout/Container";
import { rvSiteInfo, rvSites } from "@/data/properties";
import FAQItem from "../ui/FAQItem";
import VendorSection from "../sections/VendorSection";

export default function RvSitesTemplate() {
  return (
    <Section>
      <Container>
        <Grid cols={3} rows={2} gap="xs" spacing="sm" hideOnMobile>
          <div className="relative lg:col-span-2 lg:row-span-2 min-h-[240px] lg:min-h-[500px]">
            <CldImage src={rvSiteInfo.photos[0]} alt={rvSiteInfo.name} fill className="rounded-sm object-cover" />
          </div>
          {/* pick two more representative shots for the hero grid, e.g. from rvSites */}
          <div className="relative min-h-[240px]">
            <CldImage src={rvSiteInfo.photos[1]} alt={rvSiteInfo.name} fill className="rounded-sm object-cover" />
          </div>
          <div className="relative min-h-[240px]">
            <CldImage src={rvSiteInfo.photos[2]} alt={rvSiteInfo.name} fill className="rounded-sm object-cover" />
          </div>
        </Grid>
      </Container>

      <Grid cols={2} rows={1} gap="md" spacing="sm">
        <div className="flex flex-col items-center">
          <Card>
            <div className="flex gap-sm items-center">
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">RV Sites</h2>
              <Badge style={rvSiteInfo.availability === "available" ? "success" : "warning"}>
                {rvSiteInfo.availability === "available" ? "Available Now" : "Limited Availability"}
              </Badge>
            </div>
            <p className="text-small text-text-secondary">{rvSiteInfo.description}</p>

            <Stack direction="row" gap="sm" wrap>
              <Badge style="neutral">Guests: {rvSiteInfo.guests}</Badge>
            </Stack>

            <h2 className="text-xl font-bold">Amenities</h2>
            <div className="flex flex-wrap gap-sm">
              {rvSiteInfo.amenities.map((amenity) => (
                <Badge style="amenity" key={amenity.name} icon={amenity.icon}>
                  {amenity.name}
                </Badge>
              ))}
            </div>
            <h2 className="text-xl font-bold">Allowed Rigs</h2>
            <div className="flex flex-wrap gap-sm">
                {rvSiteInfo.rigSuitability?.allowedRigs.map((rig) => (
                  <Badge style="brand" key={rig}>
                    {rig}
                  </Badge>
                ))}
            </div>
            {rvSiteInfo.rigSuitability && ( <>
            <h2 className="text-xl font-bold">Rig Suitability</h2>
            <Stack direction="row" gap="sm" wrap>
              <Badge style="transparent">Max Length: {rvSiteInfo.rigSuitability.maxLength}</Badge>
              <Badge style="transparent">Site Type: {rvSiteInfo.rigSuitability.siteType}</Badge>
              <Badge style="transparent">Surface: {rvSiteInfo.rigSuitability.surfaceType}</Badge>
              <Badge style="transparent">Levelness: {rvSiteInfo.rigSuitability.surfaceLevelness}</Badge>
              <Badge style="transparent">{rvSiteInfo.rigSuitability.backIn ? "Back-in" : "Pull-through"}</Badge>
              <Badge style="transparent">{rvSiteInfo.rigSuitability.slideouts ? "Slideouts OK" : "No Slideouts"}</Badge>
             </Stack>
             </>
            )}
            <h2 className="text-xl font-bold">Things to Know</h2>
            {rvSiteInfo.faqs.map((faq) => (
             <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
               ))}
          </Card>
        </div>

        <div>
          <VendorSection/>
          <Contact/>
          <h2 className="text-xl font-bold mb-sm">Photo Gallery</h2>
          <h2 className="text-xl font-bold mb-sm">Choose Your Site</h2>
          <Grid cols={2} gap="sm" spacing="sm">
            {rvSites.map((site) => (
              <div key={site.slug} className="relative min-h-[180px]">
                <CldImage
                  src={site.photos[0]}
                  alt={site.name}
                  fill
                  className="rounded-sm object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-neutral-white/90 px-sm py-xs rounded-sm text-caption font-medium">
                  {site.name}
                </span>
              </div>
            ))}
            {rvSiteInfo.photoGallery.map((photo ,index) => (
              <div key={index} className="relative min-h-[180px]">
                <CldImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="rounded-sm object-cover"
                />
              </div>
            ))}
          </Grid>
        </div>
      </Grid>
    </Section>
  );
}       
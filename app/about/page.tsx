"use client";
import { CldImage } from "next-cloudinary";
import { aboutContent } from "@/data/abouts";
import Stack from "@/components/layout/Stack";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import Grid from "@/components/layout/Grid";



export default function About() {
  return (
    <main className="gap-xl p-lg">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-h1 text-align-center">{aboutContent.title}</h2>
        <p>{aboutContent.subtitle}</p>
        <div className="max-w-[1000px] min-w-[320px] mx-auto my-lg ">
          <p className="text-small text-text-secondary">{aboutContent.description}</p>
        </div>
      </div>
       <Grid cols={4} spacing="xl">
      {aboutContent.values.map((value, index) => (
        <Card key={index} className="p-xs">
          <Stack>
          <Icon name={value.icon} size="lg"/>
          <h2 className="text-h3">{value.title}</h2>
          <p className="text-caption text-text-secondary">{value.description}</p>
          </Stack>
        </Card>
      ))}
      </Grid>
      <Grid cols={3} spacing="xl">
     {aboutContent.images.map((image, index) => (
        <div key={index} className="relative h-[300px] rounded-sm overflow-hidden mt-xl">
          <CldImage
              src={image}
              alt={`Photo ${index + 1}`}
              fill
              sizes="(max-width: 400px) 100vw, 33vw"
              className="object-cover"
                />
          </div>
        ))}
      </Grid>
     
    </main>
  );
}
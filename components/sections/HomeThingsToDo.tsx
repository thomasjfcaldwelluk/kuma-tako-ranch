"use client";

import { CldImage } from "next-cloudinary";
import Section from "../layout/Section";
import Header from "../ui/Heading";
import Icon from "../ui/Icon";
import { activities } from "@/data/activities";

export default function ThingsToDo() {
  const [hiking, foodAndDrink, lakes, fishing] = activities;
  return (
    <Section spacing="none" bgColor="neutral">
      <Header title="Things To Do Nearby" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-0 md:h-[600px] rounded-xs overflow-hidden">
        <ActivityTile activity={hiking} className="md:col-start-1 md:row-start-1 md:row-span-2" />
        <ActivityTile activity={foodAndDrink} className="md:col-start-2 md:row-start-1" />
        <ActivityTile activity={lakes} className="md:col-start-2 md:row-start-2" />
        <ActivityTile activity={fishing} className="md:col-start-3 md:row-start-1 md:row-span-2" />
      </div>
    </Section>
  );
}

function ActivityTile({ activity,className = "",}: {activity: (typeof activities)[number];className?: string;}) {
  if (activity.style === "icon") {
    return (
      <div className={`relative h-[300px] md:h-auto bg-neutral-cream flex flex-col items-center justify-center text-center gap-xs p-md ${className}`}>
       <Icon name={activity.icon} size="lg" className="text-primary-sage"/>
        <h3 className="text-h3">{activity.name}</h3>
        <p className="text-small text-text-secondary">{activity.tagline}</p>
      </div>
    );
  }
  return (
      <div className={`relative h-[300px] md:h-auto overflow-hidden ${className}`}>
        <CldImage src={activity.photo}  alt={activity.name} fill  className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-md text-center">
        <h3 className="text-h3 text-neutral-white">{activity.name}</h3>
        <p className="text-small text-neutral-white/90">{activity.tagline}</p>
      </div>
    </div>
  );
}
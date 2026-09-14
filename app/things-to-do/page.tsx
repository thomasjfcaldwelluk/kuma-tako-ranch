import { activities } from "@/data/activities";
import { guideItems } from "@/data/guide";
import HomeThingsToDo from "@/components/sections/HomeThingsToDo"
import GuideSection from "@/components/guide/GuideSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities & Things to Do",
  description: "Kuma Tako Ranch offers a variety of activities and things to do for your outdoor adventure. From hiking and fishing to horseback riding and stargazing, there's something for everyone.",
  alternates: {
    canonical: "/things-to-do",
  },
};

export default function ThingsToDoPage() {
  return (
  <main>
    <HomeThingsToDo/>
    <section>
  {activities.map((activity) => { const items = guideItems.filter((item) => item.activity === activity.slug);
    if (items.length === 0) {
      return null;
    }
    return (
      
        <GuideSection id={activity.id}  key={activity.slug} title={activity.name} items={items} />
    );
  })}
</section>
</main>
  );
}
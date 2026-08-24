import { activities } from "@/data/activities";
import { guideItems } from "@/data/guide";

import ActivityCard from "@/components/activities/ActivityCard";
import GuideSection from "@/components/guide/GuideSection";
import Section from "@/components/layout/Section";
import Grid from "@/components/layout/Grid";

export default function ThingsToDoPage() {
  return (
    <main>
      <div className="flex flex-col align-center justify-center p-xl">
      <h1 className="text-center text-h2">Things To Do</h1>
      <p>
        Explore the best hikes, lakes, food,
        activities and adventures near Kuma Tako Ranch.
      </p>
      </div>
      <Section bgColor="cream" spacing="md">
        <h2 className="text-h2 text-text-primary text-center p-md" >Explore the Area</h2>
        <Grid cols={4} spacing="xl">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.slug}
            activity={activity}
          />
        ))}
        </Grid>
  
      </Section>
     <section>
  {activities.map((activity) => {
    const items = guideItems.filter(
      (item) => item.activity === activity.slug
    );
    if (items.length === 0) {
      return null;
    }
    return (
      <GuideSection
        key={activity.slug}
        title={activity.name}
        items={items}
      />
    );
  })}
</section>
    </main>
  );
}
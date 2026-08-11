import { activities } from "@/data/activities";
import { guideItems } from "@/data/guide";

import ActivityCard from "@/components/activities/ActivityCard";
import GuideSection from "@/components/guide/GuideSection";

export default function ThingsToDoPage() {
  return (
    <main>
      <h1>Things To Do</h1>
      <p>
        Explore the best hikes, lakes, food,
        activities and adventures near Kuma Tako Ranch.
      </p>
      <section>
        <h2>Explore the Area</h2>
        {activities.map((activity) => (
          <ActivityCard
            key={activity.slug}
            activity={activity}
          />
        ))}
        
      </section>
     <section>
  <h2>Recommended Adventures</h2>
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
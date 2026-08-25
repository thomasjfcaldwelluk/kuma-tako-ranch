import { activities } from "@/data/activities";
import { guideItems } from "@/data/guide";
import HomeThingsToDo from "@/components/sections/HomeThingsToDo"
import GuideSection from "@/components/guide/GuideSection";

export default function ThingsToDoPage() {
  return (
    <main>
      <HomeThingsToDo/>
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
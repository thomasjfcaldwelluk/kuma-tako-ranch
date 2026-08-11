import { Activity } from "@/types/activity";

type ActivityCardProps = {
  activity: Activity;
};

export default function ActivityCard({
  activity,
}: ActivityCardProps) {
  return (
    <article>
      <h2>{activity.name}</h2>
      <p>{activity.tagline}</p>
    </article>
  );
}
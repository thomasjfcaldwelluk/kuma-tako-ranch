import { Activity } from "@/types/activity";
import Card from "@/components/ui/Card"

type ActivityCardProps = {
  activity: Activity;
};

export default function ActivityCard({
  activity,
}: ActivityCardProps) {
  return (
    <div>
      <Card className="p-sm">
        <h2 className="text-h3 text-center">{activity.name}</h2>
        <p className="text-caption text-text-secondary text-center">{activity.tagline}</p>
      </Card>
    </div>
  );
}
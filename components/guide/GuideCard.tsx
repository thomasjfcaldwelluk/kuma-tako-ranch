import type { GuideItem, Difficulty } from "@/types/guide";
import Card from "@/components/ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

type GuideCardProps = {
  item: GuideItem;
};

export const difficultyStyles: Record<Difficulty, string> = {
  Hard: "text-status-error",
  "Moderate–Hard": "text-status-error",
  Moderate: "text-primary-sage",
  "Easy–Moderate": "text-status-success",
  Easy: "text-status-success",
};

export default function GuideCard({
  item,
}: GuideCardProps) {
  return (
    <Card>
      <h3 className="text-h3 text-text-primary">
        {item.name}
      </h3>

      <p className="text-small text-text-secondary">{item.description}</p>

      <p className="text-body text-text-primary font-semibold">
        Location: {item.location}
      </p>

      {item.difficulty && (
        <p className={`text-body ${difficultyStyles[item.difficulty]}`}>
          Difficulty: {item.difficulty}
        </p>
      )}

      {item.dogsAllowed !== undefined && (
        <Badge style={item.dogsAllowed === true ? "success" : "warning"}>
          Dogs: {item.dogsAllowed ? "Allowed" : "Not allowed"}
        </Badge>
      )}

      {item.website && (
        <Button variant="outline" className="mt-auto"
          href={item.website}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          More information
        </Button>
      )}
    </Card>
  );
}
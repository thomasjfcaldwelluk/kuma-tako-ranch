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
      <h3 className="text-h3 text-text-primary text-center">
        {item.name}
      </h3>

      <p className="text-small text-text-secondary">{item.description}</p>

      <p className="text-small text-text-secondary font-regular">
        Location: <span className="text-body text-text-primary font-semi-bold">{item.location}</span>
      </p>

      {item.difficulty && (
        <p className="text-small text-text-secondary font-regular" >
          Difficulty: <span className={`text-body ${difficultyStyles[item.difficulty]}`}>{item.difficulty}</span>
        </p>
      )}
<div className="w-fit">
      {item.dogsAllowed !== undefined && (
        <Badge style={item.dogsAllowed === true ? "success" : "warning"}>
          Dogs: {item.dogsAllowed ? "Allowed" : "Not allowed"}
        </Badge>
      )}
</div>

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
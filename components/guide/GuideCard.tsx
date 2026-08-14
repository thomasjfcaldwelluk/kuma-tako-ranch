import { GuideItem } from "@/types/guide";
import Card from "@/components/ui/Card"

type GuideCardProps = {
  item: GuideItem;
};

export default function GuideCard({
  item,
}: GuideCardProps) {
  return (
    <Card>
      <h3 className="text-h3 text-text-primary">{item.name}</h3>
      <p>{item.description}</p>
      <p>
        Location: {item.location}
      </p>

      {item.difficulty && (
        <p>
          Difficulty: {item.difficulty}
        </p>
      )}

      {item.dogsAllowed !== undefined && (
        <p>
          Dogs:{" "}
          {item.dogsAllowed
            ? "Allowed"
            : "Not allowed"}
        </p>
      )}

      {item.website && (
        <a
          href={item.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          More information
        </a>
      )}
    </Card>
  );
}
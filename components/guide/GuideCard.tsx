import { GuideItem } from "@/types/guide";

type GuideCardProps = {
  item: GuideItem;
};

export default function GuideCard({
  item,
}: GuideCardProps) {
  return (
    <article>
      <h3>{item.name}</h3>

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
    </article>
  );
}
import { GuideItem } from "@/types/guide";
import GuideCard from "./GuideCard";

type GuideSectionProps = {
  title: string;
  items: GuideItem[];
};

export default function GuideSection({
  title,
  items,
}: GuideSectionProps) {
  return (
    <section>
      <h2>{title}</h2>

      {items.map((item) => (
        <GuideCard
          key={item.slug}
          item={item}
        />
      ))}
    </section>
  );
}
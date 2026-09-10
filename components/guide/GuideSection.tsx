import { GuideItem } from "@/types/guide";
import GuideCard from "./GuideCard";
import Section from "../layout/Section";
import Grid from "../layout/Grid";
import Header from "../ui/Heading";

type GuideSectionProps = {
  title: string;
  items: GuideItem[];
  id: string;
};

export default function GuideSection({
  title,
  items,
  id,
}: GuideSectionProps) {
  return (
    <Section bgColor="cream" id={id}>
      <Header title={title} />
      <Grid cols={3} gap="sm" spacing="xl">
        {items.map((item) => (<GuideCard key={item.slug} item={item} />))}
      </Grid>
    </Section>
  );
}
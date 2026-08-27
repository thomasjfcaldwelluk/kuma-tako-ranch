import Section from "../layout/Section";
import Icon from "./Icon";

type SectionHeaderProps = {
  title: string;
};

export default function Header({ title }: SectionHeaderProps) {
  return (
    <Section as="header" spacing="md" height="auto" className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-xs w-full px-md">
        <Icon name="mountain" size="lg" className="text-primary-cedar shrink-0" />
        <h2 className="text-h2 text-primary-cedar text-center min-w-0 break-words">{title}</h2>
        <Icon name="trees" size="lg" className="text-primary-cedar shrink-0" />
      </div>
    </Section>
  );
}
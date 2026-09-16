import Section from "../layout/Section";
import Icon from "./Icon";

type SectionHeaderProps = {
  title: string;
  as?: "h1" | "h2";
};

export default function Header({ title, as: HeadingTag = "h2" }: SectionHeaderProps) {
  return (
    <Section as="header" spacing="md" height="auto" className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-xs w-full px-md">
        <Icon name="mountain" size="sm" className="text-primary-cedar shrink-0" />
        <HeadingTag className="text-h3  text-primary-cedar text-center min-w-0 break-words">{title}</HeadingTag>
        <Icon name="trees" size="sm" className="text-primary-cedar shrink-0" />
      </div>
    </Section>
  );
}
import Section from "../layout/Section";
import Icon from "./Icon";

type SectionHeaderProps = {
  title: string
}

export default function Header({
  title,
}: SectionHeaderProps) {
  return (
    <Section as="header" spacing="md" height="auto" className="flex items-center justify-center gap-md">
      <div className="flex flex-row justify-center gap-xs">
        <Icon name="mountain" size="lg" className="text-primary-cedar" />
        <h2 className="text-h2 text-primary-cedar">
          {title}
        </h2>
        <Icon name="trees" size="lg" className="text-primary-cedar" />
      </div>
    </Section>
  )
}
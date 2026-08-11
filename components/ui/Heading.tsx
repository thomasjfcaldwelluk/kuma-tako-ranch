import Section from "../layout/Section";
import Icon from "./Icon";
import Stack from "../layout/Stack";

type SectionHeaderProps = {
  title: string
}

export default function Header({
  title,
}: SectionHeaderProps) {
  return (
    <Section as="header" spacing="md" height="auto" className="flex flex-col items-center justify-center text-center gap-md">
      <Stack direction='row' gap='sm' align='center' >
        <Icon name="mountain" size="lg" className="text-primary-cedar" />
        <h2 className="text-h2 text-primary-cedar">
          {title}
        </h2>
        <Icon name="trees" size="lg" className="text-primary-cedar" />
      </Stack>
    </Section>
  )
}
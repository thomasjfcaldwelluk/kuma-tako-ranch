import { aboutContent } from "@/data/abouts";
import Container  from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";



export default function About() {
  return (
    <Section>
      <h1>{aboutContent.title}</h1>
      <p>{aboutContent.subtitle}</p>
      <p>{aboutContent.description}</p>
      {aboutContent.values.map((value, index) => (
        <Container key={index}>
          <Stack >
          <span>{value.icon}</span>
          <h2>{value.title}</h2>
          <p>{value.description}</p>
          </Stack>
        </Container>
      ))}
    </Section>
  );
}
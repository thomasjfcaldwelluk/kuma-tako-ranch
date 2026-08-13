import { aboutContent } from "@/data/abouts";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import Grid from "@/components/layout/Grid";



export default function About() {
  return (
    <main>
      <h2 className="text-h1 text-align-center">{aboutContent.title}</h2>
      <p>{aboutContent.subtitle}</p>
      <p>{aboutContent.description}</p>
      <Grid cols={4} spacing="xl">
      {aboutContent.values.map((value, index) => (
        <Card key={index} className="p-xs">
          <Stack>
          <Icon name={value.icon} size="lg"/>
          <h2 >{value.title}</h2>
          <p className="text-caption text-text-secondary">{value.description}</p>
          </Stack>
        </Card>
      ))}
      </Grid>
    </main>
  );
}
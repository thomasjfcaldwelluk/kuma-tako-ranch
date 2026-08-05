import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";


export default function Home() {
  return (
    <Container>
      <div className="bg-neutral-cream  p-lg rounded-lg shadow-lg">
        Design system test
        <h1 className="text-display">Test Heading</h1>
        <Button variant="primary" size="md">Primary Button</Button>
        <h2 className="text-h2">Test Subheading</h2>
        <h3 className="text-h3">Test Third-level Heading</h3>
        <p className="text-body">Test paragraph</p>
        <p className="text-caption">Test caption</p>
        <Stack>
          <Button variant="primary" size="md">Primary Button</Button>
          <Button variant="secondary" size="md">Secondary Button</Button> 
        </Stack>
      </div>
    </Container>
  );
}

import Grid from "./Grid";
import Section from "./Section";

export default function Footer() {
  return (
    <Section as="footer" spacing="md" height="auto" bgColor="darkPrimary" >
      <Grid cols={3} >
        <div className="flex flex-col items-center justify-center gap-sm">
          <h2 className="text-h3 text-neutral-white">Contact Us</h2>
          <p className="text-body text-neutral-white">123 Main Street, Anytown, USA</p>
          <p className="text-body text-neutral-white">(123) 456-7890</p>
          <p className="text-body text-neutral-white">info@kumatakoranch.com</p>
        </div>
      </Grid>
    </Section>
  );
}
import Grid from "../layout/Grid";
import Section from "../layout/Section";

export default function OurStory() {
  return (
    <Section>
        <Grid cols={2} >
            <div className="flex flex-col gap-sm">
                <h2>Our Story</h2>
                <p>From Working Farm to Mountain Retreat</p>
                <p>Kuma Tako Ranch has been our families home. What started as a working farm has grown into a peaceful retreat, where we now welcome guests to experience the same mountains, forests, and quiet mornings we have always loved.</p>
            </div>
            <div className="flex flex-col gap-sm">
               {/* <Image src="/images/our-story.jpg" alt="Our Story" width={600} height={400} /> */}
            </div>
        </Grid>
    </Section>
  );
}
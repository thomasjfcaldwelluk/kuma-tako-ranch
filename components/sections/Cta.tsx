import Section from "../layout/Section";
import Button from "../ui/Button";

export default function Cta() {
    return(
        <Section as="section" spacing="xl" height="sm" bgColor="primary" className="flex flex-col items-center justify-center text-center gap-lg">
            <h2 className="text-h2 text-neutral-white">Ready to Book Your Stay?</h2>
            <p className="text-body text-neutral-white mb-md">Check availability for the house and RV sites today</p>
            <Button variant="invert" size="md" href="/stay">Book Now</Button>
        </Section>
    )
}
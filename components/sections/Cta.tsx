import Section from "../layout/Section";
import Button from "../ui/Button";

export default function Cta() {
    return(
        <Section bg-primary text-white text-center py-16>
            <h2>Ready to Book Your Stay?</h2>
            <p>Check availability for the house and RV sites today</p>
            <Button>Book Now</Button>
        </Section>
    )
}
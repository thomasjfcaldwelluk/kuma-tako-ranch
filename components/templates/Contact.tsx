
import Section from "../layout/Section";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Contact() {
    return (
        <Section as="section" spacing="none" height="auto">
          <form className="w-full flex flex-col gap-md text-center">
          <div>
            <h2 className="text-h2">Get In Touch</h2>
            <p className="text-body text-text-secondary">
              Have a question? We will get back to you within 24 hours
            </p>
          </div>

          <Input name="name" placeholder="Your Name" />
          <Input name="email" type="email" placeholder="Your Email" />
          <Input as="textarea" name="message" placeholder="Your Message" rows={5} />

          <Button variant="primary" size="md" className="mx-auto">
            Send Message
          </Button>
        </form>
            
        </Section>
    )
}
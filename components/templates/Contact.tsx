
import Section from "../layout/Section";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
   const [state, handleSubmit] = useForm("maeyevwj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return (
    <Section as="section" spacing="none" height="auto" className="bg-neutral-cream">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-md text-center bg-neutral-cream">
        <div>
          <h2 className="text-h2">Get In Touch</h2>
          <p className="text-body text-text-secondary">Have a question? We will get back to you within 24 hours</p>
        </div>
        <Input name="name" placeholder="Your Name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <Input name="email" type="email" placeholder="Your Email" />
          <ValidationError  prefix="Email" field="email" errors={state.errors}/>
        <Input as="textarea" name="message" placeholder="Your Message" rows={5} />
          <ValidationError  prefix="Message" field="message"errors={state.errors}/>
        <button type="submit" disabled={state.submitting} className="mx-auto bg-primary-green text-neutral-white hover:bg-primary-dark-green px-lg py-sm text-[length:var(--text-small)]">Send Message</button>
      </form>
    </Section>
  )
}
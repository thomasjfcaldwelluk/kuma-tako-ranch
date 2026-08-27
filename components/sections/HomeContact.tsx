"use client";

import Grid from "../layout/Grid";
import Section from "../layout/Section";
import Header from "../ui/Heading";
import { CldImage } from "next-cloudinary";
import Input from "../ui/Input";
import Button from "../ui/Button";

type HomeContactProps ={
    imagePublicId: string;
    alt:string;
}

export default function HomeContact({imagePublicId, alt,}:HomeContactProps) {
    return (
  <Section as="section" spacing="none" height="auto">
    <Header title="Contact Us" />
    <Grid cols={2} gap="none">
      <div className="relative w-full h-[320px] sm:h-[500px] rounded-xs overflow-hidden">
        <CldImage src={imagePublicId} alt={alt} fill  className="object-cover"  />
      </div>
      <div className="flex flex-col justify-center gap-xl p-10 bg-neutral-cream">
        <form className="w-full flex flex-col gap-md text-center">
          <div>
            <h2 className="text-h2">Get In Touch</h2>
            <p className="text-body text-text-secondary">Have a question? We will get back to you within 24 hours</p>
          </div>
          <Input name="name" placeholder="Your Name" />
          <Input name="email" type="email" placeholder="Your Email" />
          <Input as="textarea" name="message" placeholder="Your Message" rows={5} />
          <Button variant="primary" size="md" className="mx-auto">Send Message</Button>
        </form>
      </div>
    </Grid>
  </Section>
    )
}
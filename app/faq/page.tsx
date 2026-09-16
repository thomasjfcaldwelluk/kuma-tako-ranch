import Section from "@/components/layout/Section";
import Header from "@/components/ui/Heading";
import { faqs } from "@/data/faqs";
import FAQItem from "@/components/ui/FAQItem";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to the most common questions about your stay at Kuma Tako Ranch. Learn about our amenities, policies, and what to expect during your visit.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <main>
      <Section as="section" bgColor="cream">
        <Header title="Your Questions Answered" as="h1"/>
        <div className="mx-auto p-xl">
          {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </Section>
    </main>
  );
}
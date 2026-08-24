import Section from "@/components/layout/Section";
import Header from "@/components/ui/Heading";
import { faqs } from "@/data/faqs";
import FAQItem from "@/components/ui/FAQItem";

export default function FAQPage() {
  return (
    <main>
      <Section as="section" bgColor="cream">
        <Header title="Your Questions Answered" />
        <div className="mx-auto p-xl">
          {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </Section>
    </main>
  );
}
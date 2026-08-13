import Section from "@/components/layout/Section";
import Header from "@/components/ui/Heading";
import { faqs } from "@/data/faqs";

export default function FAQPage() {
  return (
    <main>
      <Section as="section" bgColor="cream">
        <Header title="Your Questions Answered" />

        <div className="mx-auto p-xl">
          {faqs.map((faq, index) => (
            <details key={index} className="flex flex-col align-center">
              <summary className="text-h3 text-align-center">{faq.question}</summary>
              <p className="pb-md text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}
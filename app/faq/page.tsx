import {faqs} from "@/data/faqs";

export default function FAQPage() {
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

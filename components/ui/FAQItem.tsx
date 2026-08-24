// components/sections/FAQItem.tsx
"use client";

import { useState } from "react";
import Icon from "../ui/Icon";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-soft bg-neutral-white py-md px-md rounded-sm mt-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-small">{question}</h3>
        <Icon
          name="chevron-down"
          size="sm"
          className={`text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <p className="text-small text-text-secondary mt-sm">{answer}</p>
      )}
    </div>
  );
}
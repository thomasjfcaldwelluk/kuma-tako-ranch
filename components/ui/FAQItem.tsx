// components/sections/FAQItem.tsx
"use client";

import { useState } from "react";
import Icon from "../ui/Icon";

type FAQItemProps = {
  question: string;
  answer: string;
  variant?:"primary"|"secondary";
};
const variantStyles = {
  primary:"bg-neutral-white",
  secondary:"bg-neutral-soft"
}

export default function FAQItem({ question, answer,  variant ="primary", }: FAQItemProps) {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-neutral-soft py-md px-md rounded-sm mt-xs ${variantStyles[variant]}`}>
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
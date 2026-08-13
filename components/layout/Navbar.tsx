"use client";

import { useState } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import Container from "./Container";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-neutral-soft bg-neutral-white relative z-50">
      <Container>
        <div className="flex items-center justify-between py-md px-sm">
          <Link href="/" className="flex items-center gap-xs">
            <CldImage
              src="Kuma Tako Ranch/Logo/Logo"
              alt="Kuma Tako Ranch"
              width={36}
              height={36}
            />
            <span className="text-h3 font-bold">Kuma Tako Ranch</span>
          </Link>

          <div className="hidden min-[900px]:flex items-center gap-lg">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-body">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden min-[900px]:block">
            <Button href="/stay" variant="primary" size="md">
              Book Now
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-[900px]:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={isOpen ? "x" : "menu"} size="md" />
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="min-[900px]:hidden absolute top-full left-0 right-0 bg-neutral-white border-b border-neutral-soft flex flex-col items-start gap-md p-lg z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-body"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/stay" variant="primary" size="md" onClick={() => setIsOpen(false)}>
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
}
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
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="border-b border-neutral-soft bg-neutral-white relative z-50">
      <Container>
        <div className="flex items-center justify-between py-md px-sm">
          <Link href="/" className="flex items-center gap-xs min-w-0 flex-1 sm:flex-initial">
            <CldImage src="Kuma Tako Ranch/Logo/Logo" alt="Kuma Tako Ranch" width={36} height={36} className="shrink-0" />
            <span className="text-h3 font-bold truncate">Kuma Tako Ranch</span>
          </Link>

          <div className="hidden min-[900px]:flex items-center gap-lg">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopDropdown(link.href)}
                  onMouseLeave={() => setOpenDesktopDropdown(null)}
                >
                  <button className="flex items-center gap-xs text-small" aria-haspopup="true" aria-expanded={openDesktopDropdown === link.href}>
                    {link.label}
                    <Icon name="chevron-down" size="xs" />
                  </button>
                  {openDesktopDropdown === link.href && (
                    <div className="absolute top-full left-0 pt-sm">
                      <div className="bg-neutral-white border border-neutral-soft rounded-sm shadow-md flex flex-col min-w-[180px] py-xs">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-small px-md py-sm hover:bg-neutral-soft"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="text-small">
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden min-[900px]:block">
            <Button href="/stay" variant="primary" size="md">Book Now</Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="min-[900px]:hidden" aria-label="Toggle menu">
            <Icon name={isOpen ? "x" : "menu"} size="md" />
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="min-[900px]:hidden absolute top-full left-0 right-0 bg-neutral-white border-b border-neutral-soft flex flex-col items-start gap-md p-lg z-50">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="w-full">
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === link.href ? null : link.href)}
                  className="flex items-center justify-between w-full text-body"
                  aria-expanded={openMobileDropdown === link.href}
                >
                  {link.label}
                  <Icon name={openMobileDropdown === link.href ? "chevron-up" : "chevron-down"} size="sm" />
                </button>
                {openMobileDropdown === link.href && (
                  <div className="flex flex-col gap-sm mt-sm pl-md">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="text-small text-text-secondary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-body">
                {link.label}
              </Link>
            )
          )}
          <Button href="/stay" variant="primary" size="md" onClick={() => setIsOpen(false)}>Book Now</Button>
        </div>
      )}
    </nav>
  );
}
"use client"
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import Container from "./Container";
import Icon from "../ui/Icon";

import {
  footerColumns,
  footerContact,
  footerSocials,
  footerTagline,
} from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-primary-dark-green p-2xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
          {/* Branding */}
          <div className="flex flex-col gap-xs">
            <div className="flex flex-row gap-sm">
            <CldImage
              src="Kuma Tako Ranch/Logo/Logo.White"
              alt="Kuma Tako Ranch"
              width={36}
              height={36}
            />
            <h2 className="text-h3 text-neutral-white">
              Kuma Tako Ranch
            </h2>
            </div>
            <p className="text-small text-neutral-white/80">
              {footerTagline}
            </p>

            <div className="flex gap-sm mt-xs">
              {footerSocials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                >
                  <Icon
                    name={social.name}
                    size="sm"
                    className="text-neutral-white"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer link columns */}
          {footerColumns.map((column) => (
            <div
              key={column.heading}
              className="flex flex-col gap-sm"
            >
              <h3 className="text-small font-semibold text-neutral-white">
                {column.heading}
              </h3>

              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-small text-neutral-white/80"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Contact */}
          <div className="flex flex-col gap-sm">
            <h3 className="text-small font-semibold text-neutral-white">
              Contact
            </h3>

            <div className="flex items-start gap-xs">
              <Icon
                name="map-pin-house"
                size="sm"
                className="text-neutral-white mt-0"
              />

              <p className="text-small text-neutral-white/80">
                {footerContact.address}
              </p>
            </div>

            <div className="flex items-start gap-xs">
              <Icon
                name="mail"
                size="sm"
                className="text-neutral-white mt-0"
              />

              <a
                href={`mailto:${footerContact.email}`}
                className="text-caption text-neutral-white/80"
              >
                {footerContact.email}
              </a>
            </div>

            <div className="flex items-start gap-xs">
              <Icon
                name="phone"
                size="sm"
                className="text-neutral-white"
              />

              <a
                href={`tel:${footerContact.phone}`}
                className="text-small text-neutral-white/80"
              >
                {footerContact.phone}
              </a>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
import Link from "next/link";
import Container from "./Container";
import {navLinks} from "@/data/navigation";


export default function Navbar() {
  return (
    <nav className="border-b border-neutral-soft bg-neutral-white">
      <Container>
        <div className="flex items-center justify-between py-md px-sm">
          <Link href="/" className="text-h3 font-bold">
            Kuma Tako Ranch
          </Link>

          <div className="flex items-center gap-lg">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-body">
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/stay"
            className="bg-primary-green text-neutral-white px-lg py-sm rounded-md font-semibold"
          >
            Book Now
          </Link>
        </div>
      </Container>
    </nav>
  );
}
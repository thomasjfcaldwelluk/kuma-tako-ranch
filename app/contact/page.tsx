import HomeContact from "@/components/sections/HomeContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kuma Tako Ranch",
  description: "Get in touch with Kuma Tako Ranch for any inquiries or reservations. We're here to help make your mountain getaway experience unforgettable.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <main>
      <HomeContact imagePublicId="Kuma Tako Ranch/House Images/Outside/contact"
        alt="image of house at night" />
    </main>
  );
}

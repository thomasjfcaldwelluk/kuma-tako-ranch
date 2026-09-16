import { Metadata } from "next";
import AboutUs from "@/components/sections/AboutUs";


export const metadata: Metadata = {
  title: "About Kuma Tako Ranch",
  description: "Learn more about Kuma Tako Ranch and what makes our mountain getaway special. Discover our story, values, and the unique experiences we offer.",
  alternates: {
    canonical: "/about",
  },
};



export default function About() {
  return (
    <AboutUs />
  );
}
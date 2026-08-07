// data/about.ts
import { About } from "@/types/about";

export const aboutContent: About = {
  title: "Our Story",
  subtitle: "Three generations, one family, one mountain",
  description: "Lorem ipsum... (your real story text)",
  images: [
    "kuma-tako-ranch/about/family",
    "kuma-tako-ranch/about/ranch-view",
    "kuma-tako-ranch/about/sunset",
  ],
  values: [
    {
      icon: "home",
      title: "Family-Run",
      description: "Cared for by the same family for generations",
    },
    {
      icon: "mountain",
      title: "Great View",
      description: "Enjoy the mountains and scenery all day",
    },
    {
      icon: "paw",
      title: "Wildlife",
      description: "Spot all types of wildlife during your stay",
    },
    {
      icon: "heart",
      title: "Personal Touch",
      description: "Real hosts, real hospitality",
    },
  ],
};
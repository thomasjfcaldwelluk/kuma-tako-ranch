import { homeGallery } from "@/data/gallery";
import HomeGallery from '@/components/sections/HomeGallery'
import Header from "@/components/ui/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Explore the Kuma Tako Ranch photo gallery, showcasing the beauty of our mountain getaway, scenic views, and outdoor adventures.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage(){
  return (
    <main>
      <Header title="Ranch & Mountain Gallery" as="h1"/>
      <HomeGallery images={homeGallery}/>
    </main>
  );
}

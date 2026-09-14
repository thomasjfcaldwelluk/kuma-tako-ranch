import { homeGallery } from "@/data/gallery";
import HomeGallery from '@/components/sections/HomeGallery'
import Header from "@/components/ui/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Explore the Kuma Tako Ranch photo gallery, showcasing the beauty of our mountain getaway, scenic views, and outdoor adventures. Get a glimpse of the unforgettable experiences that await you.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage(){
  return (
    <main>
      <Header title="Gallery" />
      <HomeGallery images={homeGallery}/>
    </main>
  );
}

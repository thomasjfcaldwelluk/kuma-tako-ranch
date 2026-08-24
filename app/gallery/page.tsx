import { homeGallery } from "@/data/gallery";
import HomeGallery from '@/components/sections/HomeGallery'
import Header from "@/components/ui/Heading";

export default function GalleryPage(){
  return (
    <div>
      <Header title="Gallery" />
      <HomeGallery images={homeGallery}/>
    </div>
  );
}

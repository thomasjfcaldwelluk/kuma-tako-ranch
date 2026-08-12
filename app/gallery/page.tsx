import { homeGallery } from "@/data/gallery";
import HomeGallery from '@/components/sections/HomeGallery'

export default function GalleryPage(){
  return (
    <div>
      <h1>Gallery Page</h1>
      <HomeGallery images={homeGallery}/>
    </div>
  );
}

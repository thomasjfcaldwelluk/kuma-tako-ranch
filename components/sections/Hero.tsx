import { CldImage } from "next-cloudinary";


export default function Hero() {
  return (
    <div>
      <CldImage 
      src="https://res.cloudinary.com/djjqsmlei/image/upload/q_auto/f_auto/v1786014672/Kuma%20Tako%20Ranch/Hero/heroImage_fyhrnl.webp"
      alt="Kuma Tako Ranch at sunset"
      fill
    priority
    className="object-cover"
/>
      <h1>Welcome to Our Property</h1>
      <h3>Discover the perfect place to stay</h3>
    </div>
  );
}

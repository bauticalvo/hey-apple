import { FirstProduct } from "../Components/Home/FirstProduct";
import { GalleryProduct } from "../Components/Home/GalleryProduct";
import { HeroSection } from "../Components/Home/HeroSection";
import { InfoSection } from "../Components/Home/InfoSection";
import { SecondProduct } from "../Components/Home/SecondProduct";
import { ThirdProduct } from "../Components/Home/ThirdProduct";


export const Home = () => {

  return (
    <div className="min-h-[90vh] mt-[7.1vh] flex flex-col justify-center items-center">
        <HeroSection />
        <InfoSection />
        <FirstProduct />
        <SecondProduct />
        <ThirdProduct />
        <GalleryProduct />
    </div>
  );
};
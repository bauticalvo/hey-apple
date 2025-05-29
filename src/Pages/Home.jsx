import { useEffect, useState } from "react";
import { FirstProduct } from "../Components/Home/FirstProduct";
import { GalleryProduct } from "../Components/Home/GalleryProduct";
import { HeroSection } from "../Components/Home/HeroSection";
import { InfoSection } from "../Components/Home/InfoSection";
import { SecondProduct } from "../Components/Home/SecondProduct";
import { ThirdProduct } from "../Components/Home/ThirdProduct";
import { LocationSection } from "../Components/Home/LocationSection";


export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen is below md (Tailwind's md is 768px)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  return (
    <div className="min-h-[90vh] mt-[7.1vh] flex flex-col justify-center items-center">
        <HeroSection isMobile={isMobile} />
        <InfoSection />
        {/* <FirstProduct /> */}
        <SecondProduct />
        <ThirdProduct/>
        <GalleryProduct />
        <LocationSection />
    </div>
  );
};
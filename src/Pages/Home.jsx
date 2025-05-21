import { FirstProduct } from "../Components/Home/FirstProduct";
import { HeroSection } from "../Components/Home/HeroSection";
import { InfoSection } from "../Components/Home/InfoSection";
import { SecondProduct } from "../Components/Home/SecondProduct";



export const Home = () => {
  return (
    <div className="min-h-[90vh] mt-[7.1vh] bg-background flex flex-col justify-center items-center">
        <HeroSection />
        <InfoSection />
        <FirstProduct />
        <SecondProduct />
    </div>
  );
};
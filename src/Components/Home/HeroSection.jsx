

export const HeroSection = () => {
  return (
    <div className="h-[90vh] px-2 w-full flex justify-center items-center">
        <section className="h-full w-full rounded-2xl relative ">
            <video 
                src="/Videos/iphone-scene2.mp4"
                className="h-full w-full rounded-2xl object-cover"
                autoPlay
                muted
            />
            <h1 className="text-background text-6xl absolute z-10 top-[10vh] left-[2vw] ">
                
            </h1>            
        </section>
    </div>
  );
};


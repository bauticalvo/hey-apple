

export const HeroSection = () => {
  return (
    <div className="h-[90vh] px-2   w-full flex justify-center items-center">
        <section className="h-full w-full rounded-2xl bg-text  ">
            <video 
                src="/Videos/iphone-scene.mp4"
                className="h-full w-full rounded-2xl object-cover"
                autoPlay="true"
                loop="false"
                muted="true"
            />
        </section>
    </div>
  );
};
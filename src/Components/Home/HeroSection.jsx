import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PointButton from '../Custom/PointButton';
import { Loader } from '../Custom/Loader';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = ({ isMobile }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !isVideoLoaded) return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scale: 0.95,
        y: -40,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.from([titleRef.current, descriptionRef.current, buttonRef.current], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isVideoLoaded]);

  return (
    <div className="h-[92vh] px-2 w-full flex justify-center items-center overflow-hidden relative">
      {!isVideoLoaded && <Loader />}

      <section
        ref={containerRef}
        className="h-full w-full rounded-2xl relative overflow-hidden will-change-transform"
      >
        <video
          src="/Videos/iphone_responsive.9s83a2.mp4"
          className="h-full w-full rounded-2xl object-cover xl:hidden"
          autoPlay
          muted
          defaultMuted
          playsInline
          webkitPlaysInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
        />
        <video
          src="/Videos/iphone.9s83a2.mp4"
          className="h-full w-full rounded-2xl object-cover hidden xl:flex"
          autoPlay
          muted
          defaultMuted
          playsInline
          webkitPlaysInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
        />

        <div className="text-background flex flex-col h-full justify-between 
          p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 
          absolute z-10 top-0 left-0 w-full">
            <div className='flex items-start lg:items-end h-1/2 pb-4' > 
              <h1
                ref={titleRef}
                className="font-semibold italic
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl
                w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
                El futuro tiene <br/> Tu nombre.
              </h1>
            </div>
            <div className="space-y-4 flex flex-col items-start justify-end lg:items-start h-1/2 pt-4">
              <p
                ref={descriptionRef}
                className="font-medium italic
                text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl
                w-full sm:w-4/5 md:w-3/4 lg:w-1/3 2xl:w-1/2">
                <span className="text-footer">
                  Ser Apple te acerca a los productos que cambiaron el mundo.
                </span>{' '}
                Empezá por el tuyo.
              </p>
              <div
                ref={buttonRef}
                className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-full p-[2px]">
                <PointButton text_1={'Más información'} text_2={'Más información'} link={'/iphone'} style={true} />
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

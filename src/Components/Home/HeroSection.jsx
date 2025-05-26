'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PointButton from '../Custom/PointButton';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // GSAP animation
    if (!containerRef.current) return;

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
    <div className="h-[92vh] px-2 w-full flex justify-center items-center overflow-hidden">
      <section
        ref={containerRef}
        className="h-full w-full rounded-2xl relative overflow-hidden will-change-transform"
      >
        <video
          src={isMobile ? "/Videos/iphone_herosection_responsive.mp4" : "/Videos/iphone_herosection.mp4"}
          className="h-full w-full rounded-2xl object-cover "
          autoPlay
          muted
        />
        <div className="text-background flex flex-col h-full justify-between 
            p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 
            absolute z-10 top-0 left-0 w-full">
          <h1 className="
            font-semibold italic
            text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
            w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2
            ">
            El futuro tiene tu nombre.
          </h1>
          <div className='space-y-4'>
            <p className="
              font-medium italic
              text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl
              w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2
              ">
              <span className="text-footer">
                Cada producto Apple es una herramienta para cambiar el mundo.
              </span>{' '}
              Empezá por el tuyo.
            </p>
            <div className='w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-full p-1'>
              <PointButton text_1={'Más información'} text_2={'Más información'} link={'/iphone'} style={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

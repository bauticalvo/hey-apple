'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scale: 0.95, // Reducción MUY leve
        y: -40, // Baja ligeramente
        ease: 'power2.out', // Efecto de aceleración
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top', // Hace que el efecto dure mientras se va scrolleando hacia afuera
          scrub: 1.5, // Más lento, más suave
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[92vh] px-2 w-full flex justify-center items-center overflow-hidden">
      <section
        ref={containerRef}
        className="h-full w-full rounded-2xl relative overflow-hidden will-change-transform"
      >
        <video
          src="/Videos/iphone_herosection.mp4"
          className="h-full w-full rounded-2xl object-cover"
          autoPlay
          muted
        />
        <div className="text-background flex flex-col h-full justify-between p-20 absolute z-10 top-0 left-0">
          <h1 className="text-9xl w-1/2 italic font-semibold">
            El futuro tiene tu nombre.
          </h1>
          <p className="text-4xl w-1/2 font-medium italic">
            <span className="text-footer">
              Cada producto Apple es una herramienta para cambiar el mundo.
            </span>{' '}
            Empezá por el tuyo.
          </p>
        </div>
      </section>
    </div>
  );
};

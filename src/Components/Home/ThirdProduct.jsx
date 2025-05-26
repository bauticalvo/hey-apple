import { motion } from 'framer-motion';
import PointButton from '../Custom/PointButton';
import Spline from '@splinetool/react-spline';
import { Suspense, useRef, useEffect } from 'react';

export const ThirdProduct = () => {
  const splineRef = useRef(null);

  // Handler for when Spline is loaded
  const handleSplineLoad = (spline) => {
    splineRef.current = spline;
  };

  const triggerSplineAnimation = () => {
    if (splineRef.current) {
      splineRef.current.emitEvent('mouseUp', 'ipad');
      // Or, if you want to play an animation directly:
      // splineRef.current.playAnimation('AnimationName');
    }
  };

  // Auto-trigger animation on small screens
  useEffect(() => {
    const checkAndTrigger = () => {
      if (window.innerWidth < 900) {
        triggerSplineAnimation();
      }
    };
    checkAndTrigger();
    window.addEventListener('resize', checkAndTrigger);
    return () => window.removeEventListener('resize', checkAndTrigger);
  }, []);

  const handleMouseUp = () => {
    triggerSplineAnimation();
  };

  return (
    <div
      className="h-auto xl:h-[90vh] w-full p-6 m- bg-background flex flex-col xl:flex-row"
      onMouseEnter={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      <section className="flex flex-col h-full items-center justify-center p-10 space-y-8  w-full xl:w-[40%] bg-french-grey rounded-2xl ">
        <div className='flex flex-col w-full items-start space-y-3'>
            <h1 className="text-5xl md:text-6xl font-bold italic underline underline-offset-8 text-text">
              iPad
            </h1>
            <h2 className='text-lg md:text-xl text-hey-green font-semibold'>
              Donde nacen las ideas
            </h2>
        </div>
        <div className='w-full flex flex-col space-y-3'>
            <p className="w-[80%] leading-relaxed text-justify">
                <span className="text-dim-grey block">
                    Dales a tus ideas el espacio que se merecen.
                </span>
                <span className="text-black font-medium">
                Escultura en 3D, composición musical o arte en Adobe Fresco. La pantalla táctil completamente envolvente del iPad es el lienzo perfecto para darle rienda suelta a tu creatividad.
                </span>
            </p>

        </div>
        <div className='w-full flex justify-start pt-4'>
            <div className='w-1/2 '>
                <PointButton text_1="Ver más" text_2="iPad" link={"/ipad"} />
            </div>
        </div>
    </section>

    <motion.section
      className="h-full w-full xl:w-[60%] relative overflow-visible"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Suspense fallback={<div className='h-full flex justify-center items-center font-bold text-3xl'>
                                <h1>Cargando...</h1>
                              </div>}>
        <Spline
          scene={"/Scenes/ipad.splinecode"}
          onLoad={handleSplineLoad}
        />
      </Suspense>
    </motion.section>
    </div>
  );
};

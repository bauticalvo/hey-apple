import { motion } from 'framer-motion';
import { Canvas,  } from '@react-three/fiber';
import { Iphone } from '../Models/Iphone_video';
import PointButton from '../Custom/PointButton';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';



export const FirstProduct = () => {
  return (
    <div className="h-auto xl:h-[90vh] w-full p-6 m-20 bg-background flex flex-col xl:flex-row">
      <section className="flex flex-col h-full items-center justify-center p-10 space-y-8 w-full xl:w-[40%] bg-french-grey rounded-2xl ">
        <div className='flex flex-col w-full items-start space-y-3'>
            <h1 className="text-5xl md:text-6xl font-bold italic underline underline-offset-8 text-text">
              iPhone
            </h1>
            <h2 className='text-lg md:text-xl text-hey-green font-semibold'>
              Guarda tus experiencias
            </h2>
        </div>
        <div className='w-full flex flex-col space-y-3'>
            <p className="w-[80%] leading-relaxed text-justify">
                <span className="text-dim-grey block">
                  El iPhone no solo saca fotos, atrapa emociones, recuerdos, detalles.
                </span>
                <span className="text-black font-medium">
                  Con iPhone, capturar una foto increíble o grabar un video impactante es tan simple como tocar la pantalla. Todo funciona con fluidez, el detalle es asombroso y el color se ve tal como lo recordás. Porque cuanto menos pensás en cómo hacerlo, más presente estás en el momento.
                </span>
            </p>

        </div>
        <div className='w-full flex justify-start pt-4'>
            <div className='w-1/2 '>
                <PointButton text_1="Ver más" text_2="iPhone" link={"/iphone"} />
            </div>
        </div>
    </section>

    <motion.section
      className="h-full w-full xl:w-[60%] relative overflow-visible"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Canvas 
      camera={{ position: [-10, 0, 0], fov: 10 }}
      style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense >
          <Iphone />
        </Suspense>
        <OrbitControls zoom={false} />
      </Canvas>
    </motion.section>
    </div>
  );
};

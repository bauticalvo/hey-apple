import { motion } from 'framer-motion';
import { Canvas,  } from '@react-three/fiber';
import {  OrbitControls } from '@react-three/drei';
import { Iphone } from '../Models/Iphone_video';



export const FirstProduct = () => {
  return (
    <div className="min-h-[100vh] w-full p-2 m-20 bg-background flex">
      <section className="flex flex-col space-y-4 px-20 w-1/3 h-full">
        <h2 className="text-xl text-muted">Guarda tus experiencias</h2>
        <h1 className="text-4xl font-bold text-primary">iPhone</h1>
        <p className="text-lg text-secondary">
          El iPhone no solo saca fotos, atrapa emociones, recuerdos, detalles.
        </p>
      </section>

      <motion.section
        className="h-full w-2/3 relative overflow-visible"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Canvas 
        camera={{ position: [-10, 0, 0], fov: 10 }}
        style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 2]} />
          <Iphone />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </motion.section>
    </div>
  );
};

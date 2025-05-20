import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';



export const FirstProduct = () => {
    return (
        <div className="min-h-[100vh] w-full p-2 m-20 bg-background flex">
            <section className="flex flex-col space-y-4 px-20 w-1/3 h-full">
                <h2>Guarda tus experiencias</h2>
                <h1 className="text-4xl">Iphone</h1>
                <p>
                    El iPhone no solo saca fotos, atrapa emociones, recuerdos, detalles.
                </p>

            </section>
            <motion.section 
                className="h-full w-2/3 relative overflow-visible"
            >
                <Spline scene="/Scenes/scene.splinecode" />
            </motion.section>
        </div>
    )

}
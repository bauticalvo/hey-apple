import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import PointButton from '../Custom/PointButton';

// SoundWave component for the wave animation
const SoundWave = ({ active }) => {
    return (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0.7, opacity: 0.5 }}
                    animate={active ? { 
                        scale: [0.7, 1.5, 2.2], 
                        opacity: [0.5, 0.3, 0] 
                    } : { scale: 0.7, opacity: 0 }}
                    transition={{
                        duration: 1.2,
                        repeat: active ? Infinity : 0,
                        repeatDelay: 0.2 * i,
                        delay: 0.2 * i,
                        ease: "easeOut"
                    }}
                    style={{
                        position: 'absolute',
                        width: 220 + i * 40,
                        height: 220 + i * 40,
                        borderRadius: '50%',
                        border: '4px solid rgba(167, 218, 216, 0.5)',
                        boxShadow: '0 0 32px rgba(167, 218, 216, 0.5)',
                        pointerEvents: 'none',
                    }}
                />
            ))}
        </div>
    );
};

export const SecondProduct = () => {
    const audioRef = useRef(null);
    const [waveActive, setWaveActive] = useState(false);
    const waveTimeout = useRef(null);

    const handleMouseEnter = () => {
        if (waveTimeout.current) clearTimeout(waveTimeout.current);
        waveTimeout.current = setTimeout(() => {
            setWaveActive(true);
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        }, 2000);
    };

    const handleMouseLeave = () => {
        if (waveTimeout.current) {
            clearTimeout(waveTimeout.current);
            waveTimeout.current = null;
        }
        setWaveActive(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="h-[90vh] w-full p-6 m-20  flex">
            <motion.section 
                className="h-full w-[60%] relative overflow-visible"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Spline scene="/Scenes/scene.splinecode" />
                <audio ref={audioRef} src="/Audio/bad_liar.mp3" />
                <SoundWave active={waveActive} />
            </motion.section>

            <section className="flex flex-col h-full items-center justify-center p-10 space-y-8 w-[40%] bg-french-grey rounded-2xl ">
                <div className='flex flex-col w-full items-start space-y-3'>
                    <h1 className="text-5xl md:text-6xl font-bold italic underline underline-offset-8 text-text">
                        Airpods
                    </h1>
                    <h2 className='text-lg md:text-xl text-hey-green font-semibold'>
                        El mundo suena como vos querés
                    </h2>
                </div>
                <div className='w-full flex flex-col space-y-3'>
                    <p className="w-[80%] leading-relaxed text-justify">
                        <span className="text-dim-grey block">
                            En Hey Apple creemos que el sonido no debe interrumpir, sino acompañar.
                        </span>
                        <span className="text-black font-medium">
                            Con el Audio Espacial personalizado y seguimiento dinámico de la cabeza, te sumergís en una experiencia tridimensional sorprendente —como en el cine. Diseñamos conexiones invisibles pero inolvidables, que entienden tu ritmo, se conectan solas y liberan tus manos —<span className="italic font-normal">y tu mente</span>.
                        </span>
                    </p>

                </div>
                <div className='w-full flex justify-start pt-4'>
                    <div className='w-1/2 '>
                        <PointButton text_1="Ver más" text_2="Airpods" link={"/airpods"} />
                    </div>
                </div>
            </section>
        </div>
    )
}
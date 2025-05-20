import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

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

    const handleMouseEnter = () => {
        setWaveActive(true);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setWaveActive(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="min-h-[100vh] w-full p-2 m-20 bg-background flex">
            <motion.section 
                className="h-full w-2/3 relative overflow-visible"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Spline scene="/Scenes/scene.splinecode" />
                <audio ref={audioRef} src="/Audio/bad_liar.mp3" />
                <SoundWave active={waveActive} />
            </motion.section>
            <section className="flex flex-col space-y-4 w-1/3 h-full">
                <h2>El mundo suena como vos queres</h2>
                <h1 className="text-4xl">Airpods</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, voluptas?
                </p>

            </section>

        </div>
    )
}
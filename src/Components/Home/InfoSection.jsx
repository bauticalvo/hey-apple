import { StyledLabel } from "../Custom/StyledLabel"
import { motion } from "framer-motion"

export const InfoSection = () => {
    return(
        <div className=" h-auto lg:pt-8 w-full flex flex-col space-y-4 
            px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-44 
            items-start">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="h-1/2 flex items-end"
            >
                <h1 className="font-bold italic
                    text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl
                ">
                    Hey Apple.
                </h1>
                
            </motion.div>
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-1 h-fit"
                >
                    <p className="mt-2 text-sm sm:text-base md:text-lg italic text-text font-bold">
                    “Hay quienes compran tecnología. Y hay quienes entienden lo que es Apple.”
                    </p>
                </motion.div>
            <section className="
                pt-8
                h-1/2 w-full flex flex-col lg:flex-row
                items-start 
            ">
                
                <div className="hidden xl:flex"></div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="
                    col-span-1 sm:col-span-1 lg:col-span-2
                    text-base sm:text-lg md:text-xl lg:text-3xl 
                    text-text-op font-bold italic mt-2
                ">
                    <div>
                        <span className="text-text">Somos Hey Apple.</span> Nacimos para transmitir la esencia y filosofia de Apple y llevar la innovación más allá de los límites conocidos.
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
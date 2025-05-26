import { StyledLabel } from "../Custom/StyledLabel"
import { motion } from "framer-motion"

export const InfoSection = () => {
    return(
        <div className="h-screen w-full flex flex-col space-y-8 
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
            <section className="
                pt-8 sm:pt-12 md:pt-16 lg:pt-20
                h-1/2 w-full
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                items-start justify-between gap-4
            ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-1 h-fit"
                >
                    <StyledLabel />
                </motion.div>
                <div className="col-span-1 hidden xl:flex"></div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="
                    col-span-1 sm:col-span-1 lg:col-span-2
                    text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl
                    text-text-op font-bold italic mt-2 px-0 sm:px-4 md:px-6 lg:px-10
                ">
                    <div>
                        <span className="text-text">Somos Hey Apple.</span> Nacimos para transmitir la esencia y filosofia de Apple y llevar la innovación más allá de los límites conocidos.
                    </div>
                    <div className="flex flex-col items-start mt-6 sm:mt-8 md:mt-10">
                        <p className="mt-2 text-sm sm:text-base md:text-lg italic text-text">
                        “Hay quienes compran tecnología. Y hay quienes entienden lo que es Apple.”
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
import { Whatsapp_url } from "../../Data/data"
import PointButton from "../Custom/PointButton"
import { motion } from "framer-motion"

export const Embajadores = () => {


    return(
        <div className=" h-auto py-20 lg:py-40 w-full flex flex-col space-y-4 
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
                text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-7xl
            ">
                Embajadores Ser Apple.
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
                ¿Estas listo para transformar sueños en metas?
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
                text-text font-bold italic mt-2
            ">
                <div>
                        Ser Embajador Ser Apple es más que representar una marca. Es formar parte de una comunidad apasionada por la innovación, el diseño y la forma en que Apple cambia el mundo. Es conectar con otros, inspirar y construir juntos.
                        <br/><br/> <span className="text-text-op">Ya sos parte de algo distinto.</span> Ahora es momento de hacerlo juntos.
                        Escribinos y activá tu rol como Embajador Ser Apple.
                </div>
                <div className="flex flex-col w-full lg:w-1/2 items-start mt-6 sm:mt-8 md:mt-10">
                        <PointButton 
                            text_1={"Contactanos"}
                            text_2={"Contactanos"}
                            style={true}
                            link={Whatsapp_url}
                            target={"1"}
                        />
                </div>
            </motion.div>
        </section>
    </div>
       
    )
}
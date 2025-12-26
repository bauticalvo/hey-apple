import { motion } from "framer-motion"
import { galleryData } from "../../Data/data"
import { Hovercard } from "../../Components/Custom/Hovercard"


export const Products = () => {

    return (
        <div className="h-auto w-full flex flex-col ">
            <section className="h-fit w-full flex flex-col space-y-0 py-10 lg:py-20 items-start px-4 md:px-16 lg:px-28 2xl:px-40">
            <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="h-1/2 w-full flex items-end mt-20"
            >
                <h1 className="font-bold italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl">
                    Ecosistema Ser Apple.
                </h1>
            </motion.div>
            <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="h-1/2 w-full lg:w-2/3 flex items-end mt-20"
            >
                <p className="font-semibold italic text-md md:text-lg lg:text-xl 2xl:text-xl">
               <span className="text-text-op"> En Hey Apple, cada producto está diseñado para potenciar al otro.</span> 
                El ecosistema que creamos no es solo tecnología, es una experiencia fluida donde todos tus dispositivos trabajan en armonía.  
                Descubrí cómo cada parte del ecosistema eleva tu día a día.
                </p>
            </motion.div>

            </section>
            <section className="
                w-full
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
                gap-4 sm:gap-6 lg:gap-8
                px-2 sm:px-6 md:px-12 lg:px-20 2xl:px-24
            ">
                {galleryData.map((item, index) => (
                    <Hovercard 
                        key={index}
                        index={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </section>
        </div>
    )
}
import PointButton from '../Custom/PointButton';
import { motion } from 'framer-motion';
import { galleryData } from '../../Data/data';
import { Hovercard } from '../Custom/Hovercard';

export const GalleryProduct = () => {



    return (
        <div className="w-full flex flex-col items-center space-y-8 mt-10 sm:mt-14 md:mt-16 lg:mt-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col space-y-2 sm:space-y-4 items-center py-8 sm:py-12 md:py-16 lg:py-20"
            >
                <h1 className="italic font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Todos los productos Ser Apple
                </h1>
                <h1 className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-xl">
                    Descubri todos los productos
                </h1>
            </motion.div>
            <section className="
                w-full
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
                gap-4 sm:gap-6 lg:gap-8
                px-2 sm:px-6 md:px-12 lg:px-20 2xl:px-24
            ">
                {galleryData.slice(0,4).map((item, index) => (
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

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 '
            >
                <PointButton text_1="Ver todos los productos" text_2="Ver todos los productos" link="/products" style={true}/>
            </motion.div> 
        </div>
    )
}
import { useNavigate } from 'react-router';
import { usePageTransition } from '../../Hooks/usePageTransition';
import { motion } from 'framer-motion';

export const Hovercard = ({index,title, image, description, link}) => {

    const navigate = useNavigate();
    const { startTransition } = usePageTransition();

  return (
    <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex flex-col space-y-2"
        onClick={() => {
            startTransition(navigate, link); 
        }}
    >
        <div className="w-full h-fit bg-white rounded-xl py-2 px-4 lg:px-8 flex justify-between items-center cursor-pointer">
            <h1 className="font-semibold text-base lg:text-2xl text-text">{title}</h1>
            <p className="font-semibold text-xs lg:text-lg text-dim-grey">{description}</p>
        </div>
        <div className="w-full relative col-span-1 bg-white row-span-1 p-1 flex justify-center items-center rounded-2xl hover:p-0 hover:transition-all hover:duration-300 cursor-pointer group">
            <img src={image} alt={title} className="w-full h-auto object-cover rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-black/20">
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-background">{title}</h1>
            </div>
        </div> 
    </motion.section>
  )
}
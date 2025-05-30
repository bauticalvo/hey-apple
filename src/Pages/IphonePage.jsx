import { StyledLabel } from "../Components/Custom/StyledLabel";
import { OtherExperiencies } from "../Components/Products/OtherExperiencies";
import { motion } from "framer-motion"



export const IphonePage = () => {



  return (
    <div className="min-h-[90vh] mt-[7.1vh] flex flex-col justify-center items-center px-4 md:px-16 lg:px-28 2xl:px-40">
      <section className=" h-auto w-full flex flex-col space-y-0 py-10 lg:py-20 
            items-start">
       <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="h-1/2 w-full flex items-end mt-20"
        >
            <h1 className="font-bold italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl">
                Iphone.
            </h1>
        </motion.div>
        <div className="
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
                <StyledLabel text={"Nosotros"} />
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
                text-text font-semibold italic mt-2 px-0 sm:px-4 md:px-6 lg:px-10
            ">
                <div>
                    <span className="text-text">Somos Hey Apple.</span> Nacimos para transmitir la esencia y filosofia de Apple y llevar la innovación más allá de los límites conocidos.
                </div>
                
            </motion.div>
        </div>
        </section>
        <section className="w-full flex flex-col lg:flex-row h-[60vh] gap-4">
          <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-300">
            <img 
              src="/Images/mac_gallery.jpg"
              alt="mac_gallery"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-300">
            <img 
              src="/Images/mac_gallery.jpg"
              alt="mac_gallery"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </section>

        <section>

        </section>

        <section className="flex flex-col gap-4 w-full h-full">
        <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-300">
            <img 
              src="/Images/imac_gallery.jpg"
              alt="mac_gallery"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-300">
            <img 
              src="/Images/imac_gallery.jpg"
              alt="mac_gallery"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-300">
            <img 
              src="/Images/imac_gallery.jpg"
              alt="mac_gallery"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </section>

        <OtherExperiencies indices={[2,0]} />
    </div>
  );
};
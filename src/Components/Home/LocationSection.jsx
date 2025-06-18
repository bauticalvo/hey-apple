import { StyledLabel } from "../Custom/StyledLabel"
import { motion } from "framer-motion"
import { IoIosArrowRoundForward } from "react-icons/io";
import MotionIcon from "../Custom/MotionIcon";
import { Whatsapp_url} from "../../Data/data"

export const LocationSection = () => {

    const StyledSection = ({title, id, content}) =>{

        return (
            <motion.div className={`w-full h-full bg-white rounded-2xl p-1 hover:p-0 transition-all duration-300 
                ${id === 3 ? "col-span-2" : "col-span-1"}
                ${id === 1 ? "cursor-pointer" : ""}`}
                onClick={id === 1 ? () => window.open(Whatsapp_url) : () => {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.6, delay: `0.${id}`}}
                >
                <div className="w-full h-full bg-background rounded-xl p-4 flex flex-col justify-around ">
                    <h1 className="text-md lg:text-lg 2xl:text-xl font-semibold">{title}</h1>
                    <div className="w-full flex justify-center  ">
                        {
                            id === 1 ? (
                                <h1 className="text-sm lg:text-md 2xl:text-lg flex "> {content} <MotionIcon icon_1={IoIosArrowRoundForward} icon_2={IoIosArrowRoundForward} /> </h1>
                            ) : (
                                <h1 className="text-sm lg:text-md 2xl:text-lg "> {content} </h1>
                            )
                        }
                    </div>
                </div>
            </motion.div>
        )
    }

    const Map = () =>{
        return (
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.451554120526!2d-68.5903371!3d-31.539219999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9681411e275238b1%3A0x9a172a2372162c76!2sPaseo%20Del%20Oeste!5e0!3m2!1ses!2sar!4v1750268969707!5m2!1ses!2sar" 
                    width="600" 
                    height="450" 
                    allowfullscreen="" 
                    style={{ border: 0 }}
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-xl "
                    ></iframe>
        )
    }
    return (
        <div className=" h-auto lg:h-[90vh] w-full flex flex-col space-y-8 my-20
        px-4 sm:px-8 md:px-16 lg:flex-row lg:px-24 xl:px-36 2xl:px-44 
        items-end">
            <section 
                className="w-1/2 h-[90%] rounded-2xl hidden xl:flex bg-white p-1 hover:p-0 transition-all duration-300 "
                id="map"
            >
                <Map />
            </section>
            <section className="w-full h-auto lg:w-1/2 lg:h-full rounded-2xl flex flex-col items-center lg:items-end  lg:py-20 space-y-8" >
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="h-full flex items-center text-center lg:items-end lg:text-end"
                >
                    <h1 className="font-bold italic
                        text-3xl sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-7xl
                    ">
                        Nuestro espacio <br/> Tu próxima decisión.
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full flex justify-center lg:justify-end h-fit"
                >
                    <StyledLabel text={"Local"} />
                </motion.div>
                <div
                    className="w-full h-full grid grid-cols-2 grid-row-2 gap-4 justify-around items-start lg:pl-20 2xl:pl-40  "
                >
                    <StyledSection title="Contacto" content={"Whatsapp"} id={1} />
                    <StyledSection title="Horarios" content={"Lun a Sáb — 9:30-12h | 17-21h "} id={2} />
                    <StyledSection title="Dirección" content={"Paseo Del Oeste, Av. José Ignacio de la Rosa Oeste"} id={3} />
                </div>
                
            </section>
            <section 
                className="w-full h-[40vh] rounded-2xl flex lg:hidden bg-white p-1" 
                id="responsiveMap"
                >
                <Map />
               </section>

    </div>
    )
}
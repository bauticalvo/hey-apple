import { StyledLabel } from "../Custom/StyledLabel"
import { motion } from "framer-motion"
import { IoIosArrowRoundForward } from "react-icons/io";
import MotionIcon from "../Custom/MotionIcon";
import { Whatsapp_url} from "../../Data/data"

export const LocationSection = () => {

    const StyledSection = ({title, id, content}) =>{

        return (
            <div className={`w-full h-full bg-white rounded-2xl p-1 hover:p-0 transition-all duration-300 
                ${id === 3 ? "col-span-2" : "col-span-1"}
                ${id === 1 ? "cursor-pointer" : ""}`}
                onClick={id === 1 ? () => window.open(Whatsapp_url) : () => {}}
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
            </div>
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
                <img
                    src="/Images/maps.png"
                    alt="map"
                    className="w-full h-full object-cover rounded-2xl"
                />
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
                        Nuestro espacio. Tu próxima decisión.
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full h-full grid grid-cols-2 grid-row-2 gap-4 justify-around items-start lg:pl-20 2xl:pl-40  "
                >
                    <StyledSection title="Contacto" content={"Whatsapp"} id={1} />
                    <StyledSection title="Horarios" content={"Lun a Sáb — 9:30-12h | 17-21h "} id={2} />
                    <StyledSection title="Dirección" content={"Paseo Del Oeste, Av. José Ignacio de la Rosa Oeste"} id={3} />
                </motion.div>
                
            </section>
            <section 
                className="w-full h-[40vh] rounded-2xl flex lg:hidden bg-white p-1" 
                id="responsiveMap"
                >
                <img
                    src="/Images/maps.png"
                    alt="map"
                    className="w-full h-full object-cover rounded-2xl"
                />
               </section>

    </div>
    )
}
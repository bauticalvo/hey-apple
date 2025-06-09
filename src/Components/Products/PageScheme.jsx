import { motion } from "framer-motion"
import { OtherExperiencies } from "./OtherExperiencies"
import { StyledLabel } from "../Custom/StyledLabel"



export const PageScheme = ({label, title, description1, indices , images, label2, description2, description3, title2}) => {

    return (
        <div className="min-h-[90vh] mt-[7.1vh] flex flex-col space-y-8 justify-center items-center px-4 md:px-16 lg:px-28 2xl:px-40">
            <section className=" h-fit w-full flex flex-col space-y-8 py-10 lg:py-20 items-start">
                <div className="space-y-2">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="h-1/2 w-full flex items-end mt-20"
                        >
                        <h1 className="font-bold italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl">
                            {title}
                        </h1>  
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-1 h-fit"
                        >
                        <StyledLabel text={label} />
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="
                    col-span-1 sm:col-span-1 lg:col-span-2
                    text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl
                    text-text font-semibold italic mt-2 
                ">
                    <div>
                        {description1}
                    </div>
                    
                </motion.div>
            </section>
            <section className="w-full flex flex-col lg:flex-row h-auto lg:h-[60vh] gap-4">
                <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-500">
                    <div className={`rounded-xl w-full h-full ${title === "Mac." || title === "iMac."  ? "bg-alt-background" : "bg-background"} `}>
                        <img 
                            src={images[0]}
                            alt={title}
                            className="w-full h-full object-contain rounded-xl"
                        />
                    </div>
                </div>
                <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-500">
                    <div className={`rounded-xl w-full h-full ${title === "Mac." ? "bg-alt-background" : title === "iMac." ? "bg-white" : "bg-background"} `}>
                        <img 
                            src={images[1]}
                            alt={title}
                            className="w-full h-full object-contain rounded-xl"
                        />
                    </div>
                </div>
            </section>
    
            <section className="
                    py-8 sm:py-12 md:py-16 lg:py-20
                    h-auto w-full flex flex-col space-y-8
                    items-start justify-between gap-4
                ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-1 h-fit"
                    >
                        <StyledLabel text={label2} style={true} />
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
                            {description2} <br/><br/>
                            <span className="text-text-op">{description3}</span>
                        </div>
                        
                    </motion.div>
            </section>
    
            <section className="flex flex-col gap-4 w-full h-full">
            <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-300">
                <img 
                    src={images[2]}
                    alt={title}
                    className="w-full h-full object-cover rounded-xl"
                />
                </div>
            <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-300">
                <img 
                    src={images[3]}
                    alt={title}
                    className="w-full h-full object-cover rounded-xl"
                />
                </div>
            <div className="bg-white w-full h-full rounded-2xl p-1 hover:p-0 transition-all duration-300">
                <img 
                    src={images[4]}
                    alt={title}
                    className="w-full h-full object-cover rounded-xl"
                />
                </div>
            </section>
    
            <OtherExperiencies title={title2} indices={indices} />
      </div>
    )
}
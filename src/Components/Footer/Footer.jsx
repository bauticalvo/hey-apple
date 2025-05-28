import { useState } from "react"
import { AppleButton } from "../Custom/AppleButton"
import { motion } from 'framer-motion';
import MotionIcon from "../Custom/MotionIcon";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import { navigationArray, Whatsapp_url, Instagram_url  } from "../../Data/data";


export const Footer = ({startTransition}) => {

    const navigate = useNavigate()
    const location = useLocation()

 

    const SocialButton = ({url,text}) =>{

        const [hovered, setHovered] = useState(false)
    
        return (
          <motion.button
            onClick={() => window.open(url)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className='flex items-center space-x-2 text-text text-2xl'
          >
            <span>{text}</span>
            <MotionIcon icon_1={IoIosArrowRoundForward} icon_2={IoIosArrowRoundForward} dark={true} hovered={hovered} plus={22}/>
          </motion.button>
        )
      }
    const TermsButton = ({url,text}) =>{
       return (
        <button
        onClick={() => {
          if(location.pathname === url) return
          startTransition(navigate, `legal${url}`)
      }}
          className=" hover:cursor-pointer"
        >
          {text}
        </button>
      ) 
    }

    return (
        <footer className="flex flex-col h-auto mt-8 xl:h-[90vh] ">
            <section className="h-full w-full flex flex-col space-x-8 md:flex-row p-4 sm:p-8 md:p-12 xl:p-20 2xl:p-32">
                <div className="w-full md:w-1/2 flex flex-col space-y-6 sm:space-y-8 2xl:px-32">
                    <span className="italic text-xl sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                        "No hemos sido los primeros, pero seremos los mejores, porque la innovación es lo que nos distingue."
                    </span>
                    <div className="flex space-x-3 sm:space-x-4">
                        <img
                            src="/Images/steve_jobs.jpg"
                            alt="Steve Jobs"
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full"
                        />
                        <div className="flex flex-col space-y-0">
                            <span className="text-text text-sm sm:text-base md:text-lg">Steve Jobs</span>
                            <span className="text-text-op text-xs sm:text-sm md:text-base">Founder de Apple</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-between mt-8 md:mt-0">
                    <div className="flex flex-row items-start sm:items-start justify-between">
                        <section
                        id="navigation"
                        className="flex flex-col space-y-2 w-full sm:w-1/2 mb-6 sm:mb-0"
                        >
                            <span className="text-text-op text-base sm:text-lg">Navegación</span>
                            {navigationArray.map((item, index) => {

                                const [hovered, setHovered] = useState(false)

                                return(
                                    <motion.div
                                        key={index}
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                    >           
                                        <AppleButton
                                        text={item.title}
                                        link={item.link}
                                        hovered={hovered}
                                        startTransition={startTransition}
                                        /> 
                                    </motion.div>
                            )})}
                            
                        </section>
                        <section
                        id="social"
                        className="flex flex-col space-y-2 w-full sm:w-1/2"
                        >
                            <span className="text-text-op text-base sm:text-lg">Social</span>
                            <div className='flex flex-col space-y-2 '>
                                <SocialButton url={Whatsapp_url} text={"Whatsapp"}/>
                                <SocialButton url={Instagram_url} text={"Instagram"}/>
                            </div>
                        </section>
                    </div>
                    <div className="flex items-center justify-center mt-8 md:mt-0">
                        <img
                            src="/Logos/hey-apple_logo2.png" className="h-12 w-auto sm:h-16 md:h-20 xl:h-28"
                        />
                    </div>
                </div>
            </section>
            <section className='bg-text text-footer flex flex-col space-y-6 xl:space-y-0 xl:flex-row xl:px-8 justify-between items-center py-4 px-2 2xl:px-48 xl:h-[12vh] w-full'>
                <div className="flex space-x-2 text-sm sm:text-base font-semibold">
                  <span>© 2025 Hey Apple. Todos los derechos reservados</span>
                </div>

                <div className="flex flex-col items-center justify-center w-full sm:w-auto sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-sm sm:text-base font-semibold">
                  <TermsButton url={"/privacy"} text={"Política de privacidad"}/>
                  <TermsButton url={"/terms"} text={"Términos  y condiciones"}/>
                </div>

                <div className="flex space-x-2 items-start sm:justify-center text-sm sm:text-base font-semibold">
                  <span>Realizado por </span>
                  <button 
                    className="text-ascensor decoration-ascensor italic underline hover:cursor-pointer"
                    onClick={() => window.open("https://www.elascensor.com.ar/")}
                  >
                    El ascensor</button>
                </div>
           </section>
        </footer>
    )

}
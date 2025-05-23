import { useState } from "react"
import { AppleButton } from "../Custom/AppleButton"
import { motion } from 'framer-motion';
import MotionIcon from "../Custom/MotionIcon";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";



export const Footer = ({startTransition}) => {

    const Whatsapp_url = "https://wa.me/5492644598868?text=Hola%20hey%20apple!%2C%20quiero%20conocer%20mas%20sobre%20sus%20productos"
    const Instagram_url = "https://www.instagram.com/elascensormkt/"
    const navigate = useNavigate()
    const location = useLocation()

    const navigationArray = [
        {
            title: "Inicio",
            link: "/", 
        },
        {
            title: "iPhone",
            link: "/iphone", 
        },
        {
            title: "Mac",
            link: "/mac",
        },
    ]

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
        <footer className="flex flex-col h-[90vh]">
            <section className="h-full w-full flex p-32 ">
                <div className="w-1/2 flex flex-col space-y-8 px-32 ">
                    <span className="italic text-3xl">"No hemos sido los primeros, pero seremos los mejores, porque la innovación es lo que nos distingue."</span>
                    <div className="flex space-x-4">
                        <img
                            src="/Images/steve_jobs.jpg"
                            className="w-12 rounded-full"
                        />
                        <div className="flex flex-col space-y-0">
                            <span className="text-text">Steve Jobs</span>
                            <span className="text-text-op">Founder de Apple</span>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 flex flex-col  justify-between ">
                    <div className="flex  items-start justify-between">
                        <section
                        id="navigation"
                        className="flex flex-col space-y-2 w-1/2"
                        >
                            <span className="text-text-op">Navegación</span>
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
                        className="flex flex-col space-y-2 w-1/2"
                        >
                            <span className="text-text-op">Social</span>
                            <div className='flex flex-col space-y-2 '>
                                <SocialButton url={Whatsapp_url} text={"Whatsapp"}/>
                                <SocialButton url={Instagram_url} text={"Instagram"}/>
                            </div>
                        </section>
                    </div>
                    <div className="flex items-center justify-center">
                        {/* <h1 className="text-8xl font-bold italic">Hey Apple.</h1> */}
                        <img
                            src="/Logos/hey-apple-logo2.png" className="h-auto w-md"
                        />
                    </div>
                </div>
            </section>
            <section className='flex justify-between items-center px-48 bg-text text-footer h-[12vh] w-full'>
                <div className="flex space-x-2  text-md font-semibold">
                  <span> © 2025 Hey Apple. Todos los derechos reservados</span>
                </div>

                <div className="flex space-x-8  text-md font-semibold">
                  <TermsButton url={"/privacy"} text={"Política de privacidad"}/>
                  <TermsButton url={"/terms"} text={"Términos  y condiciones"}/>
                </div>

                <div className="flex space-x-2  text-md font-semibold">
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
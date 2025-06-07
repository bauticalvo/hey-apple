import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router';
import { data_buttons } from '../../Data/data';


export const Header = ({isOpen, setIsOpen, startTransition}) => {
    const navigate = useNavigate();
    const location = useLocation();


    const NavigationButton = ({text, link}) => {
        return (
           <button
            className='text-md font-bold  cursor-pointer hover:scale-110 transition-all duration-300'
            onClick={() => {
                setIsOpen(false);
                if (location.pathname === link) return;
                startTransition(navigate, link); 
            }}
           >   
           {text}
           </button> 
        )
    }

    return (
        <div className="h-[7vh] z-60 fixed top-0 w-full bg-background flex items-center justify-between px-10 ">
            <img 
                src="/Logos/hey-apple_black.png"
                className="h-[5vh] w-auto cursor-pointer  hover:scale-110 transition-all duration-300 "
                onClick={() => {
                    if (location.pathname === "/") return;
                    startTransition(navigate, "/"); 
                } }
            />

                <section className='max-lg:hidden h-full w-full flex items-center justify-evenly'>
                    {
                        data_buttons.slice(1).map((item, index) => {
                            return (
                                <NavigationButton key={index} text={item.text} link={item.link} />
                            )
                        })
                    }
                </section>

                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative text-2xl font-black lg:hidden ${ isOpen ? 'text-text   ' : 'text-text '} flex flex-col justify-center items-end space-y-2`}
                >
                    {/* Primera línea */}
                    <motion.div
                    className={` ${isOpen ? 'w-16 ' : 'w-16 '} h-[2px] bg-text`}
                    animate={{ rotate: isOpen ? 15 : 0, y: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                    {/* Segunda línea */}
                    <motion.div
                    className={`w-16 h-[2px] bg-text`}
                    animate={{ rotate: isOpen ? -15 : 0, y: isOpen ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                </motion.button>
           
        </div>
    )
}

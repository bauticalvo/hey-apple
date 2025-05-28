import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router';
import MotionButton from '../Custom/MotionButton';
import { IoIosArrowRoundForward } from "react-icons/io";
import MotionIcon from '../Custom/MotionIcon';
import { useState } from 'react';
import { data_buttons, Whatsapp_url, Instagram_url } from '../../Data/data';


const Menu = ({ isOpen, setIsOpen, startTransition}) => {




  const NavigationButton = ({text_1, text_2, path}) => {

  const navigate = useNavigate();
  const location = useLocation();

    return (
      <motion.div
        className='font-bold'
        onClick={() => {
          setIsOpen(false);
          if (location.pathname === path) return;
          startTransition(navigate, path); 
        }}
      >
        <MotionButton text_1={text_1} text_2={text_2} dark={true} />
      </motion.div>
    )
  }

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

    return (
          <motion.div   
            className={`fixed z-[50] top-0 w-full h-[90vh] rounded-2xl shadow-black bg-background p-4 shadow-2xl flex flex-col justify-evenly items-center text-text space-y-8
              ${ isOpen ? 'flex' : 'hidden'}`}
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5 }}
          >
            <motion.section className='my-10 p-2 text-xl font-bold flex flex-col items-center space-y-10 md:space-y-20 '>
              {
                data_buttons.map((item, index) => {
                  return (
                    <NavigationButton key={index} text_1={item.text} text_2={item.text} path={item.link} />
                  )
                })
              }
            </motion.section>

            <section className='flex space-x-8 '>
              <SocialButton url={Whatsapp_url} text={"Whatsapp"}/>
              <SocialButton url={Instagram_url} text={"Instagram"}/>
            </section>
           
          </motion.div>
    );
}

export default Menu;

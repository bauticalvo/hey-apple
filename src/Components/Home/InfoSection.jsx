import { StyledLabel } from "../Custom/StyledLabel"
import { FaStar } from "react-icons/fa6";

export const InfoSection = () => {


    return(
        <div className="h-screen w-full flex flex-col space-y-8 px-44 items-start">
            <div className="h-1/2 flex items-end ">
                <h1 className="text-8xl  font-bold italic">Hey Apple.</h1>
            </div>
            <section className="pt-20  h-1/2 w-full grid grid-cols-4 grid-rows-1 items-start justify-between ">

                <StyledLabel className="col-span-1 " />
                <div className="col-span-1"></div>
                <div className="text-2xl text-text-op font-bold italic mt-2 col-span-2 px-10">
                    <div>
                        <span className="text-text">Somos Hey Apple.</span> Nacimos para transmitir la esencia y filosofia de Apple y llevar la innovación más allá de los límites conocidos.
                    </div>
                    <div className="flex flex-col items-start mt-10">
                        
                        <p className="mt-2 text-lg italic text-text">
                        “Hay quienes compran tecnología. Y hay quienes entienden lo que es Apple.”
                        </p>
                    </div>
                </div>
                
            </section>

        </div>
    )

}
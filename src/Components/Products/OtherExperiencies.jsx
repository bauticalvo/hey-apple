import { galleryData } from "../../Data/data";
import { Hovercard } from "../Custom/Hovercard";
import PointButton from "../Custom/PointButton";


export const OtherExperiencies = ({indices, title}) => {

    const productsArray = indices.map(index => galleryData[index]);
  
  
    return (
      <div className="min-h-[90vh] mt-[7.1vh] flex flex-col justify-center items-center">
        <div
          className="flex flex-col w-full space-y-8 items-center lg:justify-between xl:flex-row py-20 lg:py-20   "
        >
          <h1 className="text-3xl text-center md:text-4xl 2xl:text-5xl font-bold italic"> {title ? title : "Ecosistema Ser Apple"} </h1>
          <div className="w-1/2 lg:w-1/6">
            <PointButton text_1={"Ver más"} text_2={"Ver más"} link={"/products"} />
          </div>
        </div>
          <div className="
              w-full
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4
          ">
          {productsArray.map((item, index) => (
              <Hovercard
                  key={index}
                  index={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  link={item.link}
              />
          ))}
        </div>
      </div>
    );
}
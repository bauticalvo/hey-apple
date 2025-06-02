import { PageScheme } from "../../Components/Products/PageScheme";


export const ImacPage = () => {

const images = [
    "/Images/imac/imac4.jpg",
    "/Images/imac/imac5.jpg",
    "/Images/imac/imac3.jpg",
    "/Images/imac/imac2.jpg",
    "/Images/imac/imac1.jpg",
] 

  return (
    <>
      <PageScheme
        label={"Belleza con propósito"}
        title={"iMac."}
        description1={
        "El iMac no es solo una computadora de escritorio. Es arte funcional, tecnología diseñada para inspirar y simplificar. Todo en uno. Todo increíble."
        }
        label2={"Nuevo diseño. Nuevas ideas."}
        description2={
        "El nuevo iMac con chip M3 y una pantalla Retina 5K redefine la experiencia de escritorio. Apple Intelligence transforma la productividad."
        }
        description3={
        "Diseñado para el lugar donde la creatividad sucede: tu escritorio."
        }
        title2={"Complementar tu entorno creativo."}
        indices={[2,5]}
        images={images}
      />
    </>
  );
};
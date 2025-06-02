import { PageScheme } from "../../Components/Products/PageScheme";



export const IphonePage = () => {

const images = [
  "/Images/iphone/iphone1.jpg",
  "/Images/iphone/iphone2.jpg",
  "/Images/iphone/iphone8.jpg",
  "/Images/iphone/iphone7.jpg",
  "/Images/iphone/iphone3.jpg"
] 

  return (
    <>
      <PageScheme
        label={"Diseñado para ser amado"}
        title={"iPhone."}
        description1={"No se trata solo de un teléfono. Se trata de reinventar la manera en la que vivimos, nos comunicamos y creamos. Con cada línea, cada gesto y cada pixel, el iPhone transforma la tecnología en una experiencia humana."}
        label2={"Nuevo modelo."}
        description2={"El iPhone 16 es el último paso en la evolución de la línea iPhone. El primer iPhone diseñado con Apple Intelligence en mente. Personal, privado y poderoso."}
        description3={"El iPhone 16 es el teléfono que necesitas para estar conectado en todo momento."}
        title2={"Acompaña a tu iPhone."}
        indices={[2,0]}
        images={images}
      />
    </>
  );
};
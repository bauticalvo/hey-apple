import { PageScheme } from "../../Components/Products/PageScheme";



export const MacPage = () => {

const images = [
  "/Images/mac/mac2.jpg",
  "/Images/mac/mac3.jpg",
  "/Images/mac/mac4.jpg",
  "/Images/mac/mac5.jpg",
  "/Images/mac/mac1.jpg"
] 

  return (
    <>
      <PageScheme
        label={"Poder sin complicaciones"}
        title={"Mac."}
        description1={
          "El Mac es una herramienta diseñada para creadores, soñadores y pensadores. Su diseño limpio y su potencia silenciosa redefinen lo que una computadora puede ser: bella, funcional y profundamente personal."
        }
        label2={"Nuevo chip. Nuevas posibilidades."}
        description2={
          "El nuevo Mac con chip M4 lleva el rendimiento a otro nivel, pensado para el futuro de la creatividad, con inteligencia integrada que te sigue el ritmo."
        }
        description3={
          "Potencia profesional, batería que dura todo el día y una integración sin esfuerzo con todo tu ecosistema Apple."
        }
        title2={"Tu mundo Apple empieza en Mac."}
        indices={[2,7]}
        images={images}
      />
    </>
  );
};
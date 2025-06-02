import { PageScheme } from "../../Components/Products/PageScheme";


export const IpadPage = () => {

const images = [
    "/Images/ipad/ipad1.jpg",
    "/Images/ipad/ipad2.jpg",
    "/Images/ipad/ipad6.jpg",
    "/Images/ipad/ipad3.jpg",
    "/Images/ipad/ipad5.jpg",
] 

  return (
    <>
      <PageScheme
        label={"La herramienta de los que imaginan"}
        title={"iPad."}
        description1={
        "El iPad no es solo una tablet. Es una hoja en blanco para artistas, un cuaderno para estudiantes, un lienzo para creadores. Donde la potencia se encuentra con la simplicidad."
        }
        label2={"Un nuevo capítulo. Un nuevo Pro."}
        description2={
        "El nuevo iPad Pro con chip M4 y pantalla Ultra Retina redefine lo que significa ser portátil. Más delgado, más potente, más libre."
        }
        description3={
        "Diseñado para quienes piensan con el tacto, crean con el trazo y trabajan con la punta de sus dedos."
        }
        title2={"Diseñado para crecer con tu iPad."}
        indices={[8,6]}
        images={images}
      />
    </>
  );
};
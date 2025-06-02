import { PageScheme } from "../../Components/Products/PageScheme";


export const AirtagPage = () => {

const images = [
    "/Images/airtag/airtag2.jpg",
    "/Images/airtag/airtag8.png",
    "/Images/airtag/airtag4.jpg",
    "/Images/airtag/airtag9.jpg",
    "/Images/airtag/airtag7.jpg",
] 

  return (
    <>
      <PageScheme
        label={"Lo importante siempre contigo"}
        title={"AirTag."}
        description1={
        "El AirTag no es solo un localizador. Es tranquilidad en tu bolsillo. Diseñado para integrarse en tu vida sin estorbar, te ayuda a recuperar lo que más importa."
        }
        label2={"Más inteligente. Más preciso."}
        description2={
            "Con una bateria diseñada para funcionar por mas de un año y resistencia al agua. Conecta el AirTag a tu iPhone o iPad al instante con una configuración de un solo toque. "
        }
        description3={
        "Porque perder algo ya no es una preocupación. Es parte del pasado."
        }
        title2={"Encontra tus cosas mas valiosas."}
        indices={[5,4]}
        images={images}
      />
    </>
  );
};
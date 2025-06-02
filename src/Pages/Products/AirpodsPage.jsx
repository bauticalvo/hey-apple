import { PageScheme } from "../../Components/Products/PageScheme";


export const AirpodsPage = () => {

const images = [
  "/Images/airpods/airpods1.jpg",
  "/Images/airpods/airpods3.jpg",
  "/Images/airpods/airpods7.jpg",
  "/Images/airpods/airpods6.jpg",
  "/Images/airpods/airpods5.jpg"
] 

  return (
    <>
      <PageScheme
        label={"El silencio se siente"}
        title={"AirPods."}
        description1={
          "Los AirPods son más que unos auriculares. Son una experiencia de sonido envolvente, sin cables, sin fricción, sin límites. Diseñados para que desaparezcan y solo quede la música."
        }
        label2={"La evolución del sonido premium."}
        description2={
          "Diseñados para los que escuchan cada detalle. AirPods Max une ingeniería acústica, confort absoluto y diseño icónico en unos audífonos que redefinen la experiencia auditiva."
        }
        description3={
          "Un sonido inmersivo, refinado y profundamente personal. Así suena la innovación."
        }
        indices={[5,0]}
        images={images}
      />
    </>
  );
};
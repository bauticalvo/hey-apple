import { PageScheme } from "../../Components/Products/PageScheme";



export const WatchPage = () => {

const images = [
  "/Images/watch/watch1.jpg",
  "/Images/watch/watch2.jpg",
  "/Images/watch/watch5.jpg",
  "/Images/watch/watch3.jpg",
  "/Images/watch/watch4.jpg"
] 

  return (
    <>
      <PageScheme
        label={"El tiempo, rediseñado"}
        title={"Apple Watch."}
        description1={
        "El Apple Watch es el compañero perfecto para tu salud, tu día y tu vida. Es tecnología en tu muñeca que te cuida, te guía y te conecta, todo el tiempo."
        }
        label2={"Tu salud, más inteligente."}
        description2={
        "Con nuevos sensores de bienestar, el Apple Watch Series 10 detecta más que nunca, ayudado por Apple Intelligence para ofrecerte insights más personales."
        }
        description3={
        "Una evolución que no se ve, pero se siente en cada latido."
        }
        title2={"Acompaña tu ritmo con Apple Watch."}
        indices={[2,5]}
        images={images}
      />
    </>
  );
};
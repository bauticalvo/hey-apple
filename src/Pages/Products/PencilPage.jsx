import { PageScheme } from "../../Components/Products/PageScheme";


export const PencilPage = () => {

const images = [
    "/Images/pencil/pencil3.jpg",
    "/Images/pencil/pencil1.jpg",
    "/Images/pencil/pencil4.jpg",
    "/Images/pencil/pencil2.jpg",
    "/Images/pencil/pencil5.webp",
] 

  return (
    <>
      <PageScheme
        label={"La herramienta del creador"}
        title={"Apple Pencil."}
        description1={
        "El Apple Pencil es una extensión de tu mente. Preciso, fluido, y siempre listo, convierte el pensamiento en trazo sin esfuerzo alguno."
        }
        label2={"Trazos más vivos que nunca."}
        description2={
        "El nuevo Apple Pencil Pro detecta presión, inclinación y ahora tus gestos con mayor naturalidad gracias a Apple Intelligence."
        }
        description3={
        "Para artistas, diseñadores, estudiantes o soñadores: todo empieza con una línea."
        }
        title2={"La herramienta precisa para tu inspiración."}
        indices={[4,5]}
        images={images}
      />
    </>
  );
};
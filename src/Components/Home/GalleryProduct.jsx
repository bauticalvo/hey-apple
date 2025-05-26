import { useNavigate } from 'react-router';
import { usePageTransition } from '../../Hooks/usePageTransition';
import PointButton from '../Custom/PointButton';

export const GalleryProduct = () => {
    const navigate = useNavigate();

    const { startTransition } = usePageTransition();


    const data = [
        {
            id: 1,
            image: "/Images/watch_gallery.png",
            title: "Watch.",
            description: "Mantente en contacto desde tu muñeca.",
            link: "/watch"
        },
        {
            id: 2,
            image: "/Images/mac_gallery.jpg",
            title: "Mac.",
            description: "Potencia y diseño en cada Mac.",
            link: "/mac"
        },
        {
            id: 3,
            image: "/Images/airpodmax_gallery.jpg",
            title: "Airpods Max.",
            description: "Sonido envolvente y puro.",
            link: "/airpods"
        },
        {
            id: 4,
            image: "/Images/imac_gallery.jpg",
            title: "iMac.",
            description: "Comodidad y calidad en un solo equipo.",
            link: "/imac"
        },
    ]


    return (
        <div className="w-full flex flex-col items-center space-y-8 mt-20">
            <div className="flex flex-col space-y-4 items-center py-20 ">
                <h1 className="text-5xl italic font-bold">Todos los productos Hey Apple</h1>
                <h1 className="text-xl font-normal">Descubri todos los productos </h1>
            </div>
            <section className="w-full grid grid-cols-2 grid-row-3 px-24 gap-2">
                {data.map((item, index) => (
                    <section 
                        className="flex flex-col space-y-2 "
                        onClick={() => {
                            startTransition(navigate, item.link); 
                        }}
                    >
                        <div className=" w-full h-fit bg-white rounded-xl py-2 px-8 flex justify-between items-center  cursor-pointer ">
                            <h1 className="text-2xl font-semibold text-text">{item.title}</h1>
                            <p className="text-lg font-semibold text-dim-grey">{item.description}</p>
                        </div>
                        <div key={index} className="w-full relative col-span-1 bg-white row-span-1 p-1 flex justify-center items-center rounded-2xl hover:p-0 hover:transition-all hover:duration-300 cursor-pointer group">
                            <img src={item.image} alt={item.title} className="w-full h-auto object-cover rounded-2xl" />
                            <div className="absolute inset-0 flex items-center justify-center rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-white/30">
                                <h1 className="text-2xl font-semibold text-text">{item.title}</h1>
                            </div>
                        </div> 
                    </section>
                ))}
            </section>

            <div className='w-1/4 '>
                <PointButton text_1="Ver todos los productos" text_2="Ver todos los productos" link="/products" style={true}/>
            </div> 
        
        </div>
    )
}
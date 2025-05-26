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
        <div className="w-full flex flex-col items-center space-y-8 mt-10 sm:mt-14 md:mt-16 lg:mt-20">
            <div className="flex flex-col space-y-2 sm:space-y-4 items-center py-8 sm:py-12 md:py-16 lg:py-20">
                <h1 className="italic font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl">
                    Todos los productos Hey Apple
                </h1>
                <h1 className="font-normal text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-xl">
                    Descubri todos los productos
                </h1>
            </div>
            <section className="
                w-full
                grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2
                gap-4 sm:gap-6 xl:gap-8
                px-2 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-24
            ">
                {data.map((item, index) => (
                    <section 
                        className="flex flex-col space-y-2"
                        onClick={() => {
                            startTransition(navigate, item.link); 
                        }}
                        key={item.id}
                    >
                        <div className="w-full h-fit bg-white rounded-xl py-2 px-4 xl:px-8 flex justify-between items-center cursor-pointer">
                            <h1 className="font-semibold text-base xl:text-2xl text-text">{item.title}</h1>
                            <p className="font-semibold text-xs xl:text-lg text-dim-grey">{item.description}</p>
                        </div>
                        <div className="w-full relative col-span-1 bg-white row-span-1 p-1 flex justify-center items-center rounded-2xl hover:p-0 hover:transition-all hover:duration-300 cursor-pointer group">
                            <img src={item.image} alt={item.title} className="w-full h-auto object-cover rounded-2xl" />
                            <div className="absolute inset-0 flex items-center justify-center rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-white/30">
                                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-text">{item.title}</h1>
                            </div>
                        </div> 
                    </section>
                ))}
            </section>

            <div className='w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4'>
                <PointButton text_1="Ver todos los productos" text_2="Ver todos los productos" link="/products" style={true}/>
            </div> 
        </div>
    )
}
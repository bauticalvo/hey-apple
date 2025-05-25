
export const GalleryProduct = () => {

    const data = [
        {
            id: 1,
            image: "/Images/watch_gallery.jpg",
            title: "Watch",
            description: "Mantente en contacto desde tu muñeca.",
            link: "/watch"
        },
        {
            id: 2,
            image: "/Images/mac_gallery.jpg",
            title: "Mac",
            description: "Mantente en contacto desde tu muñeca.",
            link: "/mac"
        },
        {
            id: 3,
            image: "/Images/watch_gallery2.jpg",
            title: "Airpods Max",
            description: "Mantente en contacto desde tu muñeca.",
            link: "/airpods"
        },
        {
            id: 4,
            image: "/Images/watch_gallery.jpg",
            title: "iMac",
            description: "Mantente en contacto desde tu muñeca.",
            link: "/imac"
        },
        // {
        //     id: 5,
        //     image: "/Images/watch_gallery.jpg",
        //     title: "Apple Pencil",
        //     description: "Mantente en contacto desde tu muñeca.",
        //     link: "/apple-pencil"
        // },
        // {
        //     id: 6,
        //     image: "/Images/watch_gallery.jpg",
        //     title: "Monitores",
        //     description: "Mantente en contacto desde tu muñeca.",
        //     link: "/displays"
        // },
    ]


    return (
        <div className="w-full flex flex-col items-center space-y-8 mt-20">
            <div className="flex flex-col space-y-4 items-center py-8 ">
                <h1 className="text-5xl italic font-bold">Todos los productos Hey Apple</h1>
                <h1 className="text-xl font-normal">Descubri todos los productos </h1>
            </div>
            <section className="w-full grid grid-cols-2 grid-row-3 px-16 gap-4">
                {data.map((item, index) => (
                    <div key={index} className="w-full col-span-1 row-span-1 p-20  flex justify-center items-center relative">
                        <img src={item.image} alt={item.title} className="w-full h-auto object-cover rounded-2xl" />
                        <div className="absolute top-12 w-full h-full flex flex-col justify-start items-center space-y-2">
                            <h1 className="text-3xl font-semibold text-text">{item.title}</h1>
                            <p className="text-xl font-semibold text-text">{item.description}</p>
                        </div>
                    </div> 
                ))}
            </section>
        </div>
    )
}
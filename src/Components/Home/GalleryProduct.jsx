
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
            image: "/Images/watch_gallery.jpg",
            title: "Mac",
            description: "Mantente en contacto desde tu muñeca.",
            link: "/mac"
        },
        {
            id: 3,
            image: "/Images/watch_gallery.jpg",
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
        {
            id: 5,
            image: "/Images/watch_gallery.jpg",
            title: "Apple Pencil",
            description: "Mantente en contacto desde tu muñeca.",
            link: "/apple-pencil"
        },
        {
            id: 6,
            image: "/Images/watch_gallery.jpg",
            title: "Monitores",
            description: "Mantente en contacto desde tu muñeca.",
            link: "/displays"
        },
    ]


    return (
        <div className="w-full ">
            <section className="w-full grid grid-cols-2 grid-row-3 px-8">
                {data.map((item, index) => (
                    <div key={index} className="w-full col-span-1 row-span-1  flex justify-center items-center">
                        <img src={item.image} alt={item.title} className="w-[90%] h-[90%] object-cover rounded-2xl" />
                    </div> 
                ))}
            </section>
        </div>
    )
}
import { useNavigate } from "react-router";

export const Error404 = ({startTransition}) => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-text space-y-4 px-4">
            <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-[10rem]">404</h1>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-7xl text-center">Nada aquí todavía.</h1>
            <h1 className="font-bold text-footer text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-center">Incluso Apple empezó en un garaje vacío.</h1>
            <button
                onClick={() => {
                    startTransition(navigate, "/")
                }}
                className="font-bold bg-text text-background hover:cursor-pointer rounded-full mt-8
                    text-base px-6 py-2
                    md:text-xl md:px-10 md:py-3
                    2xl:text-3xl 2xl:px-12 2xl:py-4
                "
            >
                Volver a la página principal
            </button>
        </div>
    );
};
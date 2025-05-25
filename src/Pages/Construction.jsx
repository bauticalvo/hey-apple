import { useNavigate } from "react-router";

export const Construction = ({startTransition}) => {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center space-y-6">
        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8rem] font-black text-tiffany-blue">
          🚧
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-text text-center">
          En construcción
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-dim-grey text-center max-w-xl">
          Próximamente disponible
        </p>
        <button
                onClick={() => {
                    startTransition(navigate, "/")
                }}
                className="font-bold bg-text text-background hover:cursor-pointer rounded-full mt-8
                    text-base px-6 py-3
                    sm:text-lg sm:px-8 sm:py-4
                    md:text-xl md:px-10 md:py-5
                    xl:text-2xl xl:px-12 xl:py-6
                    2xl:text-3xl 2xl:px-16 2xl:py-7
                "
            >
                Volver a la página principal
            </button>
      </div>
    </div>
  );
};

 
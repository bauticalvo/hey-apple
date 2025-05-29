import { useNavigate } from "react-router";

export const Construction = ({startTransition}) => {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center space-y-6">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-text text-center">
          Proximamente ...
        </h1>
        
        <button
                onClick={() => {
                    startTransition(navigate, "/")
                }}
                className="font-bold bg-text text-background hover:cursor-pointer rounded-full mt-8
                    text-base px-6 py-2
                    sm:text-lg sm:px-8 sm:py-4
                    md:text-xl md:px-10 md:py-3
                    2xl:text-3xl 2xl:px-10 2xl:py-3
                "
            >
                Volver a la página principal
            </button>
      </div>
    </div>
  );
};

 